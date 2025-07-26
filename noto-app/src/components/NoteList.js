import { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Masonry from "react-masonry-css";
import { useNotes } from "../context/NoteContext";
import "../css/NoteList.css";
import NoteItem from "./NoteItem";

function NoteList() {
  const { categories, notes } = useNotes();
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNotes =
    selectedCategory === "all"
      ? notes
      : notes.filter((note) => note.category === selectedCategory);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  const breakpointColumnsObj = {
    default: 6,
    1180: 5,
    1000: 4,
    900: 4,
    800:3,
    700: 2,
  };

  return (
    <>
      <div className="category-scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <MdChevronLeft size={24} style={{ color: "#000" }} />
        </button>
        <div className="category-scroll-container" ref={scrollRef}>
          {categories.map((cat) => (
            <div
              key={cat}
              className={`category-chip ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          <MdChevronRight size={24} style={{ color: "#000" }} />
        </button>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            category={note.category}
            createdAt={note.createdAt}
            isPinned={note.isPinned}
            content={note.content}
          />
        ))}
      </Masonry>
    </>
  );
}

export default NoteList;
