import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DISHES } from '../data/dishes'
import { Eyebrow, Ornament } from './Ornament'
import { FoodImage } from './FoodImage'
import { Reveal } from './Reveal'

/** Time each slide stays before moving on. */
const AUTOPLAY_MS = 3500
/** After a swipe, tap, scroll or key press, wait this long before auto-play resumes. */
const RESUME_AFTER_MS = 6000

export function Dishes() {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)
  /** Number of distinct scroll positions (cards minus those already visible, plus one). */
  const [stops, setStops] = useState(DISHES.length)

  const hovering = useRef(false)
  const focused = useRef(false)
  const inView = useRef(false)
  const lastInteraction = useRef(0)
  /** True once the section is about a screen away: load every slider photo so none pops in late. */
  const [nearby, setNearby] = useState(false)
  /** Sideways touchpad swipe accumulator (mouse/touchpad devices). */
  const swipeX = useRef(0)
  const swipeLockUntil = useRef(0)

  /** Distance between the left edges of two neighbouring cards. */
  const cardStep = useCallback(() => {
    const track = trackRef.current
    const cards = track?.children
    if (!track || !cards || cards.length < 2) return track?.clientWidth ?? 1
    return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
  }, [])

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current
      if (!track) return
      const card = track.children[index] as HTMLElement | undefined
      if (!card) return
      const first = track.children[0] as HTMLElement
      track.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: 'smooth' })
    },
    [],
  )

  const next = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    goTo(atEnd ? 0 : Math.min(active + 1, DISHES.length - 1))
  }, [active, goTo])

  const prev = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    goTo(track.scrollLeft <= 4 ? stops - 1 : Math.max(active - 1, 0))
  }, [active, goTo, stops])

  // Track which card is at the start of the row, and how many positions the row has.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const step = cardStep()
        const visible = Math.max(1, Math.round(track.clientWidth / step))
        setStops(Math.max(1, DISHES.length - visible + 1))
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
        setActive(atEnd ? DISHES.length - visible : Math.round(track.scrollLeft / step))
      })
    }
    measure()
    track.addEventListener('scroll', measure, { passive: true })
    const resize = new ResizeObserver(measure)
    resize.observe(track)
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', measure)
      resize.disconnect()
    }
  }, [cardStep])

  // Start loading all slider photos shortly before the section scrolls into view.
  useEffect(() => {
    const track = trackRef.current
    if (!track || nearby) return
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setNearby(true), {
      rootMargin: '100% 0px',
    })
    observer.observe(track)
    return () => observer.disconnect()
  }, [nearby])

  // Only auto-play while the section is on screen.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver(([entry]) => (inView.current = entry.isIntersecting), {
      threshold: 0.35,
    })
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  // Auto-advance to the next dish.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      const recentlyTouched = Date.now() - lastInteraction.current < RESUME_AFTER_MS
      if (document.hidden || !inView.current || hovering.current || focused.current || recentlyTouched) return
      next()
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [next])

  const markInteraction = () => {
    lastInteraction.current = Date.now()
  }

  // A clearly sideways touchpad swipe changes the dish; vertical scrolling passes straight to the page.
  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) * 1.5) {
      swipeX.current = 0
      return
    }
    markInteraction()
    if (Date.now() < swipeLockUntil.current) return
    swipeX.current += e.deltaX
    if (Math.abs(swipeX.current) > 60) {
      if (swipeX.current > 0) next()
      else prev()
      swipeX.current = 0
      swipeLockUntil.current = Date.now() + 700
    }
  }

  return (
    <section
      id="signature"
      aria-labelledby="signature-title"
      className="relative overflow-hidden bg-burgundy py-24 text-cream sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pattern-gold absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t('signature.eyebrow')}</Eyebrow>
          <Ornament className="mx-auto mt-4 justify-center" />
          <h2
            id="signature-title"
            className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            {t('signature.titleLead')} <span className="italic text-saffron">{t('signature.titleAccent')}</span>
          </h2>
        </Reveal>

        {/* Side-by-side cards on every screen size: 1 + a peek on phones, 2 on tablets, 3 on desktop. */}
        <ul
          ref={trackRef}
          aria-label={t('signature.listLabel')}
          onPointerEnter={(e) => e.pointerType === 'mouse' && (hovering.current = true)}
          onPointerLeave={() => (hovering.current = false)}
          onPointerDown={markInteraction}
          onTouchStart={markInteraction}
          onWheel={onWheel}
          onKeyDown={markInteraction}
          onFocus={() => (focused.current = true)}
          onBlur={() => (focused.current = false)}
          className="dish-track -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:mt-16 sm:gap-6 sm:scroll-px-0 sm:px-0 lg:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {DISHES.map((dish, i) => (
            <Reveal
              as="li"
              key={dish.id}
              delay={(i % 3) * 110}
              threshold={0.01}
              className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)]"
            >
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/40 bg-wine p-2.5 transition-colors duration-500 group-hover:border-saffron">
                  <div className="relative size-full overflow-hidden">
                    <FoodImage
                      src={dish.photo.src}
                      srcSet={dish.photo.srcSet}
                      width={dish.photo.width}
                      height={dish.photo.height}
                      position={dish.photo.position}
                      alt={t(dish.photo.altKey)}
                      label={t(`signature.dishes.${dish.id}.name`)}
                      preload={nearby}
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 78vw"
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
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-gold">
                    {t(`signature.categories.${dish.category}`)}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-cream transition-colors duration-300 group-hover:text-saffron sm:text-[1.7rem]">
                      {t(`signature.dishes.${dish.id}.name`)}
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
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/75">{t(`signature.dishes.${dish.id}.description`)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Controls: arrows on tablet/desktop, position dots everywhere */}
        <div className="mt-6 flex items-center justify-center gap-5 sm:mt-10">
          <button
            type="button"
            onClick={() => {
              markInteraction()
              prev()
            }}
            aria-label={t('signature.prev')}
            className="hidden size-11 place-items-center rounded-full border border-gold/60 text-cream transition-colors hover:bg-gold/15 hover:text-saffron sm:grid"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: stops }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  markInteraction()
                  goTo(i)
                }}
                aria-label={t('signature.showDish', { number: i + 1 })}
                aria-current={i === active ? 'true' : undefined}
                className="group/dot grid h-8 place-items-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-[width,background-color] duration-500 ${
                    i === active ? 'w-6 bg-saffron' : 'w-1.5 bg-gold/45 group-hover/dot:bg-gold'
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              markInteraction()
              next()
            }}
            aria-label={t('signature.next')}
            className="hidden size-11 place-items-center rounded-full border border-gold/60 text-cream transition-colors hover:bg-gold/15 hover:text-saffron sm:grid"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
        <p
          aria-hidden="true"
          className="mt-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold/80 sm:hidden"
        >
          {t('signature.swipe')}
        </p>
      </div>
    </section>
  )
}
