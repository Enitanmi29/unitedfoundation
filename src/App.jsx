import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Sign from './components/Sign';
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <Router>
      <div>
        {/* Global SEO and meta configuration */}
        <Helmet>
          <title>United Foundation for Linguistics, Culture & Development (UFLCD)</title>
          <meta
            name="description"
            content="United Foundation for Linguistics, Culture & Development (UFLCD) is dedicated to promoting language education, cultural preservation, youth empowerment, and sustainable development across Africa."
          />
          <meta
            name="keywords"
            content="United Foundation, UFLCD, Linguistics, Culture, Development, NGO, Africa, Education, Youth Empowerment, Cultural Exchange, Language, Sustainability"
          />
          <meta name="author" content="United Foundation for Linguistics, Culture & Development" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://unitedfoundation.vercel.app/" />
          <meta property="og:title" content="United Foundation for Linguistics, Culture & Development (UFLCD)" />
          <meta property="og:description" content="Empowering Africa’s next generation through language, culture, and education." />
          <meta property="og:image" content="https://unitedfoundation.vercel.app/uflcd-banner.jpg" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="United Foundation for Linguistics, Culture & Development (UFLCD)" />
          <meta name="twitter:description" content="Promoting cultural education, youth creativity, and sustainable development across Africa." />
          <meta name="twitter:image" content="https://unitedfoundation.vercel.app/uflcd-banner.jpg" />

          {/* Canonical URL and Favicon */}
          <link rel="canonical" href="https://unitedfoundation.vercel.app/" />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign in" element={<Sign />} />
        </Routes>
      </div>
    </Router>
  );
};

    
