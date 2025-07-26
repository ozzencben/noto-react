import "../css/NoteItem.css";

function NoteItem({ key, title, category, createdAt, isPinned, content }) {
  return (
    <div className="note-box">
      <div className="category">
        <span>{category}</span>
      </div>
      <div className="note-text-box">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default NoteItem;
