export const profile = {
  firstName: 'Ram',
  lastName: 'Kashyap',
  initials: 'RK',
  title: 'Front End Developer | HTML5, CSS3, Bootstrap, JavaScript, React',
  status: 'Available for work',
  location: 'New Delhi',
  phone: '+91 8802638142',
  phoneHref: 'tel:+918802638142',
  email: 'ramkashyap2@gmail.com',
  cv: '/CV/CV.pdf',
  // Rotates in the hero subheading.
  roles: ['SOFTWARE ENGINEER | Front End Developer'],
  // Add your profile URLs here — icons only appear for links that are filled in.
  socials: {
    linkedin: 'linkedin',
    github: 'github',
  },
  summary:
    "I'm a passionate front end developer based in Delhi, India, with over 5 years of experience crafting digital products that make a difference. I specialize in HTML5, CSS3, Bootstrap, JavaScript and React, and build responsive, SEO-friendly, high-performance websites and web applications that users love — products that are a delight to use and easy for developers to maintain.",
};

export const stats = [
  { value: 5, suffix: '+', label: 'Years Exp' },
  { value: 3, suffix: '', label: 'Live Websites' },
  { value: 3, suffix: '', label: 'Companies' },
  { value: 8, suffix: '+', label: 'Technologies' },
];

export const highlights = [
  {
    icon: '<>',
    title: 'Clean Code',
    description:
      'Writing maintainable, scalable code and reusable components that stand the test of time.',
  },
  {
    icon: '◎',
    title: 'Performance',
    description:
      'Optimizing code, images and assets to deliver lightning-fast user experiences.',
  },
  {
    icon: '📱',
    title: 'Responsive by Default',
    description:
      'Pixel-perfect layouts that work across every browser, screen size and device.',
  },
  {
    icon: '🫂',
    title: 'Collaboration',
    description:
      'Working closely with designers and developers, using Git, to bring ideas to life.',
  },
];

export const experiences = [
  {
    id: 'sandstrom',
    icon: '💻',
    period: '2020 – Present',
    role: 'Front End Developer',
    company: 'SandStrom Infotech Pvt. Ltd.',
    summary:
      'Building reusable front-end components with HTML, CSS, JavaScript and React, and optimizing sites for faster load times.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Git'],
    ai: {
      intro: 'Analyzing Front End Developer role at SandStrom Infotech...',
      sections: [
        {
          label: 'Role Overview',
          text: 'Front End Developer at SandStrom Infotech Pvt. Ltd. since 2020 — building and maintaining the user-facing side of client websites and web applications with modern front-end technologies.',
        },
        {
          label: 'Key Responsibilities',
          features: [
            'Build reusable, maintainable front-end components',
            'Develop UIs with HTML, CSS, JavaScript and React',
            'Optimize code, images and assets for faster loading',
            'Improve overall website performance',
            'Manage source code with Git',
            'Collaborate closely with development teams',
          ],
        },
        {
          label: 'Tech Stack',
          techs: [
            { n: 'React', h: 1 },
            { n: 'JavaScript', h: 1 },
            { n: 'HTML5', h: 0 },
            { n: 'CSS3', h: 0 },
            { n: 'PHP', h: 0 },
            { n: 'Git', h: 0 },
          ],
        },
      ],
    },
  },
  {
    id: 'celticlab',
    icon: '🧩',
    period: '2018 – 2020',
    role: 'HTML Developer',
    company: 'CelticLab Pvt. Ltd.',
    summary:
      'Developed responsive, cross-browser web pages with HTML5, CSS3 and JavaScript, and fixed front-end bugs and compatibility issues.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    ai: {
      intro: 'Analyzing HTML Developer role at CelticLab...',
      sections: [
        {
          label: 'Role Overview',
          text: 'HTML Developer at CelticLab Pvt. Ltd. from 2018 to 2020 — developing and maintaining responsive, user-friendly web pages.',
        },
        {
          label: 'Key Responsibilities',
          features: [
            'Develop responsive web pages with HTML5 & CSS3',
            'Add interactivity with JavaScript',
            'Ensure cross-browser compatibility',
            'Make layouts work across all devices',
            'Troubleshoot and resolve front-end bugs',
            'Fix compatibility problems',
          ],
        },
        {
          label: 'Tech Stack',
          techs: [
            { n: 'HTML5', h: 1 },
            { n: 'CSS3', h: 1 },
            { n: 'JavaScript', h: 0 },
            { n: 'Responsive Design', h: 0 },
          ],
        },
      ],
    },
  },
  {
    id: 'gms',
    icon: '📊',
    period: '2013 – 2017',
    role: 'Admin Executive',
    company: 'GMS Consultant Pvt. Ltd.',
    summary:
      'Generated customized reports in Salesforce, handled data processing, and maintained petty cash and expense reports.',
    tech: ['Salesforce', 'Reporting', 'Data Processing'],
    ai: {
      intro: 'Analyzing Admin Executive role at GMS Consultant...',
      sections: [
        {
          label: 'Role Overview',
          text: 'Admin Executive at GMS Consultant Pvt. Ltd. from 2013 to 2017 — handling reporting, data processing and office finance.',
        },
        {
          label: 'Key Responsibilities',
          features: [
            'Customized report generation in Salesforce',
            'Data processing',
            'Managed monthly petty cash',
            'Maintained weekly and monthly expense reports',
          ],
        },
        {
          label: 'Tools',
          techs: [
            { n: 'Salesforce', h: 1 },
            { n: 'Reporting', h: 0 },
            { n: 'Data Processing', h: 0 },
          ],
        },
      ],
    },
  },
];

