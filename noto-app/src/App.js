import "./App.css";
import { NoteProvider } from "./context/NoteContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <NoteProvider>
      <AppRouter />
    </NoteProvider>
  );
}

export default App;
