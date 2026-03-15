import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const statValues = ['10+', '3', '6+', '∞'];

function parseText(text: string) {
  const parts = text.split(/(<cyan>.*?<\/cyan>|<purple>.*?<\/purple>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<cyan>'))
      return <span key={i} style={{ color: '#00f5ff', fontWeight: 600 }}>{part.replace(/<\/?cyan>/g, '')}</span>;
    if (part.startsWith('<purple>'))
      return <span key={i} style={{ color: '#7c3aed' }}>{part.replace(/<\/?purple>/g, '')}</span>;
    return part;
  });
}

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" style={{ background: 'rgba(10,22,40,0.4)' }}>
      <div className="container">
        <h2 className="section-title">{a.title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div style={{ animation: 'fadeInUp 0.8s ease' }}>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.9, borderLeft: '3px solid #00f5ff', paddingLeft: '20px', marginBottom: '24px' }}>
              {parseText(a.p1)}
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '24px' }}>
              {parseText(a.p2)}
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.9 }}>
              {parseText(a.p3)}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {statValues.map((val, i) => (
              <div key={i} style={{
                padding: '28px 20px', textAlign: 'center',
                background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.15)',
                transition: 'border-color 0.3s, box-shadow 0.3s', cursor: 'default',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.5)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,245,255,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.15)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2.2rem', fontWeight: 900, color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.5)', marginBottom: '8px' }}>{val}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', letterSpacing: '1px' }}>{a.stats[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
