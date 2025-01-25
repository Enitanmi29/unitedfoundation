import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Sign from './components/Sign'

export default function App() {
  return (
    <Router>
          <div>
            <div>
              <Navbar />
            </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/sign in" element={<Sign/>} />
          </Routes>
          </div>
    </Router>
  )
};
    
