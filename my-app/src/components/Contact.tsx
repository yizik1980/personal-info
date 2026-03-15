import React, { useState } from 'react';

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: 'syizikm@gmail.com',
    href: 'mailto:syizikm@gmail.com',
    color: '#00f5ff',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '052-8508830',
    href: 'tel:+972528508830',
    color: '#7c3aed',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'yizik-malka',
    href: 'https://www.linkedin.com/in/yizik-malka-3188a52a/',
    color: '#3b82f6',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Haifa, Israel',
    href: null,
    color: '#22c55e',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState('');

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" style={{ background: 'rgba(10,22,40,0.4)', paddingBottom: '120px' }}>
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
            Open to new opportunities and collaborations.
            <br />
            <span style={{ color: '#00f5ff' }}>Let's build something great together.</span>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '700px', margin: '0 auto 60px' }}>
          {contactItems.map((item) => (
            <div key={item.label} style={{
              background: 'rgba(10,22,40,0.7)',
              border: `1px solid ${item.color}20`,
              padding: '24px',
              display: 'flex', alignItems: 'center', gap: '16px',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
              cursor: item.href ? 'pointer' : 'default',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}10`;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = `${item.color}20`;
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            onClick={() => item.href ? undefined : copy(item.value, item.label)}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: item.color, opacity: 0.5 }} />

              <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</span>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', letterSpacing: '2px', color: item.color, marginBottom: '4px' }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ color: '#e2e8f0', fontSize: '0.9rem', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    onClick={e => e.stopPropagation()}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{item.value}</span>
                )}
              </div>

              {/* Copy button */}
              {!item.href && (
                <button onClick={() => copy(item.value, item.label)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: copied === item.label ? '#22c55e' : '#475569',
                  fontSize: '0.8rem', fontFamily: "'Share Tech Mono', monospace",
                  transition: 'color 0.2s', padding: '4px',
                }}>
                  {copied === item.label ? '✓' : 'COPY'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="mailto:syizikm@gmail.com" className="btn-glow" style={{ fontSize: '0.85rem' }}>
            Send Message
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '80px',
        borderTop: '1px solid rgba(0,245,255,0.08)',
        paddingTop: '32px',
        textAlign: 'center',
        color: '#334155',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.75rem',
        letterSpacing: '2px',
      }}>
        <span>ITZIK MALKA © 2025</span>
        <span style={{ margin: '0 12px', color: '#00f5ff', opacity: 0.3 }}>|</span>
        <span>SENIOR FULL STACK DEVELOPER</span>
        <span style={{ margin: '0 12px', color: '#00f5ff', opacity: 0.3 }}>|</span>
        <span>HAIFA, ISRAEL</span>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
