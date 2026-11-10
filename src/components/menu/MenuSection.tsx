import { ArrowUp } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { MENU, type MenuDish } from '../../data/menu'
import { useLoc } from '../../i18n/useLoc'
import { scrollToElement } from '../../lib/scroll'
import { Lightbox, type LightboxItem } from '../Lightbox'
import { Eyebrow, Ornament } from '../Ornament'
import { Reveal } from '../Reveal'
import { DietMark } from './DietMark'
import { MenuDishCard } from './MenuDishCard'
import { MenuDishRow } from './MenuDishRow'
import { MenuTabs, type MenuTab } from './MenuTabs'

const ALL = 'all'
const sectionId = (categoryId: string) => `menu-${categoryId}`
type PhotoDish = MenuDish & { photo: NonNullable<MenuDish['photo']> }
const hasPhoto = (d: MenuDish): d is PhotoDish => d.photo !== undefined

/**
 * The full restaurant menu: a short introduction, a sticky category bar, then every category
 * in one continuous scroll. Tabs jump smoothly to a category; the active tab follows scrolling.
 */
export function MenuSection() {
  const { t } = useTranslation()
  const { loc } = useLoc()
  const tabsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(ALL)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  /** Height of the fixed site header + this section's sticky tab bar. */
  const [offsets, setOffsets] = useState({ header: 72, tabs: 64 })
  const lockUntil = useRef(0)

  const tabs: MenuTab[] = useMemo(
    () => [
      { id: ALL, label: t('menu.all') },
      ...MENU.map((c) => ({ id: c.id, label: t(`menu.categories.${c.id}.tab`) })),
    ],
    [t],
  )

  // Every dish photo, in menu order, for the lightbox.
  const { photos, photoIndex } = useMemo(() => {
    const photos: LightboxItem[] = []
    const photoIndex: Record<string, number> = {}
    for (const category of MENU) {
      for (const dish of category.dishes.filter(hasPhoto)) {
        photoIndex[dish.id] = photos.length
        photos.push({
          id: dish.id,
          photo: dish.photo,
          caption: loc(dish.name),
          detail: dish.description ? loc(dish.description) : undefined,
        })
      }
    }
    return { photos, photoIndex }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

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
      // Hold the clicked tab while the page glides past other categories.
      lockUntil.current = Date.now() + (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1300)
      setActive(id)
      // Below the site header, and (for a category) below this section's sticky tab bar too.
      scrollToElement(target, id === ALL ? {} : { extra: tabsRef.current?.offsetHeight ?? 0, gap: 24 })
    },
    [],
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
          <Eyebrow>{t('menu.eyebrow')}</Eyebrow>
          <Ornament className="mx-auto mt-4 justify-center" />
          <h2
            id="menu-heading"
            className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            {t('menu.titleLead')}{' '}
            <span className="block italic text-saffron sm:inline">{t('menu.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-cream/75 sm:text-lg">
            {t('menu.intro')}
          </p>
          <p className="mt-6 flex items-center justify-center gap-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/65">
            <span className="flex items-center gap-2">
              <DietMark diet="veg" /> {t('menu.veg')}
            </span>
            <span className="flex items-center gap-2">
              <DietMark diet="non-veg" /> {t('menu.nonVeg')}
            </span>
          </p>
        </Reveal>
      </div>

      {/* Sticky category bar */}
      <div
        ref={tabsRef}
        data-sticky-bar
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
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em]">{t('menu.category')}</span>
              </p>
              <h3
                id={`${sectionId(category.id)}-title`}
                className="mt-3 font-display text-[2rem] font-semibold leading-tight text-cream sm:text-[2.6rem]"
              >
                {t(`menu.categories.${category.id}.name`)}
              </h3>
              <Ornament className="mt-4" />
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-cream/70 sm:text-base">
                {t(`menu.categories.${category.id}.description`)}
              </p>
              <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-gold/80">
                {t('menu.dishCount', { count: category.dishes.length })}
              </p>
            </Reveal>

            <div className="mt-9 sm:mt-12 lg:col-span-8 lg:mt-0">
              {category.dishes.some(hasPhoto) && (
                <ul className="grid grid-cols-2 gap-x-3.5 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8 lg:gap-y-14">
                  {category.dishes.filter(hasPhoto).map((dish, di) => (
                    <Reveal as="li" key={dish.id} delay={(di % 2) * 110} threshold={0.15}>
                      <MenuDishCard dish={dish} onOpen={() => setOpenIndex(photoIndex[dish.id])} />
                    </Reveal>
                  ))}
                </ul>
              )}
              {category.dishes.some((d) => !hasPhoto(d)) && (
                <ul
                  className={`grid gap-x-12 gap-y-6 sm:grid-cols-2 sm:gap-y-7 ${
                    category.dishes.some(hasPhoto) ? 'mt-12 border-t border-gold/20 pt-10 sm:mt-16 sm:pt-12' : ''
                  }`}
                >
                  {category.dishes
                    .filter((d) => !hasPhoto(d))
                    .map((dish) => (
                      <Reveal as="li" key={dish.id} threshold={0.1}>
                        <MenuDishRow dish={dish} />
                      </Reveal>
                    ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => scrollToTarget(ALL)}
            className="group flex items-center gap-3 rounded-full border border-gold/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.24em] text-cream transition-colors hover:border-saffron hover:bg-saffron hover:text-wine"
          >
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            {t('menu.backToTop')}
          </button>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox items={photos} index={openIndex} onClose={closeLightbox} onChange={setOpenIndex} />
      )}
    </section>
  )
}
