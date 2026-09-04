# One Success Gym website

- The authoritative website is the repository-root `index.html`. Development and production use it.
- Start from the repository root with `npm run dev` (port 8092). Never run Vite with `public/owner-demo` as its root.
- `public/owner-demo` is an asset directory, not another website. Its index is only a compatibility redirect. Do not recreate a second layout there.
- The shared coach renderer and roster are `public/owner-demo/coaches/cards.js`; styling is `cards.css`. There are 14 coaches. Bia, Bert, Tong and Boon have two photos; the other ten have one.
- `src/App.tsx` and `src/pages/*` are inactive legacy code, not the served website. Preserve existing uncommitted work there, but do not edit those files for website changes or wire that old layout back in.
- Keep Prices, Coaches, Classes, Clubs, Food and Contact intact. Verify the actual root preview before claiming completion. Do not push unless asked.
