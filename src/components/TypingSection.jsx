import Paragraph from "./Paragraph";
import TypingInput from "./TypingInput";

const statusText = {
  idle: "Ready to start",
  running: "Test in progress",
  finished: "Test completed",
};

// Heading + paragraph + textarea + footer line.
export default function TypingSection({ status, paragraph, typedText, onTyping }) {
  return (
    <main className="typing-section">
      <div className="section-heading">
        <h2>Typing Test</h2>
        <span id="testStatus">{statusText[status]}</span>
      </div>

      <Paragraph paragraph={paragraph} typedText={typedText} />

      <TypingInput
        value={typedText}
        disabled={status !== "running"}
        onChange={onTyping}
      />

      <div className="typing-footer">
        <span>Type the text shown above as accurately as possible.</span>
        <span id="characterCount">{typedText.length} characters</span>
      </div>
    </main>
  );
}
