import { useState } from "react";

const STORAGE_KEY = "bestWPM";

// Keeps the personal-best WPM and saves it in localStorage
// so it is still there after refreshing the page.
export default function useBestScore() {
  const [bestWPM, setBestWPM] = useState(
    () => Number(localStorage.getItem(STORAGE_KEY)) || 0
  );

  // Save the score only if it beats the current best.
  function updateBestScore(wpm) {
    if (wpm > bestWPM) {
      setBestWPM(wpm);
      localStorage.setItem(STORAGE_KEY, wpm);
    }
  }

  return { bestWPM, updateBestScore };
}
