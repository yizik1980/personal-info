import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const skillData = [
  { color: '#00f5ff', skills: [{ name: 'Angular / AngularJS', level: 95 }, { name: 'React.js', level: 90 }, { name: 'TypeScript', level: 92 }, { name: 'HTML5 / CSS3 / SCSS', level: 90 }] },
  { color: '#7c3aed', skills: [{ name: 'Node.js / NestJS', level: 90 }, { name: 'C# / ASP.NET / .NET Core', level: 80 }, { name: 'REST APIs', level: 95 }, { name: 'SOAP / WCF', level: 70 }] },
  { color: '#3b82f6', skills: [{ name: 'MongoDB', level: 88 }, { name: 'SQL Server / MySQL', level: 85 }, { name: 'OracleDB', level: 72 }] },
  { color: '#22c55e', skills: [{ name: 'Git', level: 92 }, { name: 'Jenkins / Argo CI/CD', level: 80 }, { name: 'JIRA / Scrum', level: 88 }, { name: 'TFS', level: 72 }] },
];

const extraTags = ['jQuery', 'Google APIs', 'PHP', 'NgRx', 'Zeplin', 'Scrum', 'Agile', 'Accessibility', 'SOAP'];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 600 }}>{name}</span>
        <span style={{ color, fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem' }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: visible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
          borderRadius: '2px', boxShadow: `0 0 10px ${color}60`,
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ background: 'rgba(10,22,40,0.4)' }}>
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {skillData.map((group, i) => (
            <div key={i} style={{
              background: 'rgba(10,22,40,0.7)', border: `1px solid ${group.color}25`,
              padding: '32px', position: 'relative', transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${group.color}60`; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${group.color}15`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${group.color}25`; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${group.color}, transparent)` }} />
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', letterSpacing: '3px', color: group.color, marginBottom: '24px', textTransform: 'uppercase' }}>
                {t.skills.groups[i]}
              </h3>
              {group.skills.map(s => <SkillBar key={s.name} {...s} color={group.color} visible={visible} />)}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', letterSpacing: '3px', color: '#475569', marginBottom: '20px' }}>
            {t.skills.alsoFamiliar}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {extraTags.map(tag => (
              <span key={tag} style={{
                padding: '5px 14px', fontSize: '0.8rem',
                border: '1px solid rgba(255,255,255,0.1)', color: '#64748b',
                fontFamily: "'Share Tech Mono', monospace", background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,255,0.3)'; (e.currentTarget as HTMLElement).style.color = '#00f5ff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = '#64748b'; }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #skills .container > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
