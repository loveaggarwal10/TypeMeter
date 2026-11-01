import Header from "./components/Header";
import Settings from "./components/Settings";
import StatsGrid from "./components/StatsGrid";
import TypingSection from "./components/TypingSection";
import ResultSection from "./components/ResultSection";
import BestScore from "./components/BestScore";
import Footer from "./components/Footer";
import useTypingTest from "./hooks/useTypingTest";

// App only connects the logic (useTypingTest) with the components.
export default function App() {
  const test = useTypingTest();

  return (
    <div className="container">
      <Header />

      <Settings
        difficulty={test.difficulty}
        duration={test.duration}
        disabled={test.isRunning}
        onDifficultyChange={test.setDifficulty}
        onDurationChange={test.changeDuration}
        onStart={test.startTest}
      />

      <StatsGrid
        wpm={test.wpm}
        accuracy={test.accuracy}
        timeLeft={test.timeLeft}
        errors={test.errors}
      />

      <TypingSection
        status={test.status}
        paragraph={test.paragraph}
        typedText={test.typedText}
        onTyping={test.handleTyping}
      />

      {test.status === "finished" && (
        <ResultSection
          wpm={test.wpm}
          accuracy={test.accuracy}
          errors={test.errors}
          onRestart={test.startTest}
        />
      )}

      <BestScore bestWPM={test.bestWPM} />

      <Footer />
    </div>
  );
}
