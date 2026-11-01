// A single statistic box (title, big value, small caption).
export default function StatCard({ id, title, value, caption }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2 id={id}>{value}</h2>
      <span>{caption}</span>
    </div>
  );
}
