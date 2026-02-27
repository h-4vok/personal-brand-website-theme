<h1 align="center">Severe Meghna Hugo Theme Variation</h1>

This repository houses a **severe rewrite** of the Meghna Hugo theme that powers [christianguzman.uk](https://christianguzman.uk). While it builds on the same overall structure, the experience, markup hooks, and especially the tooling around the CSS pipeline have been rebuilt to match the site’s specific needs.

<p align="center">
  <a href="https://demo.gethugothemes.com/meghna" target="_blank" rel="noreferrer">✨ Live demo</a> │
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fdemo.gethugothemes.com%2Fmeghna%2Fsite%2F&form_factor=desktop" target="_blank" rel="noreferrer">PageSpeed 99%</a>
</p>

---

## Overview
- **Deterministic custom bundle**: `assets/css/custom/` now delivers ten narrowly scoped files (fonts, tokens, navigation, home, article, footer, etc.) that Hugo concatenates via `layouts/partials/head.html` into one minified bundle. Cascade order mirrors the legacy `custom.css`.
- **Per-file linting**: `stylelint` + `stylelint-order` enforce property ordering and warn about selector smells only on the custom CSS fragments, while `style.css` is explicitly ignored to avoid third-party churn.
- **Formatting + hooks**: Prettier (`assets/css/**/*.css`) and Husky + lint-staged keep staged CSS files formatted and linted before every commit.

---

## Getting Started
```bash
git clone git@github.com:h-4vok/personal-brand-website-theme.git
cd personal-brand-website-theme/themes/meghna-hugo
npm install
npm run project-setup
npm run dev
```

Refer to the upstream [Meghna documentation](https://docs.gethugothemes.com/meghna/?ref=github) for additional Hugo-specific knobs.

---

## CSS Quality
| Task | Description |
| --- | --- |
| `npm run lint:css` | Run Stylelint on `assets/css/**/*.css` (custom bundle only). |
| `npm run lint:css:fix` | Auto-fix fixable lint problems. |
| `npm run format:css` | Format staged CSS with Prettier. |
| `npm run format:css:check` | Check formatting without modifying files. |
| `npm run quality:css` | Combines `lint:css` + `format:css:check`. |

Vendor assets under `static/plugins/**` remain outside linting/formatting scope.

### Pre-commit (Husky + lint-staged)
- Hooks are installed via `npm run prepare`.
- On commit, staged CSS files run `prettier --write`, `stylelint --fix`, then `stylelint`.
- Commits that leave lint errors block until they are resolved.

---

## Asset structure
1. `assets/css/custom/` — modular fragments (fonts, tokens, navigation, hero, articles, fun facts, footer).
2. `layouts/partials/head.html` — builds a Hugo `slice`, concatenates them to `custom.bundle.css`, and minifies the result before emitting a single `<link>` tag.
3. The old `custom.css` file is removed; refer to the new fragments for targeted tweaks.

This split keeps each file below ~200 lines when possible without sacrificing semantic grouping.

---

## Contributing
- Keep visual regressions in check by running `npm run lint:css` and `npm run format:css` before pushing.
- When adding styles, place them in the appropriate `assets/css/custom/NN-*.css` file and update `head.html` if you need to insert a new ordering slot.
- If you introduce new CSS tokens/aliases, add them to `01-tokens.css` so they remain discoverable.

Pull requests should reference the CSS quality status and, if they touch assets, run the new tooling locally.

---

## Reporting issues
Open issues at https://github.com/h-4vok/personal-brand-website-theme/issues. Include reproduction steps, screenshots, and logs for tooling regressions.

---

## License
**Code:** MIT (same as upstream Meghna).  
**Images:** Demo visuals are illustrative; individual licences may apply.
