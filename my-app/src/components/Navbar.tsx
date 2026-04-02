import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { trackClick } from '../utils/analytics';
import './Navbar.css';

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
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>

      {/* Logo */}
      <a href="#hero" className="nav-logo">
        IM<span className="nav-logo__accent">_</span>
      </a>

      {/* Desktop links */}
      <ul className="nav-desktop">
        {t.nav.links.map((label, i) => (
          <li key={label}>
            <a
              href={`#${t.nav.anchors[i]}`}
              className={`nav-link${lang === 'he' ? ' nav-link--he' : ''}`}
              onClick={() => trackClick(`nav_${t.nav.anchors[i]}`, 'navigation', label)}
            >
              {label}
            </a>
          </li>
        ))}

        {/* Language toggle */}
        <li>
          <button
            className="lang-btn"
            onClick={() => { toggle(); trackClick('lang_toggle', 'engagement', lang === 'en' ? 'EN→HE' : 'HE→EN'); }}
            title={lang === 'en' ? 'Switch to Hebrew' : 'עבור לאנגלית'}
          >
            <span className="lang-btn__flag">{lang === 'en' ? '🇮🇱' : '🇺🇸'}</span>
            {lang === 'en' ? 'he' : 'EN'}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="hamburger-area">
        <button className="hamburger-lang-btn" onClick={toggle}>
          {lang === 'en' ? '🇮🇱 he' : '🇺🇸 EN'}
        </button>

        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map(i => (
            <span key={i} className="hamburger-bar" />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`mobile-menu${lang === 'he' ? ' mobile-menu--he' : ''}`}>
          {t.nav.links.map((label, i) => (
            <a
              key={label}
              href={`#${t.nav.anchors[i]}`}
              className={`mobile-link${lang === 'he' ? ' mobile-link--he' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
