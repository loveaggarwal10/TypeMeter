import StatCard from "./StatCard";

// The four live statistics: WPM, Accuracy, Time Left, Errors.
export default function StatsGrid({ wpm, accuracy, timeLeft, errors }) {
  return (
    <section className="stats">
      <StatCard id="wpm" title="WPM" value={wpm} caption="Words per minute" />
      <StatCard id="accuracy" title="Accuracy" value={`${accuracy}%`} caption="Typing accuracy" />
      <StatCard id="timer" title="Time Left" value={timeLeft} caption="Seconds remaining" />
      <StatCard id="errors" title="Errors" value={errors} caption="Incorrect characters" />
    </section>
  );
}
