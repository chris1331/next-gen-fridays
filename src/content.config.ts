import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const alumni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alumni' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    pubDate: z.string(),
    coverImage: z.string(),
    coverImageAlt: z.string(),
    bio: z.string(),
    bioHtml: z.string().optional(),
    spotifyEmbeds: z.array(z.string()),
    socials: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
    missionStatement: z.string().optional().default(''),
    favoriteQuote: z.string().optional().default(''),
    weirdFact: z.string().optional().default(''),
    lifeMovieTitle: z.string().optional().default(''),
  }),
});

export const collections = { alumni };
