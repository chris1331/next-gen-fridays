# Next-Gen Fridays

Archive site for **Next-Gen Fridays**, a podcast hosted by Chris Latham showcasing the creative and entrepreneurial stories of the next generation.

Live at [nextgenfridays.com](https://nextgenfridays.com). Follow what Chris is up to now at [chrislatham.ca](https://chrislatham.ca) and [thelatham.net](https://thelatham.net).

## Stack

- [Astro](https://astro.build) static site
- Alumni episodes as a content collection in `src/content/alumni/`
- Deployed as static assets on a Cloudflare Worker (`wrangler.jsonc`)

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # build to ./dist
```

## Deploy

```sh
npm run build
npx wrangler deploy
```
