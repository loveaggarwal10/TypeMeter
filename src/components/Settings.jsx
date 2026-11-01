import SettingSelect from "./SettingSelect";

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const durationOptions = [
  { value: 15, label: "15 Seconds" },
  { value: 30, label: "30 Seconds" },
  { value: 60, label: "60 Seconds" },
];

// Difficulty + duration dropdowns and the Start button.
export default function Settings({
  difficulty,
  duration,
  disabled,
  onDifficultyChange,
  onDurationChange,
  onStart,
}) {
  return (
    <section className="settings">
      <SettingSelect
        id="difficulty"
        label="Difficulty"
        value={difficulty}
        options={difficultyOptions}
        disabled={disabled}
        onChange={onDifficultyChange}
      />

      <SettingSelect
        id="duration"
        label="Test Duration"
        value={duration}
        options={durationOptions}
        disabled={disabled}
        onChange={(value) => onDurationChange(Number(value))}
      />

      <button id="startBtn" className="start-btn" onClick={onStart}>
        Start Test
      </button>
    </section>
  );
}
