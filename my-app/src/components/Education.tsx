import React from 'react';

const items = [
  {
    degree: "Bachelor's Degree",
    field: 'Computer Science Education',
    institution: 'Technion – Haifa',
    icon: '🎓',
    color: '#00f5ff',
  },
  {
    degree: 'Professional Course',
    field: '.NET Development',
    institution: 'Technion Continuing Studies',
    icon: '📜',
    color: '#7c3aed',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {items.map((item, i) => (
            <div key={i} style={{
              flex: '1', minWidth: '280px', maxWidth: '420px',
              background: 'rgba(10,22,40,0.7)',
              border: `1px solid ${item.color}25`,
              padding: '36px 32px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
              animation: 'fadeInUp 0.8s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              (e.currentTarget as HTMLElement).style.borderColor = `${item.color}60`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${item.color}15`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.borderColor = `${item.color}25`;
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}>
              {/* BG glow */}
              <div style={{
                position: 'absolute', bottom: '-30px', right: '-30px',
                width: '120px', height: '120px', borderRadius: '50%',
                background: `radial-gradient(circle, ${item.color}10, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{item.icon}</div>

              <div style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.7rem', letterSpacing: '3px',
                color: item.color, marginBottom: '8px', textTransform: 'uppercase',
              }}>{item.degree}</div>

              <h3 style={{ color: '#e2e8f0', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>
                {item.field}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.95rem', fontFamily: "'Share Tech Mono', monospace" }}>
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
