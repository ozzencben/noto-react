import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const categories = ["all", "daily", "important", "work", "personal"];

  // LocalStorage'dan verileri al (ilk yüklemede)
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem("notes");
      if (savedNotes) {
        const parsed = JSON.parse(savedNotes);
        if (Array.isArray(parsed)) {
          setNotes(parsed);
        } else {
          // Eğer beklenmedik bir veri gelirse localStorage'ı temizle
          localStorage.removeItem("notes");
        }
      }
    } catch (error) {
      console.error("Geçersiz JSON formatı:", error);
      localStorage.removeItem("notes");
    }
  }, []);

  // Notes değiştiğinde localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider value={{ notes, setNotes, categories }}>
      {children}
    </NoteContext.Provider>
  );
}

export const useNotes = () => useContext(NoteContext);
