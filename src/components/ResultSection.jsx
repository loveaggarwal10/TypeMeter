import ResultCard from "./ResultCard";

// Shown only after the test is completed.
export default function ResultSection({ wpm, accuracy, errors, onRestart }) {
  return (
    <section id="resultSection" className="result-section">
      <h2>Test Completed!</h2>

      <p className="result-message">Here is your typing performance.</p>

      <div className="result-grid">
        <ResultCard id="finalWpm" label="Final WPM" value={wpm} />
        <ResultCard id="finalAccuracy" label="Final Accuracy" value={`${accuracy}%`} />
        <ResultCard id="finalErrors" label="Total Errors" value={errors} />
      </div>

      <button id="restartBtn" className="restart-btn" onClick={onRestart}>
        Restart Test
      </button>
    </section>
  );
}
