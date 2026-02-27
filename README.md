<h1 align="center">Christian Guzman Hugo Theme</h1>

This repository powers the css-intensive experience behind [christianguzman.uk](https://christianguzman.uk). The layout, tooling, and documentation have been rewritten so the site can ship exactly what Christian needs.

<p align="center">
  <a href="https://christianguzman.uk" target="_blank" rel="noreferrer">Visit the site</a> │
  <a href="https://christianguzman.uk/blog" target="_blank" rel="noreferrer">Read Christian’s blog</a>
</p>

---

## Overview
- **Christian-first identity**: All metadata and documentation now speak to the Christian Guzman brand, so there is no confusion about who owns, maintains, and deploys this repo.
- **Modular custom styles**: Ten purpose-built fragments under `assets/css/custom/` are concatenated in `layouts/partials/head.html` to recreate the cascade of the legacy `custom.css` while keeping each file focused.
- **CSS guardrails**: Stylelint + Stylelint Order enforce property ordering on `assets/css/**/*.css`, Prettier keeps formatting consistent, and Husky + lint-staged run both on staged files before every commit.
- **Single-theme focus**: All assets live here. The earlier bundled demo site was removed, so this repo serves strictly as the Christian Guzman presentation layer.

---

## Getting started
```bash
git clone git@github.com:h-4vok/personal-brand-website-theme.git
cd personal-brand-website-theme/themes/<theme-folder>
npm install
npm run dev
```

This repo lives inside your theme directory (`themes/<theme-folder>`) and Hugo consumes it directly when you point your project at that folder.

---

## CSS Quality
| Task | Description |
| --- | --- |
| `npm run lint:css` | Run Stylelint across the custom CSS fragments. |
| `npm run lint:css:fix` | Apply Stylelint auto-fixes where possible. |
| `npm run format:css` | Format all CSS that lives under `assets/css/**`. |
| `npm run format:css:check` | Dry-run Prettier check for CSS files. |
| `npm run quality:css` | Run `lint:css` + `format:css:check` as a combined validation step. |

Vendor or third-party assets (`static/plugins/**`, `**/*.min.css`) are excluded via `.stylelintignore` and `.prettierignore`.

### Pre-commit (Husky + lint-staged)
- Hooks install via `npm run prepare`.
- On `git commit`, staged CSS runs `prettier --write`, `stylelint --fix`, then `stylelint`.
- Commits fail until Stylelint reports clean output.

---

## Asset structure
1. `assets/css/custom/00-...40-...css` — modular CSS fragments that are concatenated and minified before emission.
2. `layouts/partials/head.html` — builds the Hugo slice, merges assets into `custom.bundle.css`, and emits a single `<link>`.
3. `assets/css/style.css` — the default theme styles shipped with the theme remain untouched; only the custom fragments are linted/formatting-managed.

---

## Contributing
- When updating styles, add the rules to the relevant `assets/css/custom/NN-*.css` file and keep the cascade order stable.
- If you need new tokens, add them to `assets/css/custom/01-tokens.css` so the other fragments can reuse them.
- Run `npm run format:css` and `npm run lint:css` before pushing; Husky ensures staged files are reported early.
- Somebody else on Christian’s team must sign off on visual regressions before deploying to production.

---

## Reporting issues
Open an issue at [https://github.com/h-4vok/personal-brand-website-theme/issues](https://github.com/h-4vok/personal-brand-website-theme/issues). Include reproduction steps, screenshots, and tooling logs if the problem involves linting or formatting.

---

## License
**Code:** MIT (see `LICENSE`).  
**Images:** Demo visuals are illustrative; please check their original sources.
