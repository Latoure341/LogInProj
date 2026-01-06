import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Dashboard from "./components/dashboard.jsx";
import Home from "./components/home.jsx";

import assets from "./assets/femaleOutfit.jpg";
import streetwear from "./assets/streetwear.jpg";
import formal from "./assets/formal.jpg";
import "./App.css";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={<div className="p-8">About page (placeholder)</div>}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </header>
  );
}

export default App;
