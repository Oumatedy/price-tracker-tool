import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Prices from './components/Prices';
import ContactCard from './components/ContactCard';
import Registration from './components/Registration';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const catalogRef = useRef(null);
  const navigate = useNavigate();

  // Handler to scroll to catalog or navigate to /catalog
  const handleBrowse = () => {
    navigate('/catalog');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onBrowse={handleBrowse} />} />
          <Route path="/catalog" element={<Prices />} />
          <Route path="/contact" element={<ContactCard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/prices" element={<Prices />} />
          {/* Add more routes here if needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Wrap App in Router for export
export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
