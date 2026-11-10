# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Languages (Français / English)

The site is bilingual and **French is the default** on a first visit (the restaurant is in
Montréal). Visitors switch with **EN | FR**, which stays visible in the navigation bar on every
screen size, including phones. The choice is saved in the browser (`localStorage`, key
`akmb-language`) and restored on later visits. The browser's own language is not used to pick
the language.

- Translation system: `i18next` + `react-i18next`, set up in `src/i18n/i18n.ts`.
- Interface text lives in two files with identical keys:
  - `src/i18n/locales/en/translation.json`
  - `src/i18n/locales/fr/translation.json` (Canadian French for Quebec)
- **The menu is in one place: `src/data/menu.ts`.** Each dish has its English and French name and
  description side by side, its printed price, veg / non-veg mark and an optional photo. A dish with
  a photo appears as a photo card; without one, as a menu line. Category titles and introductions
  are in the translation files under `menu.categories.<id>`.
- Signature Flavours (`src/data/dishes.ts`) picks its biryani, dosa and kottu roti from the same
  menu data, so names and prices can never disagree with the Menu section.
- Photos cropped from the restaurant's own menu cards are in `public/images/menu/card/`.
- Not translated on purpose: the brand name, logo, phone number and street address.
- `<html lang>` switches between `fr-CA` and `en`; the page title and meta description follow
  the active language.
- Anchor links (`#menu`, `#story`, ...) are handled by `src/lib/scroll.ts`, which measures the real
  header height so the target always lands directly under the navigation bar.
