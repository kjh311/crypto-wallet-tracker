import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Hello from './pages/Hello';
import NavBar from './pages/NavBar';

function App() {
  return (
    // <div className="App">
    
    <Router>
      <NavBar />
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello />} />
    </Routes>
  </Router>
    // </div>
  );
}

export default App;
