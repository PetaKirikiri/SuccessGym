# Success Gym

One website, one authoritative layout: root `index.html`.

Run `npm run dev` from the repository root and open http://localhost:8092/.
Use `npm run dev:phone` for local network access.
Never start Vite with public/owner-demo as its root.

- Layout, tabs and food menu: `index.html`.
- Shared coach component and 14-coach roster: `public/owner-demo/coaches/cards.js`.
- Coach styling: `public/owner-demo/coaches/cards.css`.
- Assets: `public/owner-demo/` (the name is historical).

The old owner-demo index redirects to the root, preserving the selected tab.
Unused React files in src are retained to preserve existing work, but are not
loaded by the website. Do not use them for current layout changes.

`npm run build` checks TypeScript and builds the root website into dist.
`npm run preview` serves that production build.
