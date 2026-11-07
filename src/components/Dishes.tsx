import { DISHES } from '../data/dishes'
import { Eyebrow, Ornament } from './Ornament'
import { FoodImage } from './FoodImage'
import { Reveal } from './Reveal'

export function Dishes() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="relative overflow-hidden bg-burgundy py-24 text-cream sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pattern-gold absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>From Our Kitchen</Eyebrow>
          <Ornament className="mx-auto mt-4 justify-center" />
          <h2
            id="menu-title"
            className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Our Signature <span className="italic text-saffron">Flavours</span>
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish, i) => (
            <Reveal
              as="li"
              key={dish.id}
              delay={(i % 3) * 110}
              // Stagger the middle column down on desktop for an editorial rhythm.
              className={i % 3 === 1 ? 'lg:translate-y-10' : ''}
            >
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/40 bg-wine p-2.5 transition-colors duration-500 group-hover:border-saffron">
                  <div className="relative size-full overflow-hidden">
                    <FoodImage
                      src={dish.image}
                      alt={dish.name}
                      label={dish.name}
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                      className="size-full transition-transform duration-[1400ms] ease-[var(--ease-royal)] group-hover:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-wine/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 font-display text-lg italic text-saffron"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-cream transition-colors duration-300 group-hover:text-saffron sm:text-[1.7rem]">
                      {dish.name}
                    </h3>
                    {dish.price && (
                      <span className="shrink-0 font-display text-xl font-semibold text-saffron">
                        {dish.price}
                      </span>
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-12 bg-gold transition-[width] duration-500 ease-[var(--ease-royal)] group-hover:w-24"
                  />
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/75">{dish.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
