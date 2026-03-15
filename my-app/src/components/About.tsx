import React from 'react';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '6+', label: 'Tech Stacks' },
  { value: '∞', label: 'Lines of Code' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'rgba(10,22,40,0.4)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Text */}
          <div style={{ animation: 'fadeInUp 0.8s ease' }}>
            <p style={{
              color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.9,
              borderLeft: '3px solid #00f5ff', paddingLeft: '20px', marginBottom: '24px',
            }}>
              Full Stack Developer with <span style={{ color: '#00f5ff', fontWeight: 600 }}>10+ years</span> of experience building
              scalable web applications and enterprise systems.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '24px' }}>
              Specialized in <span style={{ color: '#7c3aed' }}>Angular</span>, <span style={{ color: '#7c3aed' }}>React</span>,{' '}
              <span style={{ color: '#7c3aed' }}>Node.js / NestJS</span>, and <span style={{ color: '#7c3aed' }}>TypeScript</span>.
              Experienced in designing RESTful services, integrating complex backend systems, and delivering
              production-grade applications in Agile environments.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.9 }}>
              Currently at <span style={{ color: '#00f5ff' }}>The Phoenix</span>, developing personal information systems,
              scalable APIs, and CI/CD pipelines using Jenkins and Argo.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '28px 20px', textAlign: 'center',
                background: 'rgba(0,245,255,0.04)',
                border: '1px solid rgba(0,245,255,0.15)',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
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
                <div style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '2.2rem', fontWeight: 900,
                  color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.5)',
                  marginBottom: '8px',
                }}>{s.value}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', letterSpacing: '1px', fontFamily: "'Rajdhani', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
