// Build-time SEO for the single-page portfolio.
// - Injects JSON-LD structured data (Person, WebSite, ProfilePage, projects) built from src/data/portfolio.js
// - Injects a <noscript> text version of the page for crawlers that don't run JavaScript
// - When VITE_SITE_URL is set: adds canonical / og:url / absolute share-image URLs,
//   and emits sitemap.xml; robots.txt is always emitted.
import {
  experiences,
  profile,
  projects,
  skillGroups,
} from '../src/data/portfolio.js';

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );

const fullName = `${profile.firstName} ${profile.lastName}`;
const allSkills = skillGroups.flatMap((g) => g.items.map(([name]) => name));
const sameAs = Object.values(profile.socials).filter(Boolean);

const buildJsonLd = (siteUrl) => {
  const id = (frag) => (siteUrl ? `${siteUrl}/#${frag}` : `#${frag}`);
  const person = {
    '@type': 'Person',
    '@id': id('person'),
    name: fullName,
    jobTitle: 'Front End Developer',
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
      addressCountry: 'IN',
    },
    worksFor: { '@type': 'Organization', name: experiences[0].company },
    knowsAbout: allSkills,
    ...(siteUrl && { url: `${siteUrl}/`, image: `${siteUrl}/og-image.jpg` }),
    ...(sameAs.length && { sameAs }),
  };
  const graph = [
    person,
    {
      '@type': 'ProfilePage',
      '@id': id('webpage'),
      name: `${fullName} — Front End Developer Portfolio`,
      mainEntity: { '@id': id('person') },
      ...(siteUrl && { url: `${siteUrl}/` }),
    },
    {
      '@type': 'ItemList',
      name: `Websites built by ${fullName}`,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'WebSite',
          name: p.title,
          description: p.summary,
          url: p.link,
          creator: { '@id': id('person') },
          keywords: p.tech.join(', '),
        },
      })),
    },
  ];
  if (siteUrl) {
    graph.push({
      '@type': 'WebSite',
      '@id': id('website'),
      url: `${siteUrl}/`,
      name: fullName,
      inLanguage: 'en-IN',
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
};

const buildNoscript = () => `
  <noscript>
    <main style="max-width:760px;margin:2rem auto;padding:0 1rem;font-family:sans-serif;line-height:1.6">
      <h1>${esc(fullName)} — Front End Developer in ${esc(profile.location)}</h1>
      <p>${esc(profile.summary)}</p>
      <h2>Experience</h2>
      <ul>${experiences
        .map(
          (e) =>
            `<li><strong>${esc(e.role)}</strong>, ${esc(e.company)} (${esc(e.period)}) — ${esc(e.summary)}</li>`,
        )
        .join('')}</ul>
      <h2>Projects</h2>
      <ul>${projects
        .map(
          (p) =>
            `<li><a href="${esc(p.link)}">${esc(p.title)}</a> — ${esc(p.summary)} (${esc(p.tech.join(', '))})</li>`,
        )
        .join('')}</ul>
      <h2>Skills</h2>
      <p>${esc(allSkills.join(', '))}</p>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a> · Phone: ${esc(profile.phone)} · <a href="${esc(profile.cv)}">Download CV</a></p>
    </main>
  </noscript>`;

export const seoPlugin = () => {
  let siteUrl = '';

  return {
    name: 'portfolio-seo',
    configResolved(config) {
      siteUrl = (config.env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');
    },
    transformIndexHtml(html) {
      const head = [
        `<script type="application/ld+json">${JSON.stringify(buildJsonLd(siteUrl))}</script>`,
      ];
      if (siteUrl) {
        head.push(
          `<link rel="canonical" href="${siteUrl}/">`,
          `<meta property="og:url" content="${siteUrl}/">`,
        );
        html = html.replaceAll(
          'content="/og-image.jpg"',
          `content="${siteUrl}/og-image.jpg"`,
        );
      }
      return html
        .replace('</head>', `  ${head.join('\n  ')}\n</head>`)
        .replace(
          '<div id="root"></div>',
          `<div id="root"></div>${buildNoscript()}`,
        );
    },
    generateBundle() {
      const robots = [
        'User-agent: *',
        'Allow: /',
        ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : []),
      ];
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robots.join('\n') + '\n',
      });
      if (siteUrl) {
        const today = new Date().toISOString().slice(0, 10);
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>
`,
        });
      } else {
        this.warn(
          'VITE_SITE_URL is not set — skipping canonical URL and sitemap.xml. Add it to .env once deployed.',
        );
      }
    },
  };
};
