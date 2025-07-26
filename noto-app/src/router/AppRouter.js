import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
import TopBar from "../components/TopBar";
import "../css/Home.css";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <TopBar />
              <div className="heading-box">
                <p className="heading">My Notes</p>
              </div>
              <NoteList />
            </div>
          }
        />
        <Route path="/add-note" element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  );
}
