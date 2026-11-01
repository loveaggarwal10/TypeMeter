import { useEffect, useRef } from "react";

// The textarea where the user types.
export default function TypingInput({ value, disabled, onChange }) {
  const inputRef = useRef(null);

  // Focus the textarea as soon as typing is enabled (test started).
  useEffect(() => {
    if (!disabled) inputRef.current.focus();
  }, [disabled]);

  return (
    <textarea
      id="typingInput"
      ref={inputRef}
      value={value}
      onChange={onChange}
      placeholder="Start typing here..."
      disabled={disabled}
      spellCheck="false"
      autoComplete="off"
      autoCapitalize="off"
    ></textarea>
  );
}
