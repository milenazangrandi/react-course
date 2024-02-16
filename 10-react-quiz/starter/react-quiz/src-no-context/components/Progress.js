export default function Progress({
  i,
  numQuestions,
  points,
  maxPossiblePoints,
}) {
  let index = i + 1;
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index}</strong>/{numQuestions}
      </p>
      <p>
        {points}/{maxPossiblePoints}
      </p>
    </header>
  );
}
