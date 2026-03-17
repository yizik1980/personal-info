import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'he';

export const translations = {
  en: {
    dir: 'ltr' as const,
    nav: {
      links: ['About', 'Experience', 'Skills', 'Education', 'Contact'],
      anchors: ['about', 'experience', 'skills', 'education', 'contact'],
    },
    hero: {
      available: 'AVAILABLE FOR OPPORTUNITIES',
      titles: [
        'Senior Full Stack Developer',
        'React & Angular Expert',
        'Node.js / NestJS Engineer',
        'TypeScript Specialist',
        'asp.net mvc developer',
      ],
      location: '📍 Haifa, Israel',
      cta1: 'Contact Me',
      cta2: 'View Work',
      downloadCv: 'Download CV',
      scroll: 'SCROLL',
    },
    about: {
      title: 'About Me',
      p1: 'Full Stack Developer with <cyan>10+ years</cyan> of experience building scalable web applications and enterprise systems.',
      p2: 'Specialized in <purple>Angular</purple>, <purple>React</purple>, <purple>Node.js / NestJS</purple>, and <purple>TypeScript</purple>. Experienced in designing RESTful services, integrating complex backend systems, and delivering production-grade applications in Agile environments.',
      p3: 'Currently at <cyan>The Phoenix</cyan>, developing personal information systems, scalable APIs, and CI/CD pipelines using Jenkins and Argo.',
      stats: ['Years Experience', 'Companies', 'Tech Stacks', 'Lines of Code'],
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'The Phoenix',
          period: '06/2022 – Present',
          bullets: [
            'Backend development using Node.js with NestJS and TypeScript',
            'Development of scalable REST APIs and server-side business logic',
            'Frontend development with Angular 14/15/17/18 and React.js',
            'Implementation of new features in personal information systems',
            'Integration with MongoDB and SQL Server databases',
            'Designing modular and maintainable backend architecture',
            'CI/CD pipelines using Jenkins, Argo, and Git',
            'Working in Agile methodology (Scrum)',
            'Collaboration with product managers, QA, and DevOps teams',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'Bank Mizrahi (Matrix)',
          period: '06/2021 – 06/2022',
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
        },
        {
          title: 'Full Stack Developer',
          company: 'New Automation Company',
          period: '2016 – 2020',
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
        },
      ],
    },
    skills: {
      title: 'Skills',
      groups: ['Frontend', 'Backend', 'Databases', 'DevOps & Tools'],
      alsoFamiliar: 'ALSO FAMILIAR WITH',
    },
    education: {
      title: 'Education',
      items: [
        { degree: "Bachelor's Degree", field: 'Computer Science Education', institution: 'Technion – Haifa' },
        { degree: 'Professional Course', field: '.NET Development', institution: 'Technion Continuing Studies' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Open to new opportunities and collaborations.',
      cta: "Let's build something great together.",
      send: 'Send Message',
      copy: 'COPY',
      copied: '✓',
      footer: 'SENIOR FULL STACK DEVELOPER',
    },
  },

  he: {
    dir: 'rtl' as const,
    nav: {
      links: ['אודות', 'ניסיון', 'כישורים', 'השכלה', 'צור קשר'],
      anchors: ['about', 'experience', 'skills', 'education', 'contact'],
    },
    hero: {
      available: 'פתוח להזדמנויות חדשות',
      titles: [
        'מפתח Full Stack בכיר',
        'מומחה React ו-Angular',
        'מהנדס Node.js / NestJS',
        'מומחה TypeScript',
        'מפתח asp.net mvc',
      ],
      location: '📍 חיפה, ישראל',
      cta1: 'צור קשר',
      cta2: 'ראה עבודות',
      downloadCv: 'הורד קורות חיים',
      scroll: 'גלול',
    },
    about: {
      title: 'אודותי',
      p1: 'מפתח Full Stack עם <cyan>10+ שנות</cyan> ניסיון בבניית אפליקציות ווב סקיילביליות ומערכות ארגוניות.',
      p2: 'מתמחה ב-<purple>Angular</purple>, <purple>React</purple>, <purple>Node.js / NestJS</purple> ו-<purple>TypeScript</purple>. ניסיון בתכנון שירותי RESTful, אינטגרציה עם מערכות backend מורכבות ומסירת יישומים ברמת פרודקשן בסביבות Agile.',
      p3: 'כיום ב-<cyan>הפניקס</cyan>, מפתח מערכות מידע אישי, APIs סקיילביליות וצינורות CI/CD עם Jenkins ו-Argo.',
      stats: ['שנות ניסיון', 'חברות', 'סטאקים טכנולוגיים', 'שורות קוד'],
    },
    experience: {
      title: 'ניסיון תעסוקתי',
      present: 'היום',
      jobs: [
        {
          title: 'מפתח Full Stack',
          company: 'הפניקס',
          period: '06/2022 – היום',
          bullets: [
            'פיתוח Backend באמצעות Node.js עם NestJS ו-TypeScript',
            'פיתוח REST APIs סקיילביליים ולוגיקה עסקית בצד השרת',
            'פיתוח Frontend עם Angular 14/15/17/18 ו-React.js',
            'מימוש פיצ\'רים חדשים במערכות מידע אישי',
            'אינטגרציה עם מסדי נתונים MongoDB ו-SQL Server',
            'תכנון ארכיטקטורת Backend מודולרית ובת תחזוקה',
            'צינורות CI/CD עם Jenkins, Argo ו-Git',
            'עבודה במתודולוגיית Agile (Scrum)',
            'שיתוף פעולה עם מנהלי מוצר, QA וצוותי DevOps',
          ],
        },
        {
          title: 'מפתח Full Stack',
          company: 'בנק מזרחי (מטריקס)',
          period: '06/2021 – 06/2022',
          bullets: [
            'חלק מצוות פיתוח שבנה מערכות סביבת משתמש',
            'פיתוח עם Angular 11 ו-.NET Core',
            'פיתוח Backend ב-C# ו-Web API',
            'מימוש על פי מפרטי עיצוב (Zeplin)',
            'אינטגרציה עם שירותי WCF ו-REST APIs',
            'פיתוח ב-HTML5, JavaScript, CSS3',
            'פיתוח UI רספונסיבי ועמידה בדרישות נגישות',
            'תהליך פיתוח Agile',
          ],
        },
        {
          title: 'מפתח Full Stack',
          company: 'ניו אוטומיישן',
          period: '2016 – 2020',
          bullets: [
            'פיתוח מערכת ניהול למערכות משפטיות עירוניות',
            'פיתוח Backend עם Node.js (Express) ו-ASP.NET MVC',
            'פיתוח Frontend עם AngularJS ו-Angular (8 ו-10)',
            'מימוש ניהול מצב עם NgRx',
            'אינטגרציה עם מסד נתונים OracleDB',
            'פיתוח שירותי REST ו-SOAP',
            'תחזוקה וניהול גרסאות עם TFS',
            'פיתוח פורטל CityBiz (citybiz.co.il)',
            'בניית מערכת אישורים פיננסיים דיגיטלית עם Angular ו-SCSS',
          ],
        },
      ],
    },
    skills: {
      title: 'כישורים',
      groups: ['Frontend', 'Backend', 'מסדי נתונים', 'DevOps וכלים'],
      alsoFamiliar: 'מכיר גם',
    },
    education: {
      title: 'השכלה',
      items: [
        { degree: 'תואר ראשון', field: 'הוראת מדעי המחשב', institution: 'טכניון – חיפה' },
        { degree: 'קורס מקצועי', field: 'פיתוח .NET', institution: 'לימודי המשך – טכניון' },
      ],
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'פתוח להזדמנויות ושיתופי פעולה חדשים.',
      cta: 'בואו נבנה משהו נהדר ביחד.',
      send: 'שלח הודעה',
      copy: 'העתק',
      copied: '✓',
      footer: 'מפתח Full Stack בכיר',
    },
  },
};

type Translations = typeof translations.en;

const LanguageContext = createContext<{
  lang: Lang;
  t: Translations;
  toggle: () => void;
}>({
  lang: 'en',
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggle = () => setLang(l => l === 'en' ? 'he' : 'en');
  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      <div dir={translations[lang].dir} style={{ textAlign: translations[lang].dir === 'rtl' ? 'right' : 'left' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
