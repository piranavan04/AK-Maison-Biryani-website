import { ArrowUp } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { MENU } from '../../data/menu'
import { Lightbox, type LightboxItem } from '../Lightbox'
import { Eyebrow, Ornament } from '../Ornament'
import { Reveal } from '../Reveal'
import { DietMark } from './DietMark'
import { MenuDishCard } from './MenuDishCard'
import { MenuTabs, type MenuTab } from './MenuTabs'

const ALL = 'all'
const sectionId = (categoryId: string) => `menu-${categoryId}`
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * The full restaurant menu: a short introduction, a sticky category bar, then every category
 * in one continuous scroll. Tabs jump smoothly to a category; the active tab follows scrolling.
 */
export function MenuSection() {
  const tabsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(ALL)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  /** Height of the fixed site header + this section's sticky tab bar. */
  const [offsets, setOffsets] = useState({ header: 72, tabs: 64 })
  const lockUntil = useRef(0)

  const tabs: MenuTab[] = useMemo(
    () => [{ id: ALL, label: 'All' }, ...MENU.map((c) => ({ id: c.id, label: c.tab }))],
    [],
  )

  // Every dish photo, in menu order, for the lightbox.
  const { photos, startIndex } = useMemo(() => {
    const photos: LightboxItem[] = []
    const startIndex: Record<string, number> = {}
    for (const category of MENU) {
      startIndex[category.id] = photos.length
      for (const dish of category.dishes) {
        photos.push({ id: dish.id, photo: dish.photo, caption: dish.name, detail: dish.description })
      }
    }
    return { photos, startIndex }
  }, [])

  // Track the fixed header's height (it shrinks after scrolling) and the tab bar's height.
  useEffect(() => {
    const header = document.querySelector('header')
    const bar = tabsRef.current
    if (!header || !bar) return
    const measure = () => setOffsets({ header: header.offsetHeight, tabs: bar.offsetHeight })
    measure()
    const resize = new ResizeObserver(measure)
    resize.observe(header)
    resize.observe(bar)
    return () => resize.disconnect()
  }, [])

  // Scroll-spy: the active tab is the last category whose top has passed the sticky bars.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (Date.now() < lockUntil.current) return
      const line = offsets.header + offsets.tabs + window.innerHeight * 0.18
      let current = ALL
      for (const category of MENU) {
        const el = document.getElementById(sectionId(category.id))
        if (el && el.getBoundingClientRect().top <= line) current = category.id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [offsets])

  const scrollToTarget = useCallback(
    (id: string) => {
      const target = document.getElementById(id === ALL ? 'menu' : sectionId(id))
      if (!target) return
      const gap = id === ALL ? 0 : offsets.tabs + 24
      const top = target.getBoundingClientRect().top + window.scrollY - offsets.header - gap
      const smooth = !prefersReducedMotion()
      // Hold the clicked tab while the page glides past other categories.
      lockUntil.current = Date.now() + (smooth ? 1100 : 0)
      setActive(id)
      window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
    },
    [offsets],
  )

  const closeLightbox = useCallback(() => setOpenIndex(null), [])

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative bg-wine text-cream"
      style={{ '--menu-sticky': `${offsets.header + offsets.tabs}px` } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pattern-gold pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      {/* Introduction */}
      <div className="relative mx-auto max-w-3xl px-5 pb-10 pt-20 text-center sm:px-8 sm:pb-12 sm:pt-28">
        <Reveal>
          <Eyebrow>Discover Our Cuisine</Eyebrow>
          <Ornament className="mx-auto mt-4 justify-center" />
          <h2
            id="menu-heading"
            className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            A Culinary Journey <span className="block italic text-saffron sm:inline">Through South India</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-cream/75 sm:text-lg">
            From aromatic biryanis to traditional South Indian favourites, discover a collection of
            authentic flavours crafted to make every meal memorable.
          </p>
          <p className="mt-6 flex items-center justify-center gap-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/65">
            <span className="flex items-center gap-2">
              <DietMark diet="veg" /> Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <DietMark diet="non-veg" /> Non-vegetarian
            </span>
          </p>
        </Reveal>
      </div>

      {/* Sticky category bar */}
      <div
        ref={tabsRef}
        className="sticky z-30 border-y border-gold/25 bg-wine shadow-[0_12px_24px_-18px_rgb(0_0_0/0.8)]"
        style={{ top: offsets.header }}
      >
        <MenuTabs tabs={tabs} active={active} onSelect={scrollToTarget} />
      </div>

      {/* Categories */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        {MENU.map((category, ci) => (
          <section
            key={category.id}
            id={sectionId(category.id)}
            aria-labelledby={`${sectionId(category.id)}-title`}
            className="border-b border-gold/15 py-14 last:border-b-0 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-14"
          >
            <Reveal className="lg:col-span-4 lg:self-start lg:sticky lg:top-[calc(var(--menu-sticky)+2.5rem)]">
              <p className="flex items-baseline gap-3 text-gold">
                <span className="font-display text-4xl italic leading-none text-saffron sm:text-5xl">
                  {String(ci + 1).padStart(2, '0')}
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em]">Category</span>
              </p>
              <h3
                id={`${sectionId(category.id)}-title`}
                className="mt-3 font-display text-[2rem] font-semibold leading-tight text-cream sm:text-[2.6rem]"
              >
                {category.name}
              </h3>
              <Ornament className="mt-4" />
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-cream/70 sm:text-base">
                {category.description}
              </p>
              <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-gold/80">
                {category.dishes.length} dishes
              </p>
            </Reveal>

            <ul className="mt-9 grid grid-cols-2 gap-x-3.5 gap-y-9 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:col-span-8 lg:mt-0 lg:gap-x-8 lg:gap-y-14">
              {category.dishes.map((dish, di) => (
                <Reveal as="li" key={dish.id} delay={(di % 2) * 110} threshold={0.15}>
                  <MenuDishCard dish={dish} onOpen={() => setOpenIndex(startIndex[category.id] + di)} />
                </Reveal>
              ))}
            </ul>
          </section>
        ))}

        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => scrollToTarget(ALL)}
            className="group flex items-center gap-3 rounded-full border border-gold/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.24em] text-cream transition-colors hover:border-saffron hover:bg-saffron hover:text-wine"
          >
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Back to the top of the menu
          </button>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox items={photos} index={openIndex} onClose={closeLightbox} onChange={setOpenIndex} />
      )}
    </section>
  )
}
