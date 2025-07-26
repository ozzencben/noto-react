import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NoteContext";
import "../css/AddNote.css";

function AddNote() {
  const { notes, setNotes, categories } = useNotes();
  const navigate = useNavigate();

  const [noteText, setNoteText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("all");

  const handleSubmit = () => {
    if (noteText.trim() === "") return;

    const newNote = {
      id: Date.now(),
      title: "Untitled",
      content: noteText,
      category: selected,
      createdAt: new Date(),
      isPinned: false,
    };

    setNotes([...notes, newNote]);
    setNoteText("");
    navigate("/");
  };

  return (
    <div className="container">
      {/* Üst bar */}
      <div className="topbar">
        <div className="add-note" onClick={() => navigate("/")}>
          <MdOutlineArrowBackIosNew style={{ color: "#fff" }} />
        </div>
        <span className="heading">Add Note</span>
      </div>

      {/* Dropdown alanı */}
      <div className="dropdown-box">
        <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
          <span>{selected}</span>
          <TbCategoryPlus className="category-icon" />
          <div className="dropdown">
            {isOpen && (
              <ul className="dropdown-list">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => {
                      setSelected(category);
                      setIsOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Not yazma alanı */}
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <textarea
          className="textarea"
          wrap="soft"
          placeholder="Write your note..."
          onChange={(e) => setNoteText(e.target.value)}
          value={noteText}
        />
      </div>

      {/* Ekleme butonu */}
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="textarea-btn" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddNote;
