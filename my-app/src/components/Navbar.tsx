import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { trackClick } from '../utils/analytics';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t, toggle } = useLanguage();

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
      direction: 'ltr',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.1rem', fontWeight: 900,
        color: '#00f5ff', textDecoration: 'none',
        letterSpacing: '3px',
        textShadow: '0 0 15px rgba(0,245,255,0.5)',
      }}>IM<span style={{ color: '#7c3aed' }}>_</span></a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '28px', listStyle: 'none',
        fontFamily: "'Orbitron', sans-serif", fontSize: '0.68rem', letterSpacing: '2px',
        alignItems: 'center',
      }} className="nav-desktop">
        {t.nav.links.map((label, i) => (
          <li key={label}>
            <a href={`#${t.nav.anchors[i]}`} style={{
              color: '#94a3b8', textDecoration: 'none', textTransform: 'uppercase',
              transition: 'color 0.2s, text-shadow 0.2s',
              fontFamily: lang === 'he' ? "'Rajdhani', sans-serif" : undefined,
              letterSpacing: lang === 'he' ? '0' : undefined,
            }}
            onClick={() => trackClick(`nav_${t.nav.anchors[i]}`, 'navigation', label)}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = '#00f5ff';
              (e.target as HTMLElement).style.textShadow = '0 0 10px rgba(0,245,255,0.6)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = '#94a3b8';
              (e.target as HTMLElement).style.textShadow = 'none';
            }}>{label}</a>
          </li>
        ))}

        {/* Language toggle */}
        <li>
          <button onClick={() => { toggle(); trackClick('lang_toggle', 'engagement', lang === 'en' ? 'EN→HE' : 'HE→EN'); }} title={lang === 'en' ? 'Switch to Hebrew' : 'עבור לאנגלית'} style={{
            background: 'none', border: '1px solid rgba(0,245,255,0.3)',
            color: '#00f5ff', cursor: 'pointer', padding: '5px 12px',
            fontFamily: "'Orbitron', sans-serif", fontSize: '0.68rem',
            letterSpacing: '1px', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.1)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,245,255,0.3)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'none';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}>
            <span style={{ fontSize: '0.9rem' }}>{lang === 'en' ? '🇮🇱' : '🇺🇸'}</span>
            {lang === 'en' ? 'he' : 'EN'}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="hamburger-area">
        <button onClick={toggle} style={{
          background: 'none', border: '1px solid rgba(0,245,255,0.3)',
          color: '#00f5ff', cursor: 'pointer', padding: '4px 10px',
          fontFamily: "'Rajdhani', sans-serif", fontSize: '0.8rem',
        }}>{lang === 'en' ? '🇮🇱 he' : '🇺🇸 EN'}</button>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px',
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: '#00f5ff', borderRadius: '2px',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0,
          background: 'rgba(5,10,20,0.98)', padding: '24px',
          borderBottom: '1px solid rgba(0,245,255,0.2)',
          display: 'flex', flexDirection: 'column', gap: '20px',
          direction: lang === 'he' ? 'rtl' : 'ltr',
        }}>
          {t.nav.links.map((label, i) => (
            <a key={label} href={`#${t.nav.anchors[i]}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: lang === 'he' ? "'Rajdhani', sans-serif" : "'Orbitron', sans-serif",
                fontSize: '0.85rem', letterSpacing: lang === 'he' ? '0' : '2px',
                color: '#00f5ff', textDecoration: 'none', textTransform: 'uppercase',
              }}>{label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-area { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
