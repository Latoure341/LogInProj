import { Routes, Route, Link } from "react-router-dom";
import About from "./components/about.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Dashboard from "./components/dashboard.jsx";
import Home from "./components/home.jsx";

import "./App.css";

function App() {
  
  return (
    <header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </header>
  );
}

export default App;
