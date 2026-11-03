import { useEffect, useRef } from "react";

export default function TypingInput({ value, disabled, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  return (
    <textarea
      id="typingInput"
      ref={inputRef}
      value={value}
      onChange={onChange}
      placeholder="Your typing area will be ready when you start the test..."
      disabled={disabled}
      spellCheck={false}
      autoComplete="off"
      autoCapitalize="off"
      aria-label="Type the paragraph here"
    />
  );
}
