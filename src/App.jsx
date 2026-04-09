import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors";
import Book from "./pages/Book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;