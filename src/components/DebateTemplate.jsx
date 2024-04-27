export default function DebateTemplate({
  title,
  handleNewDebate,
  cancelNewDebate,
}) {
  let creatingNewDebate = false;
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleNewDebate}>Start a new debate</button>
      <button
        className={
          creatingNewDebate
            ? "rounded-sm bg-slate-400 px-4 py-2 hover:bg-slate-100"
            : "hidden"
        }
        onClick={cancelNewDebate}
      >
        Cancel
      </button>
    </div>
  );
}
