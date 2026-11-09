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

## Languages (English / Français)

The site is bilingual. English is always the default on a first visit; visitors switch with
**EN | FR** in the navigation bar (inside the menu on phones). The choice is saved in the browser
(`localStorage`, key `akmb-language`) and restored on later visits. The browser's own language is
never used to pick French automatically.

- Translation system: `i18next` + `react-i18next`, set up in `src/i18n/i18n.ts`.
- All text lives in two files with identical keys:
  - `src/i18n/locales/en/translation.json`
  - `src/i18n/locales/fr/translation.json` (Canadian French for Quebec)
- To change wording, edit the same key in both files. To add a menu dish, add it to
  `src/data/menu.ts` (photo, veg/non-veg, labels, optional price) and add
  `menu.dishes.<id>.name / description / alt` to both translation files.
- Not translated on purpose: the brand name, logo, phone number and street address.
- `<html lang>` switches between `en` and `fr-CA`; the page title and meta description follow
  the active language.
- French labels are longer, so in French the full desktop navigation appears from 1280px
  (1024px in English); narrower screens use the menu button.
