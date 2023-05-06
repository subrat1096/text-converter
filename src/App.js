import { About } from "./components/About";
import { Navigate } from "./components/Navbar";
import { Textform } from "./components/Textform";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Routes>
        <Route path="/" element={<Textform />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
