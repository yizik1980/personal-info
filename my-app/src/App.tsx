import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import AccessibilityWidget from './components/AccessibilityWidget';

function App() {
  return (
    <LanguageProvider>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <AccessibilityWidget />
    </LanguageProvider>
  );
}

export default App;
