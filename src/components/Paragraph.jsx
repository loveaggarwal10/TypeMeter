// Shows the text to type. Every character is its own <span>
// so it can be coloured green (correct), red (wrong) or marked as current.
function getCharacterClass(index, typedText, paragraph) {
  if (index < typedText.length) {
    return typedText[index] === paragraph[index] ? "correct" : "incorrect";
  }
  if (index === typedText.length) return "current";
  return "";
}

export default function Paragraph({ paragraph, typedText }) {
  return (
    <div id="paragraph" className="paragraph">
      {paragraph
        ? paragraph.split("").map((character, index) => (
            <span key={index} className={getCharacterClass(index, typedText, paragraph)}>
              {character}
            </span>
          ))
        : "Click on the Start Test button to begin your typing test."}
    </div>
  );
}
