import { useCallback, useState } from "react";

const STORAGE_KEY = "typeMeterBestWpm";

// Read the saved score safely, including when browser storage is unavailable.
function readBestScore() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
}

export default function useBestScore() {
  const [bestWPM, setBestWPM] = useState(readBestScore);

  const updateBestScore = useCallback((newScore) => {
    setBestWPM((currentBest) => {
      if (newScore <= currentBest) return currentBest;

      try {
        localStorage.setItem(STORAGE_KEY, String(newScore));
      } catch {
        // The app still works if localStorage is blocked.
      }

      return newScore;
    });
  }, []);

  return { bestWPM, updateBestScore };
}
