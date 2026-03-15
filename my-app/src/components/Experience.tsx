import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const colors = ['#00f5ff', '#7c3aed', '#3b82f6'];
const tags = [
  ['NestJS', 'TypeScript', 'Angular', 'React', 'MongoDB', 'SQL Server', 'Jenkins'],
  ['Angular 11', 'C#', '.NET Core', 'WCF', 'REST API', 'JavaScript'],
  ['AngularJS', 'Angular', 'Node.js', 'ASP.NET', 'NgRx', 'OracleDB', 'TFS'],
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const { t } = useLanguage();
  const jobs = t.experience.jobs;
  const job = jobs[activeJob];
  const color = colors[activeJob];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>

        <div style={{ display: 'flex', gap: '0', marginBottom: '40px', overflowX: 'auto' }}>
          {jobs.map((j, i) => (
            <button key={i} onClick={() => setActiveJob(i)} style={{
              flex: 1, minWidth: '200px', padding: '18px 20px',
              background: 'none', border: 'none',
              borderBottom: `2px solid ${activeJob === i ? colors[i] : 'rgba(255,255,255,0.08)'}`,
              color: activeJob === i ? colors[i] : '#94a3b8',
              cursor: 'pointer', textAlign: 'left',
              fontFamily: "'Rajdhani', sans-serif", fontSize: '0.95rem', fontWeight: 600,
              transition: 'all 0.3s',
            }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', marginBottom: '4px', opacity: 0.7 }}>{j.period}</div>
              {j.title}
              <div style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.7, marginTop: '2px' }}>{j.company}</div>
            </button>
          ))}
        </div>

        <div key={`${activeJob}-${t.experience.title}`} style={{
          background: 'rgba(10,22,40,0.7)', border: `1px solid ${color}30`,
          padding: '40px', position: 'relative',
          animation: 'fadeInUp 0.4s ease', boxShadow: `0 0 30px ${color}10`,
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '50px', height: '2px', background: color }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '50px', background: color }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.1rem', color, marginBottom: '6px' }}>{job.title}</h3>
              <p style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 600 }}>{job.company}</p>
            </div>
            <span style={{
              padding: '6px 14px', border: `1px solid ${color}50`, color,
              fontFamily: "'Share Tech Mono', monospace", fontSize: '0.75rem',
              background: `${color}08`, whiteSpace: 'nowrap',
            }}>{job.period}</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {job.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', color: '#94a3b8', fontSize: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color, flexShrink: 0, marginTop: '4px' }}>▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tags[activeJob].map(tag => (
              <span key={tag} style={{
                padding: '4px 12px', fontSize: '0.8rem', letterSpacing: '1px',
                border: `1px solid ${color}40`, color, background: `${color}08`,
                fontFamily: "'Share Tech Mono', monospace",
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
