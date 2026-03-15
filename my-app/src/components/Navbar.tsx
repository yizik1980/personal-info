import React, { useState, useEffect } from 'react';

const links = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '16px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(5, 10, 20, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.1rem',
        fontWeight: 900,
        color: '#00f5ff',
        textDecoration: 'none',
        letterSpacing: '3px',
        textShadow: '0 0 15px rgba(0,245,255,0.5)',
      }}>IM<span style={{ color: '#7c3aed' }}>_</span></a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '32px', listStyle: 'none',
        fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', letterSpacing: '2px',
      }} className="nav-desktop">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              color: '#94a3b8', textDecoration: 'none', textTransform: 'uppercase',
              transition: 'color 0.2s, text-shadow 0.2s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = '#00f5ff';
              (e.target as HTMLElement).style.textShadow = '0 0 10px rgba(0,245,255,0.6)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = '#94a3b8';
              (e.target as HTMLElement).style.textShadow = 'none';
            }}
            >{l}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
        flexDirection: 'column', gap: '5px',
      }} className="hamburger">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '24px', height: '2px',
            background: '#00f5ff', borderRadius: '2px', transition: 'all 0.3s',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0,
          background: 'rgba(5,10,20,0.98)', padding: '24px',
          borderBottom: '1px solid rgba(0,245,255,0.2)',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem',
                letterSpacing: '2px', color: '#00f5ff', textDecoration: 'none', textTransform: 'uppercase',
              }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
