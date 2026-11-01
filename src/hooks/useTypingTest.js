import { useEffect, useState } from "react";
import { getRandomParagraph } from "../data/paragraphs";
import useBestScore from "./useBestScore";

// Holds ALL the logic of the typing test.
// Components only receive the values and functions they need.

// Count how many typed characters match the paragraph.
function countCharacters(typedText, paragraph) {
  let correct = 0;
  let incorrect = 0;

  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === paragraph[i]) correct++;
    else incorrect++;
  }

  return { correct, incorrect };
}

// WPM = (correct characters / 5) per minute.
function calculateWpm(correct, elapsedSeconds) {
  if (elapsedSeconds <= 0) return 0;
  return Math.round(correct / 5 / (elapsedSeconds / 60));
}

export default function useTypingTest() {
  // ----- settings -----
  const [difficulty, setDifficulty] = useState("easy");
  const [duration, setDuration] = useState(30);

  // ----- test state -----
  const [status, setStatus] = useState("idle"); // idle | running | finished
  const [runId, setRunId] = useState(0); // changes on every start, restarts the timer
  const [paragraph, setParagraph] = useState("");
  const [typedText, setTypedText] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);

  const { bestWPM, updateBestScore } = useBestScore();

  const isRunning = status === "running";

  // ----- values calculated from the typed text -----
  const { correct, incorrect } = countCharacters(typedText, paragraph);
  const accuracy =
    typedText.length > 0 ? Math.round((correct / typedText.length) * 100) : 100;

  // ----- timer: counts down every second while the test is running -----
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, runId]);

  // ----- finish the test when the time reaches 0 -----
  useEffect(() => {
    if (isRunning && timeLeft <= 0) {
      const finalWpm = calculateWpm(correct, duration);

      setTimeLeft(0);
      setWpm(finalWpm);
      setStatus("finished");
      updateBestScore(finalWpm);
    }
  }, [isRunning, timeLeft]);

  // ----- actions -----
  function startTest() {
    setParagraph(getRandomParagraph(difficulty));
    setTypedText("");
    setTimeLeft(duration);
    setWpm(0);
    setStatus("running");
    setRunId((id) => id + 1);
  }

  function handleTyping(event) {
    if (!isRunning) return;

    const text = event.target.value;
    const { correct } = countCharacters(text, paragraph);

    setTypedText(text);
    setWpm(calculateWpm(correct, duration - timeLeft));
  }

  function changeDuration(newDuration) {
    setDuration(newDuration);
    // Show the new time on the timer when no test is running.
    if (!isRunning) setTimeLeft(newDuration);
  }

  return {
    // settings
    difficulty,
    duration,
    setDifficulty,
    changeDuration,
    // test state
    status,
    isRunning,
    paragraph,
    typedText,
    timeLeft,
    // statistics
    wpm,
    accuracy,
    errors: incorrect,
    bestWPM,
    // actions
    startTest,
    handleTyping,
  };
}
