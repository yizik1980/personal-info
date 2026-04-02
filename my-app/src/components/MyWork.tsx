import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const sites = [
  {
    key: 'fnx',
    url: 'https://my.fnx.co.il/',
    color: '#00f5ff',
    icon: '🏦',
  },
  {
    key: 'citybiz',
    url: 'https://citybiz.co.il/',
    color: '#7c3aed',
    icon: '🏙️',
  },
  {
    key: 'memoryGame',
    url: 'http://memory-game-front-wpzp.onrender.com/',
    color: '#f59e0b',
    icon: '🎮',
  },
];

export default function MyWork() {
  const { t } = useLanguage();
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="mywork">
      <div className="container">
        <h2 className="section-title">{t.myWork.title}</h2>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {sites.map((site, i) => {
            const info = t.myWork.sites[i];
            const isFlipped = flipped === i;
            return (
              <div
                key={site.key}
                style={{ perspective: '1000px', width: '280px', height: '320px', cursor: 'pointer' }}
                onMouseEnter={() => setFlipped(i)}
                onMouseLeave={() => setFlipped(null)}
              >
                {/* Cube wrapper */}
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>

                  {/* Front face */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: 'rgba(10,22,40,0.85)',
                    border: `1px solid ${site.color}35`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '32px 24px', gap: '20px',
                    boxShadow: `0 0 30px ${site.color}10`,
                    animation: 'fadeInUp 0.8s ease',
                    animationDelay: `${i * 0.15}s`,
                    animationFillMode: 'both',
                  }}>
                    {/* Top accent line */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                      background: `linear-gradient(90deg, transparent, ${site.color}, transparent)`,
                    }} />
                    {/* Corner decoration */}
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      width: '18px', height: '18px',
                      borderTop: `2px solid ${site.color}60`,
                      borderRight: `2px solid ${site.color}60`,
                    }} />
                    <div style={{
                      position: 'absolute', bottom: '12px', left: '12px',
                      width: '18px', height: '18px',
                      borderBottom: `2px solid ${site.color}60`,
                      borderLeft: `2px solid ${site.color}60`,
                    }} />
                    {/* Glow circle */}
                    <div style={{
                      position: 'absolute', bottom: '-40px', right: '-40px',
                      width: '150px', height: '150px', borderRadius: '50%',
                      background: `radial-gradient(circle, ${site.color}12, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />

                    <div style={{ fontSize: '3.5rem', lineHeight: 1, filter: `drop-shadow(0 0 12px ${site.color}80)` }}>
                      {site.icon}
                    </div>
                    <div style={{
                      fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem',
                      letterSpacing: '3px', color: site.color, textTransform: 'uppercase',
                    }}>
                      {info.label}
                    </div>
                    <h3 style={{
                      color: '#e2e8f0', fontSize: '1.25rem', fontWeight: 700,
                      textAlign: 'center', lineHeight: 1.3, margin: 0,
                    }}>
                      {info.name}
                    </h3>
                    <p style={{
                      color: '#64748b', fontSize: '0.8rem', fontFamily: "'Share Tech Mono', monospace",
                      textAlign: 'center', margin: 0,
                    }}>
                      {info.role}
                    </p>

                    <div style={{
                      marginTop: '8px', padding: '6px 14px',
                      border: `1px solid ${site.color}40`, color: site.color,
                      fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem',
                      letterSpacing: '2px',
                    }}>
                      HOVER TO VIEW
                    </div>
                  </div>

                  {/* Back face */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, rgba(10,22,40,0.95) 0%, ${site.color}12 100%)`,
                    border: `1px solid ${site.color}60`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '32px 24px', gap: '18px', textAlign: 'center',
                    boxShadow: `0 0 40px ${site.color}20, inset 0 0 40px ${site.color}05`,
                  }}>
                    {/* Scanline overlay */}
                    <div style={{
                      position: 'absolute', inset: 0, pointerEvents: 'none',
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
                    }} />
                    {/* Top accent */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: `linear-gradient(90deg, transparent, ${site.color}, transparent)`,
                      boxShadow: `0 0 10px ${site.color}`,
                    }} />

                    <div style={{ fontSize: '2rem', filter: `drop-shadow(0 0 8px ${site.color})` }}>
                      {site.icon}
                    </div>
                    <h3 style={{
                      color: '#e2e8f0', fontSize: '1.15rem', fontWeight: 700, margin: 0,
                    }}>
                      {info.name}
                    </h3>
                    <p style={{
                      color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0,
                      fontFamily: "'Rajdhani', sans-serif",
                    }}>
                      {info.description}
                    </p>
                    <div style={{
                      fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem',
                      color: `${site.color}90`, wordBreak: 'break-all',
                    }}>
                      {site.url.replace(/https?:\/\//, '').replace(/\/$/, '')}
                    </div>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        marginTop: '4px', padding: '10px 24px',
                        background: `linear-gradient(90deg, ${site.color}20, ${site.color}10)`,
                        border: `1px solid ${site.color}80`,
                        color: site.color, textDecoration: 'none',
                        fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem',
                        letterSpacing: '2px', textTransform: 'uppercase',
                        transition: 'all 0.2s',
                        position: 'relative', zIndex: 1,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = `${site.color}30`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${site.color}50`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${site.color}20, ${site.color}10)`;
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          #mywork .container > div {
            flex-direction: column;
            align-items: center;
          }
          #mywork .container > div > div {
            width: 90vw !important;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}
