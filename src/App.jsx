import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperMain from "./components/SuperMain";
import Bootcamp from "./components/Bootcamp";
import Pay from "./components/Pay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuperMain />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;
