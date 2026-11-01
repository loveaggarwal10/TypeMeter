// Personal best (saved in localStorage).
export default function BestScore({ bestWPM }) {
  return (
    <section className="best-score">
      <div>
        <p>Personal Best</p>
        <h2 id="bestScore">{bestWPM} WPM</h2>
      </div>

      <span className="trophy">🏆</span>
    </section>
  );
}
