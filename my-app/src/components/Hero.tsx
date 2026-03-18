import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { trackClick } from '../utils/analytics';

function Typewriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDisplayed('');
    setDeleting(false);
    setIdx(0);
  }, [texts]);

  useEffect(() => {
    const current = texts[idx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, deleting, idx, texts]);

  return (
    <span style={{ color: '#00f5ff', fontFamily: "'Share Tech Mono', monospace" }}>
      {displayed}
      <span style={{ animation: 'blink 1s step-end infinite', color: '#7c3aed' }}>|</span>
    </span>
  );
}

function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
          width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%',
          background: p.id % 3 === 0 ? '#00f5ff' : p.id % 3 === 1 ? '#7c3aed' : '#3b82f6',
          opacity: 0.4, animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          boxShadow: `0 0 ${p.size * 3}px currentColor`,
        }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,245,255,0.08) 0%, transparent 60%)',
    }}>
      <Particles />
      <div style={{
        position: 'absolute', left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)',
        animation: 'scan 6s linear infinite', pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', animation: 'fadeInUp 1s ease', position: 'relative', zIndex: 2 }}>
        {/* Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ position: 'relative', display: 'inline-block', animation: 'float 6s ease-in-out infinite' }}>
            <div style={{
              position: 'absolute', inset: '-18px', borderRadius: '50%',
              border: '1px solid rgba(0,245,255,0.3)', borderTopColor: '#00f5ff',
              animation: 'spin-slow 8s linear infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '-32px', borderRadius: '50%',
              border: '1px solid rgba(124,58,237,0.25)', borderBottomColor: '#7c3aed',
              animation: 'spin-reverse 12s linear infinite',
            }} />
            {['top-left','top-right','bottom-left','bottom-right'].map(pos => {
              const isTop = pos.includes('top'), isLeft = pos.includes('left');
              return (
                <div key={pos} style={{
                  position: 'absolute',
                  top: isTop ? '-4px' : undefined, bottom: !isTop ? '-4px' : undefined,
                  left: isLeft ? '-4px' : undefined, right: !isLeft ? '-4px' : undefined,
                  width: '16px', height: '16px',
                  borderTop: isTop ? '2px solid #00f5ff' : 'none',
                  borderBottom: !isTop ? '2px solid #00f5ff' : 'none',
                  borderLeft: isLeft ? '2px solid #00f5ff' : 'none',
                  borderRight: !isLeft ? '2px solid #00f5ff' : 'none',
                }} />
              );
            })}
            <div style={{
              width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden',
              border: '2px solid rgba(0,245,255,0.4)', animation: 'pulse-border 3s ease-in-out infinite',
            }}>
              <img src="/profile.jpg" alt="Itzik Malka"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  const parent = el.parentElement!;
                  parent.style.cssText += 'background:linear-gradient(135deg,rgba(0,245,255,0.1),rgba(124,58,237,0.2));display:flex;align-items:center;justify-content:center;';
                  const text = document.createElement('span');
                  text.textContent = 'IM';
                  text.style.cssText = "font-family:'Orbitron',sans-serif;font-size:2.5rem;font-weight:900;color:#00f5ff;text-shadow:0 0 20px rgba(0,245,255,0.8);";
                  parent.appendChild(text);
                }}
              />
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', marginBottom: '20px',
          border: '1px solid rgba(0,245,255,0.2)', background: 'rgba(0,245,255,0.05)',
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.75rem',
          color: '#94a3b8', letterSpacing: '2px',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
          {h.available}
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900,
          lineHeight: 1.15, marginBottom: '16px',
          animation: 'glitch 8s ease-in-out infinite', letterSpacing: '2px',
        }}>
          <span style={{ color: '#e2e8f0' }}>ITZIK </span>
          <span style={{ color: '#00f5ff', textShadow: '0 0 30px rgba(0,245,255,0.6)' }}>MALKA</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', marginBottom: '12px', minHeight: '2rem', letterSpacing: '1px' }}>
          <Typewriter texts={h.titles} />
        </p>

        <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '12px', fontFamily: "'Share Tech Mono', monospace" }}>
          {h.location}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
          <a href="#contact" className="btn-glow" onClick={() => trackClick('hero_contact_cta', 'cta')}>{h.cta1}</a>
          <a href="#experience" className="btn-glow" style={{ borderColor: '#7c3aed', color: '#7c3aed' }} onClick={() => trackClick('hero_view_work_cta', 'cta')}>{h.cta2}</a>
          <a
            href={`${process.env.PUBLIC_URL}/Itzik_Malka_CV.pdf`}
            download="Itzik_Malka_CV.pdf"
            className="btn-glow"
            style={{ borderColor: '#22c55e', color: '#22c55e' }}
            onClick={() => trackClick('cv_download', 'download', 'CV Download - Hero')}
          >
            ⬇ {h.downloadCv}
          </a>
        </div>

        <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#475569', letterSpacing: '3px' }}>{h.scroll}</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #00f5ff, transparent)' }} />
        </div>
      </div>
    </section>
  );
}
