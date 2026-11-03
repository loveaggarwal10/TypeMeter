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

export default function Settings({
  difficulty,
  duration,
  disabled,
  onDifficultyChange,
  onDurationChange,
  onStart,
}) {
  return (
    <section className="settings" aria-label="Test settings">
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

      <button className="start-btn" onClick={onStart} disabled={disabled}>
        {disabled ? "Test Running..." : "Start Test"}
      </button>
    </section>
  );
}
