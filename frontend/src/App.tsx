import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
