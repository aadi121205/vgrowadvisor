import BasicNavbar from "./Comps/Nav";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comps/Home";
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <BasicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
{/*         <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
