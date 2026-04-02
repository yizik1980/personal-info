import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

type FontSize = 'normal' | 'large' | 'xlarge';

const FONT_SIZES: Record<FontSize, string> = {
  normal: '18px',
  large: '21px',
  xlarge: '24px',
};

const FONT_LABELS: Record<FontSize, string> = {
  normal: 'A',
  large: 'A+',
  xlarge: 'A++',
};

const labels = {
  en: {
    ariaOpen: 'Open accessibility menu',
    ariaDialog: 'Accessibility menu',
    title: 'Accessibility',
    contrast: 'High Contrast',
    on: 'ON',
    off: 'OFF',
    fontSize: 'Font Size',
    reset: 'Reset All',
    ariaFont: (l: string) => `Font size: ${l}. Click to change`,
    ariaReset: 'Reset accessibility settings',
  },
  he: {
    ariaOpen: 'פתח תפריט נגישות',
    ariaDialog: 'תפריט נגישות',
    title: 'נגישות',
    contrast: 'ניגודיות גבוהה',
    on: 'פעיל',
    off: 'כבוי',
    fontSize: 'גודל גופן',
    reset: 'אפס הכל',
    ariaFont: (l: string) => `גודל גופן: ${l}. לחץ לשינוי`,
    ariaReset: 'אפס הגדרות נגישות',
  },
};

export default function AccessibilityWidget() {
  const { lang } = useLanguage();
  const lbl = labels[lang];
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('normal');

  /* Apply font size to <html> so rem units cascade everywhere */
  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZES[fontSize];
  }, [fontSize]);

  /* High-contrast mode: swap CSS variables on :root */
  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#000000');
      root.style.setProperty('--bg-card', 'rgba(0,0,0,0.95)');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#ffff00');
      root.style.setProperty('--cyan', '#ffff00');
      root.style.setProperty('--cyan-dim', 'rgba(255,255,0,0.15)');
      root.style.setProperty('--cyan-glow', '0 0 20px rgba(255,255,0,0.6)');
      root.style.setProperty('--purple', '#00ff00');
      root.style.setProperty('--border', 'rgba(255,255,0,0.5)');
      root.classList.add('high-contrast');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--bg-card');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--cyan');
      root.style.removeProperty('--cyan-dim');
      root.style.removeProperty('--cyan-glow');
      root.style.removeProperty('--purple');
      root.style.removeProperty('--border');
      root.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const cycleFont = () => {
    setFontSize(prev => prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'normal');
  };

  const resetAll = () => {
    setHighContrast(false);
    setFontSize('normal');
  };

  const btnBase: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '10px',
    width: '100%', padding: '10px 14px',
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#e2e8f0', fontFamily: "'Rajdhani', sans-serif",
    fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px',
    borderRadius: '4px', transition: 'background 0.2s',
    textAlign: 'left',
  };

  const activeStyle: React.CSSProperties = {
    background: 'rgba(0,245,255,0.12)',
    color: '#00f5ff',
  };

  return (
    <>
      {/* High-contrast global overrides */}
      <style>{`
        .high-contrast body::before { opacity: 0.05; }
        .high-contrast section { border-bottom: 1px solid #ffff00 !important; }
        .high-contrast a, .high-contrast button { outline: 2px solid transparent; }
        .high-contrast a:focus, .high-contrast button:focus { outline: 3px solid #ffff00 !important; }
        .high-contrast img { filter: contrast(1.2) brightness(1.1); }
      `}</style>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={lbl.ariaOpen}
        aria-expanded={open}
        title={lbl.title}
        style={{
          position: 'fixed', bottom: '24px', left: '24px', zIndex: 10000,
          width: '52px', height: '52px', borderRadius: '50%',
          background: highContrast ? '#ffff00' : 'rgba(0,245,255,0.15)',
          border: `2px solid ${highContrast ? '#ffff00' : '#00f5ff'}`,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
          boxShadow: highContrast ? '0 0 20px #ffff0080' : '0 0 20px rgba(0,245,255,0.4)',
          transition: 'all 0.3s',
        }}
      >
        ♿
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label={lbl.ariaDialog}
          style={{
            position: 'fixed', bottom: '84px', left: '24px', zIndex: 10000,
            width: '240px',
            background: '#0a1628',
            border: '1px solid rgba(0,245,255,0.25)',
            borderRadius: '8px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.25s ease',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '12px 14px',
            background: 'rgba(0,245,255,0.07)',
            borderBottom: '1px solid rgba(0,245,255,0.15)',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.7rem', letterSpacing: '2px',
            color: '#00f5ff', textTransform: 'uppercase',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>{lbl.title}</span>
            <span style={{ fontSize: '0.6rem', color: '#475569', letterSpacing: '1px' }}>WCAG AAA</span>
          </div>

          {/* Controls */}
          <div style={{ padding: '8px' }}>

            {/* Contrast toggle */}
            <button
              onClick={() => setHighContrast(h => !h)}
              aria-pressed={highContrast}
              style={{ ...btnBase, ...(highContrast ? activeStyle : {}) }}
              onMouseEnter={e => { if (!highContrast) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { if (!highContrast) (e.currentTarget as HTMLElement).style.background = 'none'; }}
            >
              <span style={{ fontSize: '1.1rem' }}>◐</span>
              <span>{lbl.contrast}</span>
              <span style={{
                marginLeft: 'auto', fontSize: '0.7rem', padding: '2px 7px',
                border: `1px solid ${highContrast ? '#00f5ff' : '#334155'}`,
                borderRadius: '20px', color: highContrast ? '#00f5ff' : '#475569',
              }}>{highContrast ? lbl.on : lbl.off}</span>
            </button>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />

            {/* Font size cycle */}
            <button
              onClick={cycleFont}
              aria-label={lbl.ariaFont(FONT_LABELS[fontSize])}
              style={{ ...btnBase, ...(fontSize !== 'normal' ? activeStyle : {}) }}
              onMouseEnter={e => { if (fontSize === 'normal') (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { if (fontSize === 'normal') (e.currentTarget as HTMLElement).style.background = 'none'; }}
            >
              <span style={{ fontSize: '1.1rem' }}>𝐓</span>
              <span>{lbl.fontSize}</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                {(['normal', 'large', 'xlarge'] as FontSize[]).map(s => (
                  <span key={s} style={{
                    width: '22px', height: '22px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    borderRadius: '3px', fontSize: '0.65rem', fontWeight: 700,
                    background: fontSize === s ? '#00f5ff' : 'rgba(255,255,255,0.07)',
                    color: fontSize === s ? '#000' : '#64748b',
                    transition: 'all 0.2s',
                  }}>{FONT_LABELS[s]}</span>
                ))}
              </div>
            </button>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />

            {/* Reset */}
            <button
              onClick={resetAll}
              aria-label={lbl.ariaReset}
              style={{ ...btnBase, color: '#64748b', fontSize: '0.85rem' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.color = '#e2e8f0';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'none';
                (e.currentTarget as HTMLElement).style.color = '#64748b';
              }}
            >
              <span style={{ fontSize: '1rem' }}>↺</span>
              <span>{lbl.reset}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
