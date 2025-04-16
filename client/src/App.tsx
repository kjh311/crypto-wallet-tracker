import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  </Router>
    // </div>
  );
}

export default App;
