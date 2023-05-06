import { useState } from "react";
import { About } from "./components/About";
import AlertPromt from "./components/Alert";
import { Navigate } from "./components/Navbar";
import { Textform } from "./components/Textform";
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  const handleDark = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <div className="App">
      <Navigate mode={darkMode} onDark={handleDark} />
      <AlertPromt alert={alert} />
      <Routes>
        <Route path="/" element={<Textform onAlert={showAlert} />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
