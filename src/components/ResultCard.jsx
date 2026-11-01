// One box inside the final result (label + big value).
export default function ResultCard({ id, label, value }) {
  return (
    <div className="result-card">
      <span>{label}</span>
      <h2 id={id}>{value}</h2>
    </div>
  );
}
