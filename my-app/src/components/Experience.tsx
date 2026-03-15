import React, { useState } from 'react';

const jobs = [
  {
    title: 'Full Stack Developer',
    company: 'The Phoenix',
    period: '06/2022 – Present',
    color: '#00f5ff',
    bullets: [
      'Backend development using Node.js with NestJS and TypeScript',
      'Development of scalable REST APIs and server-side business logic',
      'Frontend development with Angular 14 and React.js',
      'Implementation of new features in personal information systems',
      'Integration with MongoDB and SQL Server databases',
      'Designing modular and maintainable backend architecture',
      'CI/CD pipelines using Jenkins, Argo, and Git',
      'Working in Agile methodology (Scrum)',
      'Collaboration with product managers, QA, and DevOps teams',
    ],
    tags: ['NestJS', 'TypeScript', 'Angular', 'React', 'MongoDB', 'SQL Server', 'Jenkins'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Bank Mizrahi (Matrix)',
    period: '06/2021 – 06/2022',
    color: '#7c3aed',
    bullets: [
      'Part of a development team building user environment systems',
      'Development with Angular 11 and .NET Core',
      'Backend development using C# and Web API',
      'Implementation based on design specifications (Zeplin)',
      'Integration with WCF services and REST APIs',
      'Development with HTML5, JavaScript, CSS3',
      'Responsive UI development and accessibility compliance',
      'Agile development process',
    ],
    tags: ['Angular 11', 'C#', '.NET Core', 'WCF', 'REST API', 'JavaScript'],
  },
  {
    title: 'Full Stack Developer',
    company: 'New Automation Company',
    period: '2016 – 2020',
    color: '#3b82f6',
    bullets: [
      'Developed administrative system for municipal legal systems',
      'Backend development with Node.js (Express) and ASP.NET MVC',
      'Frontend development using AngularJS and Angular (8 & 10)',
      'State management implementation with NgRx',
      'Integration with OracleDB databases',
      'Development of REST and SOAP services',
      'Maintenance and version control with TFS',
      'Developed CityBiz portal (citybiz.co.il)',
      'Built a digital financial approvals system using Angular and SCSS',
    ],
    tags: ['AngularJS', 'Angular', 'Node.js', 'ASP.NET', 'NgRx', 'OracleDB', 'TFS'],
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const job = jobs[activeJob];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        {/* Timeline tabs */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '40px', overflowX: 'auto' }}>
          {jobs.map((j, i) => (
            <button key={i} onClick={() => setActiveJob(i)} style={{
              flex: 1, minWidth: '200px',
              padding: '18px 20px', background: 'none',
              border: 'none', borderBottom: `2px solid ${activeJob === i ? j.color : 'rgba(255,255,255,0.08)'}`,
              color: activeJob === i ? j.color : '#94a3b8',
              cursor: 'pointer', textAlign: 'left',
              fontFamily: "'Rajdhani', sans-serif", fontSize: '0.95rem', fontWeight: 600,
              transition: 'all 0.3s',
              letterSpacing: '0.5px',
            }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', marginBottom: '4px', opacity: 0.7 }}>{j.period}</div>
              {j.title}
              <div style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.7, marginTop: '2px' }}>{j.company}</div>
            </button>
          ))}
        </div>

        {/* Job detail card */}
        <div key={activeJob} style={{
          background: 'rgba(10,22,40,0.7)',
          border: `1px solid ${job.color}30`,
          padding: '40px',
          position: 'relative',
          animation: 'fadeInUp 0.4s ease',
          boxShadow: `0 0 30px ${job.color}10`,
        }}>
          {/* Corner accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '50px', height: '2px', background: job.color,
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '2px', height: '50px', background: job.color,
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.2rem', color: job.color, marginBottom: '6px' }}>
                {job.title}
              </h3>
              <p style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 600 }}>{job.company}</p>
            </div>
            <span style={{
              padding: '6px 14px',
              border: `1px solid ${job.color}50`,
              color: job.color,
              fontFamily: "'Share Tech Mono', monospace", fontSize: '0.75rem',
              background: `${job.color}08`,
              whiteSpace: 'nowrap',
            }}>{job.period}</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {job.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', color: '#94a3b8', fontSize: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: job.color, flexShrink: 0, marginTop: '4px' }}>▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {job.tags.map(t => (
              <span key={t} style={{
                padding: '4px 12px', fontSize: '0.8rem', letterSpacing: '1px',
                border: `1px solid ${job.color}40`,
                color: job.color, background: `${job.color}08`,
                fontFamily: "'Share Tech Mono', monospace",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div:nth-child(2) { flex-direction: column; }
          #experience .container > div:nth-child(3) { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