export const projects = [
  {
    id: 'egurukul',
    icon: '🎓',
    title: 'E-Gurukul',
    tagline: 'Online Education & Learning Platform',
    summary:
      'Educational website offering online courses, digital learning and skill development.',
    image: 'public/projects/project1.png',
    link: 'https://www.e-gurukul.org/',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
    ai: {
      intro: 'Loading E-Gurukul analysis...',
      sections: [
        {
          label: 'Project Overview',
          text: 'E-Gurukul is an online education and learning platform. It presents itself as an educational website offering online courses, digital learning, and skill development.',
        },
        {
          label: 'Tech Stack',
          techs: [
            { n: 'HTML', h: 1 },
            { n: 'CSS', h: 1 },
            { n: 'Bootstrap', h: 0 },
            { n: 'JavaScript', h: 0 },
            { n: 'PHP', h: 0 },
          ],
        },
      ],
    },
  },
  {
    id: 'astro',
    icon: '🔮',
    title: 'Astro Spiritual Solutions',
    tagline: 'Astrology & Spiritual Guidance',
    summary:
      'Astrology and spiritual guidance platform offering consultations and remedies for different aspects of life.',
    image: 'public/projects/project2.png',
    link: 'https://astrospiritualsolutions.com/',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    ai: {
      intro: 'Loading Astro Spiritual Solutions analysis...',
      sections: [
        {
          label: 'Project Overview',
          text: 'Astro Spiritual Solutions is an astrology and spiritual guidance platform that offers consultations and remedies aimed at helping people with different aspects of life.',
        },
        {
          label: 'Tech Stack',
          techs: [
            { n: 'HTML', h: 1 },
            { n: 'CSS', h: 1 },
            { n: 'Bootstrap', h: 0 },
            { n: 'JavaScript', h: 0 },
          ],
        },
      ],
    },
  },
  {
    id: 'legal',
    icon: '⚖️',
    title: 'Legal Consultus',
    tagline: 'Legal Consultancy Firm',
    summary:
      'Legal consultancy website for corporate and individual clients, both domestic and overseas.',
    image: 'public/projects/project3.png',
    link: 'https://legalconsultus.com/',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
    ai: {
      intro: 'Loading Legal Consultus analysis...',
      sections: [
        {
          label: 'Project Overview',
          text: 'Positioned as a legal consultancy firm, it provides innovative legal solutions to its clients both domestic and overseas, which includes corporate entities and individual clients.',
        },
        {
          label: 'Tech Stack',
          techs: [
            { n: 'HTML', h: 1 },
            { n: 'CSS', h: 1 },
            { n: 'Bootstrap', h: 0 },
            { n: 'JavaScript', h: 0 },
            { n: 'PHP', h: 0 },
          ],
        },
      ],
    },
  },
];

export const skillGroups = [
  {
    label: 'Markup & Styling',
    items: [
      ['HTML5', 1],
      ['CSS3', 1],
      ['Bootstrap 5', 1],
      ['Tailwind CSS', 0],
      ['Responsive Design', 0],
    ],
  },
  {
    label: 'JavaScript',
    items: [
      ['JavaScript', 1],
      ['React', 1],
      ['jQuery', 0],
    ],
  },
  { label: 'Backend', items: [['PHP', 0]] },
  {
    label: 'Performance',
    items: [
      ['Code Optimization', 0],
      ['Image & Asset Optimization', 0],
      ['Cross-Browser Compatibility', 0],
    ],
  },
  {
    label: 'Tools',
    items: [
      ['Git', 1],
      ['GitHub', 0],
      ['Salesforce', 0],
    ],
  },
];

export const education = [
  { label: '', items: [['June 2016', 'June 2020']] },
  {
    title: 'Punjab Technical University, Jalandhar',
    subtitle: 'Bachelor of Computer Applications',
  },
];
