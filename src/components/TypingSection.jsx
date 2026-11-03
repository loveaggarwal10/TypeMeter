import Paragraph from "./Paragraph";
import TypingInput from "./TypingInput";

const statusText = {
  idle: "Ready to start",
  running: "Test in progress",
  finished: "Test completed",
};

export default function TypingSection({
  status,
  paragraph,
  typedText,
  onTyping,
}) {
  const progress = paragraph
    ? Math.min((typedText.length / paragraph.length) * 100, 100)
    : 0;

  return (
    <main className="typing-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PRACTICE AREA</p>
          <h2>Typing Test</h2>
        </div>
        <span className={`status status-${status}`} aria-live="polite">
          <span className="status-dot"></span>
          {statusText[status]}
        </span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label="Typing progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <Paragraph paragraph={paragraph} typedText={typedText} />

      <TypingInput
        value={typedText}
        disabled={status !== "running"}
        onChange={onTyping}
      />

      <div className="typing-footer">
        <span>Type the paragraph above as accurately as possible.</span>
        <span>{typedText.length} / {paragraph.length || 0} characters</span>
      </div>
    </main>
  );
}
