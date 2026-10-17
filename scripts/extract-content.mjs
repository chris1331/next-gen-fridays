import fs from 'node:fs';
import path from 'node:path';

const STEPS_DIR = '/Users/chrisl/.gemini/antigravity/brain/4e0fb9ef-cfb5-46d1-a659-811bf1b372f7/.system_generated/steps';
const OUT_DIR = path.resolve('src/content/alumni');
fs.mkdirSync(OUT_DIR, { recursive: true });

function stripHeader(raw) {
  const idx = raw.indexOf('---\n\n');
  return idx !== -1 ? raw.slice(idx + 5) : raw;
}

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)));
}

function stripTags(html) {
  return decodeHtmlEntities(
    html
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

// 1. Parse WP REST API JSON from steps/18/content.md
const rawJsonFile = fs.readFileSync(path.join(STEPS_DIR, '18/content.md'), 'utf8');
const wpAlumni = JSON.parse(stripHeader(rawJsonFile).trim());

// 2. Parse HTML files from steps 30, 55, 56, 75..87
const stepIds = [30, 55, 56, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87];
const htmlBySlug = new Map();

for (const id of stepIds) {
  const fileContent = fs.readFileSync(path.join(STEPS_DIR, `${id}/content.md`), 'utf8');
  const sourceMatch = fileContent.match(/Source:\s*https:\/\/nextgenfridays\.com\/alumni\/([^/\s]+)\//);
  if (sourceMatch) {
    htmlBySlug.set(sourceMatch[1], stripHeader(fileContent));
  }
}

console.log(`Loaded ${wpAlumni.length} WP REST records and ${htmlBySlug.size} HTML pages.`);

const imageManifest = [
  {
    url: 'https://nextgenfridays.com/wp-content/uploads/2021/07/Next-Gen-Fridays-Logo.png',
    dest: 'public/images/Next-Gen-Fridays-Logo.png',
  },
  {
    url: 'https://nextgenfridays.com/wp-content/uploads/2022/12/Chris-HLC-Open-Jacket.-4-cropped-1.webp',
    dest: 'public/images/hero-chris.webp',
  },
  {
    url: 'https://nextgenfridays.com/wp-content/uploads/2021/07/Chris-Latham-www.insunzastudios.com-25.jpg',
    dest: 'public/images/about-chris.jpg',
  },
  {
    url: 'https://nextgenfridays.com/wp-content/uploads/2021/08/Next-Gen-Fridays-Helping-Youth-Win.jpg',
    dest: 'public/images/og-home.jpg',
  },
  {
    url: 'https://nextgenfridays.com/wp-content/uploads/2021/09/About-Next-Gen-Fridays.jpg',
    dest: 'public/images/og-about.jpg',
  },
];

const summary = [];

for (const item of wpAlumni) {
  const slug = item.slug;
  const name = decodeHtmlEntities(item.title.rendered);
  const pubDate = item.date.slice(0, 10);
  const contentHtml = item.content.rendered || '';
  const pageHtml = htmlBySlug.get(slug) || '';

  // Extract Spotify Embeds from content.rendered or pageHtml
  const iframeRegex = /(?:src|data-wpc-src)=["'](https:\/\/open\.spotify\.com\/embed(?:-podcast)?\/episode\/[^"'?]+)(?:\?[^"']*)?["']/gi;
  const embedsSet = new Set();
  for (const match of contentHtml.matchAll(iframeRegex)) {
    const normalized = match[1].replace('/embed-podcast/episode/', '/embed/episode/') + '?utm_source=generator&theme=0';
    embedsSet.add(normalized);
  }
  if (embedsSet.size === 0 && pageHtml) {
    for (const match of pageHtml.matchAll(iframeRegex)) {
      const normalized = match[1].replace('/embed-podcast/episode/', '/embed/episode/') + '?utm_source=generator&theme=0';
      embedsSet.add(normalized);
    }
  }
  const spotifyEmbeds = [...embedsSet];

  // Extract cover image from featured image widget or preload or og:image
  let remoteCoverUrl = '';
  const featMatch = pageHtml.match(/elementor-widget-theme-post-featured-image[\s\S]*?<img[^>]+src="([^"]+)"/i);
  if (featMatch && !featMatch[1].startsWith('data:')) {
    remoteCoverUrl = featMatch[1];
  } else {
    const ogImgMatch = pageHtml.match(/"contentUrl":"(https:\/\/nextgenfridays\.com\/wp-content\/uploads\/[^"]+)"/i);
    if (ogImgMatch) {
      remoteCoverUrl = ogImgMatch[1];
    }
  }
  const ext = remoteCoverUrl ? path.extname(new URL(remoteCoverUrl).pathname) || '.jpg' : '.jpg';
  const localCoverPath = `/images/alumni/${slug}${ext}`;
  if (remoteCoverUrl) {
    imageManifest.push({
      url: remoteCoverUrl,
      dest: `public${localCoverPath}`,
    });
  }

  // Extract Bio from JetEngine dynamic field (.elementor-element-a4faace .jet-listing-dynamic-field__content)
  let bio = '';
  let bioHtml = '';
  const bioMatch = pageHtml.match(/<div class="jet-listing-dynamic-field__content"\s*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i);
  if (bioMatch) {
    bioHtml = bioMatch[1].trim();
    bio = stripTags(bioHtml);
  }

  // Extract Social Links from .jet-listing-dynamic-link__link
  const socials = [];
  const socialRegex = /<a[^>]+href="([^"]+)"[^>]+class="jet-listing-dynamic-link__link"[^>]*>[\s\S]*?<span class="jet-listing-dynamic-link__label">([\s\S]*?)<\/span><\/a>/gi;
  for (const match of pageHtml.matchAll(socialRegex)) {
    const url = decodeHtmlEntities(match[1].trim());
    let label = stripTags(match[2]);
    if (label === 'LinkeIn') label = 'LinkedIn';
    if (url && label) {
      socials.push({ label, url });
    }
  }

  // Extract the 4 Q&A fields from contentHtml paragraphs
  let missionStatement = '';
  let favoriteQuote = '';
  let weirdFact = '';
  let lifeMovieTitle = '';

  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  for (const match of contentHtml.matchAll(pRegex)) {
    const pInner = match[1];
    const plain = stripTags(pInner);
    if (!plain) continue;
    if (/Your Mission Statement\s*:/i.test(plain)) {
      missionStatement = plain.replace(/^.*?Your Mission Statement\s*:\s*/i, '').trim();
    } else if (/Your favou?rite quote\s*:/i.test(plain)) {
      favoriteQuote = plain.replace(/^.*?Your favou?rite quote\s*:\s*/i, '').trim();
    } else if (/A weird fact about you\s*:/i.test(plain)) {
      weirdFact = plain.replace(/^.*?A weird fact about you\s*:\s*/i, '').trim();
    } else if (/If your life was made into a movie\.?\s*What would the title be\??\s*:?/i.test(plain)) {
      lifeMovieTitle = plain.replace(/^.*?If your life was made into a movie\.?\s*What would the title be\??\s*:?\s*/i, '').trim();
    }
  }

  const frontmatter = {
    name,
    slug,
    pubDate,
    coverImage: localCoverPath,
    coverImageAlt: `${name} Next-Gen Fridays Podcast Cover`,
    bio,
    bioHtml,
    spotifyEmbeds,
    socials,
    missionStatement,
    favoriteQuote,
    weirdFact,
    lifeMovieTitle,
  };

  const mdContent = `---\n${Object.entries(frontmatter)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n')}\n---\n\n${bio}\n`;

  fs.writeFileSync(path.join(OUT_DIR, `${slug}.md`), mdContent, 'utf8');
  summary.push({
    slug,
    name,
    pubDate,
    hasImg: Boolean(remoteCoverUrl),
    hasBio: Boolean(bio),
    embeds: spotifyEmbeds.length,
    socials: socials.length,
    mission: Boolean(missionStatement),
    quote: Boolean(favoriteQuote),
    weird: Boolean(weirdFact),
    movie: Boolean(lifeMovieTitle),
  });
}

fs.writeFileSync('scripts/image-manifest.json', JSON.stringify(imageManifest, null, 2), 'utf8');
console.table(summary);
