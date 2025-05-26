import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prices from './components/Prices';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Prices />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
