// Highlights each character according to the user's typing progress.
function getCharacterClass(index, typedText, paragraph) {
  if (index < typedText.length) {
    return typedText[index] === paragraph[index] ? "correct" : "incorrect";
  }

  if (index === typedText.length) return "current";
  return "";
}

export default function Paragraph({ paragraph, typedText }) {
  return (
    <div className="paragraph" aria-label="Text to type">
      {paragraph
        ? paragraph.split("").map((character, index) => (
            <span
              key={index}
              className={getCharacterClass(index, typedText, paragraph)}
            >
              {character}
            </span>
          ))
        : "Select your settings and press Start Test to begin."}
    </div>
  );
}
