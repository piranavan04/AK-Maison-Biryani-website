import { Expand } from 'lucide-react'
import { useCallback, useState } from 'react'
import { GALLERY } from '../data/gallery'
import { Eyebrow, Ornament } from './Ornament'
import { FoodImage } from './FoodImage'
import { Lightbox } from './Lightbox'
import { Reveal } from './Reveal'

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pattern-burgundy absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_10%_90%,black,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="burgundy">Gallery</Eyebrow>
          <Ornament className="mx-auto mt-4 justify-center !text-royal" />
          <h2
            id="gallery-title"
            className="mt-6 font-display text-4xl font-semibold leading-tight text-burgundy sm:text-5xl lg:text-6xl"
          >
            A Feast for the <span className="italic text-royal">Eyes</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14" delay={100}>
          <ul className="grid auto-rows-[11rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:auto-rows-[15rem] md:grid-cols-4 lg:auto-rows-[17rem]">
            {GALLERY.map((item, i) => (
              <li key={item.id} className={item.span}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Open ${item.caption} photograph`}
                  className="group relative block size-full cursor-zoom-in overflow-hidden bg-burgundy"
                >
                  <FoodImage
                    src={item.src}
                    alt={item.alt}
                    label={item.caption}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="size-full transition-transform duration-[1400ms] ease-[var(--ease-royal)] group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-wine/85 via-wine/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-2 border border-saffron/0 transition-colors duration-500 group-hover:border-saffron/70"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-3 p-4 text-left opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <span className="font-display text-xl italic text-saffron">{item.caption}</span>
                    <Expand className="size-4 text-cream" aria-hidden="true" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {openIndex !== null && (
        <Lightbox items={GALLERY} index={openIndex} onClose={close} onChange={setOpenIndex} />
      )}
    </section>
  )
}
