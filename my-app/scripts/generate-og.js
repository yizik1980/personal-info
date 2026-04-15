const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- Grid pattern -->
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,245,255,0.05)" stroke-width="1"/>
    </pattern>
    <!-- Cyan radial glow center -->
    <radialGradient id="glowC" cx="42%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#050a14" stop-opacity="0"/>
    </radialGradient>
    <!-- Purple radial glow top-right -->
    <radialGradient id="glowP" cx="85%" cy="15%" r="40%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#050a14" stop-opacity="0"/>
    </radialGradient>
    <!-- Top line gradient -->
    <linearGradient id="topLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#050a14"/>
      <stop offset="40%" stop-color="#00f5ff"/>
      <stop offset="70%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#050a14"/>
    </linearGradient>
    <!-- Name glow filter -->
    <filter id="nameGlow" x="-10%" y="-40%" width="120%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Badge background -->
    <linearGradient id="badgeBg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#00f5ff" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Base background -->
  <rect width="${W}" height="${H}" fill="#050a14"/>
  <!-- Grid overlay -->
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <!-- Glow overlays -->
  <rect width="${W}" height="${H}" fill="url(#glowC)"/>
  <rect width="${W}" height="${H}" fill="url(#glowP)"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="${W}" height="3" fill="url(#topLine)"/>
  <!-- Bottom accent line -->
  <rect x="0" y="${H - 3}" width="${W}" height="3" fill="url(#topLine)"/>

  <!-- Left vertical accent -->
  <rect x="60" y="0" width="1" height="${H}" fill="#00f5ff" opacity="0.08"/>
  <!-- Right vertical accent -->
  <rect x="${W - 60}" y="0" width="1" height="${H}" fill="#7c3aed" opacity="0.08"/>

  <!-- Corner brackets – top left -->
  <path d="M 60 40 L 60 60 L 80 60" fill="none" stroke="#00f5ff" stroke-width="2" opacity="0.6"/>
  <!-- Corner brackets – top right -->
  <path d="M ${W - 60} 40 L ${W - 60} 60 L ${W - 80} 60" fill="none" stroke="#7c3aed" stroke-width="2" opacity="0.6"/>
  <!-- Corner brackets – bottom left -->
  <path d="M 60 ${H - 40} L 60 ${H - 60} L 80 ${H - 60}" fill="none" stroke="#00f5ff" stroke-width="2" opacity="0.6"/>
  <!-- Corner brackets – bottom right -->
  <path d="M ${W - 60} ${H - 40} L ${W - 60} ${H - 60} L ${W - 80} ${H - 60}" fill="none" stroke="#7c3aed" stroke-width="2" opacity="0.6"/>

  <!-- Logo top-left -->
  <text x="96" y="116" font-family="'Courier New', Courier, monospace" font-size="36" font-weight="900"
    fill="#00f5ff" letter-spacing="6" opacity="0.9">IM</text>
  <text x="167" y="116" font-family="'Courier New', Courier, monospace" font-size="36" font-weight="900"
    fill="#7c3aed">_</text>

  <!-- Available badge -->
  <rect x="96" y="138" width="220" height="26" rx="2" fill="url(#badgeBg)" stroke="#00f5ff" stroke-width="1" stroke-opacity="0.4"/>
  <circle cx="112" cy="151" r="4" fill="#00f5ff"/>
  <text x="124" y="156" font-family="'Courier New', Courier, monospace" font-size="11"
    fill="#00f5ff" letter-spacing="2">OPEN TO OPPORTUNITIES</text>

  <!-- Main name -->
  <text x="96" y="290"
    font-family="'Arial Black', 'Arial Bold', Gadget, sans-serif"
    font-size="82" font-weight="900" fill="#e2e8f0"
    filter="url(#nameGlow)"
    letter-spacing="-1">Itzik Malka</text>

  <!-- Cyan underline below name -->
  <rect x="96" y="305" width="560" height="3" fill="url(#topLine)" opacity="0.7"/>

  <!-- Title -->
  <text x="98" y="358"
    font-family="'Courier New', Courier, monospace"
    font-size="26" fill="#00f5ff" letter-spacing="3" opacity="0.9">Senior Full Stack Developer</text>

  <!-- Location -->
  <text x="100" y="400"
    font-family="'Courier New', Courier, monospace"
    font-size="16" fill="#94a3b8" letter-spacing="1">&#x1F4CD; Haifa, Israel</text>

  <!-- Divider -->
  <rect x="96" y="430" width="900" height="1" fill="#1e293b"/>

  <!-- Tech stack badges -->
  ${[
    { label: 'React',       x: 96,  color: '#61dafb' },
    { label: 'Angular',     x: 210, color: '#dd1b16' },
    { label: 'Node.js',     x: 333, color: '#68a063' },
    { label: 'NestJS',      x: 450, color: '#ea2845' },
    { label: 'TypeScript',  x: 554, color: '#3178c6' },
    { label: 'MongoDB',     x: 688, color: '#4db33d' },
    { label: 'C# / .NET',   x: 795, color: '#9b4993' },
  ].map(({ label, x, color }) => `
    <rect x="${x}" y="452" width="${label.length * 10 + 24}" height="30" rx="4"
      fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="1" stroke-opacity="0.5"/>
    <text x="${x + 12}" y="472"
      font-family="'Courier New', Courier, monospace"
      font-size="13" fill="${color}" letter-spacing="0.5">${label}</text>
  `).join('')}

  <!-- Bottom: years + company -->
  <text x="96" y="560"
    font-family="'Courier New', Courier, monospace"
    font-size="14" fill="#475569" letter-spacing="2">10+ YRS EXPERIENCE  ·  THE PHOENIX  ·  BANK MIZRAHI  ·  NEW AUTOMATION</text>

  <!-- URL bottom right -->
  <text x="${W - 96}" y="560"
    font-family="'Courier New', Courier, monospace"
    font-size="14" fill="#334155" letter-spacing="1"
    text-anchor="end">ym.onrender.com</text>
</svg>
`;

const outPath = path.join(__dirname, '../public/og-image.png');
fs.mkdirSync(path.dirname(outPath), { recursive: true });

sharp(Buffer.from(svg))
  .resize(W, H)
  .png({ quality: 95 })
  .toFile(outPath)
  .then(() => console.log(`✓ og-image.png created at ${outPath}`))
  .catch(err => { console.error('Error:', err.message); process.exit(1); });
