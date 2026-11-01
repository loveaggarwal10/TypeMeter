// One labelled dropdown (used for Difficulty and Test Duration).
export default function SettingSelect({ id, label, value, options, disabled, onChange }) {
  return (
    <div className="setting-group">
      <label htmlFor={id}>{label}</label>

      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
