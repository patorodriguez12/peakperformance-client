import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<>NOT FOUND</>} />
        <Route path="/" element={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
