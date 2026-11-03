import { useEffect, useState } from "react";
import { getRandomParagraph } from "../data/paragraphs";
import useBestScore from "./useBestScore";

// Count correct and incorrect characters typed by the user.
function countCharacters(typedText, paragraph) {
  let correct = 0;
  let incorrect = 0;

  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === paragraph[i]) correct++;
    else incorrect++;
  }

  return { correct, incorrect };
}

// Standard typing-test formula: correct characters / 5 / minutes.
function calculateWpm(correctCharacters, elapsedSeconds) {
  if (elapsedSeconds <= 0) return 0;
  return Math.round(correctCharacters / 5 / (elapsedSeconds / 60));
}

export default function useTypingTest() {
  const [difficulty, setDifficulty] = useState("easy");
  const [duration, setDuration] = useState(30);

  const [status, setStatus] = useState("idle");
  const [runId, setRunId] = useState(0);
  const [paragraph, setParagraph] = useState("");
  const [typedText, setTypedText] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);

  const { bestWPM, updateBestScore } = useBestScore();
  const isRunning = status === "running";

  const { correct, incorrect } = countCharacters(typedText, paragraph);
  const accuracy =
    typedText.length > 0
      ? Math.round((correct / typedText.length) * 100)
      : 100;

  const elapsedSeconds = duration - timeLeft;

  // Run one timer while the test is active. Cleanup prevents duplicate timers.
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => Math.max(previousTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, runId]);

  // Finish once the countdown reaches zero.
  useEffect(() => {
    if (isRunning && timeLeft === 0) {
      const finalWpm = calculateWpm(correct, duration);
      setWpm(finalWpm);
      setStatus("finished");
      updateBestScore(finalWpm);
    }
  }, [isRunning, timeLeft, correct, duration, updateBestScore]);

  function startTest() {
    setParagraph(getRandomParagraph(difficulty));
    setTypedText("");
    setTimeLeft(duration);
    setWpm(0);
    setStatus("running");
    setRunId((previousId) => previousId + 1);
  }

  function handleTyping(event) {
    if (!isRunning) return;

    // Do not allow typing beyond the paragraph length.
    const text = event.target.value.slice(0, paragraph.length);
    const { correct: correctCharacters } = countCharacters(text, paragraph);

    setTypedText(text);
    setWpm(calculateWpm(correctCharacters, Math.max(elapsedSeconds, 1)));
  }

  function changeDuration(newDuration) {
    setDuration(newDuration);
    if (!isRunning) setTimeLeft(newDuration);
  }

  return {
    difficulty,
    duration,
    setDifficulty,
    changeDuration,
    status,
    isRunning,
    paragraph,
    typedText,
    timeLeft,
    wpm,
    accuracy,
    errors: incorrect,
    correct,
    bestWPM,
    startTest,
    handleTyping,
  };
}
