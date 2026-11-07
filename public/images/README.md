# Food photography

All photographs are local, responsive WebP files (480 / 960 / 1440 px wide):

```
images/
  hero/          hero-chicken-biryani          (hero arch)
  restaurant/    story-copper-feast            (Our Story)
  biryani/       chicken-dum-biryani, mutton-biryani
  south-indian/  masala-dosa, idli-sambar, south-indian-thali
  non-veg/       tandoori-chicken, chicken-65, chicken-curry, mutton-curry
  gallery/       12 gallery photographs (none repeated elsewhere)
  menu/          36 full-menu photographs in biryani/, chicken/, mutton/, south-indian/,
                 vegetarian/, starters/ and beverages/ (one per dish, none repeated)
```

Paths, alt text, dimensions and focal points live in `src/data/images.ts`; menu dishes and
their photos live in `src/data/menu.ts`.
To swap a photo, add WebP files at the same three widths and update that entry.
Sources and licences: `CREDITS.md`. The brand logo stays in `/public/brand/`.
