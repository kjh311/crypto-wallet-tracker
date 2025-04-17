import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import AllWallets from './pages/AllWallets';

function App() {
  return (
    // <div className="App">
    
    <Router>
      <NavBar />
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/wallets" element={<AllWallets />} />

    </Routes>
  </Router>
    // </div>
  );
}

export default App;
