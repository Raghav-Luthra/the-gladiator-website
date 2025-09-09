import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeAnimation from './components/WelcomeAnimation';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Contact />
    </>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeAnimation onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;