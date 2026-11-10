import { useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export interface MenuTab {
  id: string
  label: string
}

interface MenuTabsProps {
  tabs: MenuTab[]
  active: string
  onSelect: (id: string) => void
}

/**
 * Category navigation. A gold pill slides behind the active tab; on narrow screens the row
 * scrolls sideways and keeps the active tab in view.
 */
export function MenuTabs({ tabs, active, onSelect }: MenuTabsProps) {
  const { t } = useTranslation()
  const rowRef = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null)
  const placed = useRef(false)

  useLayoutEffect(() => {
    const row = rowRef.current
    if (!row) return
    const place = () => {
      const el = row.querySelector<HTMLElement>(`[data-tab="${active}"]`)
      if (!el) return
      setPill({ x: el.offsetLeft, w: el.offsetWidth })
      // Keep the active tab visible inside the scrollable row (never scrolls the page).
      const target = el.offsetLeft - (row.clientWidth - el.offsetWidth) / 2
      // First placement is instant so the bar always opens at the right spot (never a stale offset).
      const max = row.scrollWidth - row.clientWidth
      row.scrollTo({ left: Math.min(Math.max(0, target), Math.max(0, max)), behavior: placed.current ? 'smooth' : 'instant' })
      placed.current = true
    }
    place()
    const resize = new ResizeObserver(place)
    resize.observe(row)
    return () => resize.disconnect()
  }, [active, tabs])

  return (
    <nav aria-label={t('menu.tabsLabel')} className="relative">
      <div
        ref={rowRef}
        className="menu-tabs relative flex gap-1 overflow-x-auto overflow-y-hidden overscroll-x-contain px-5 py-3 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {pill && (
          <span
            aria-hidden="true"
            className="absolute top-3 h-10 rounded-full bg-saffron shadow-[0_6px_18px_-6px_rgb(245_197_66/0.6)] transition-[transform,width] duration-500 ease-[var(--ease-royal)] motion-reduce:transition-none"
            style={{ width: pill.w, transform: `translateX(${pill.x}px)`, left: 0 }}
          />
        )}
        {tabs.map((tab, i) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              data-tab={tab.id}
              onClick={() => onSelect(tab.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`relative z-10 h-10 shrink-0 ${i === 0 ? 'ml-auto' : ''} ${i === tabs.length - 1 ? 'mr-auto' : ''} whitespace-nowrap rounded-full px-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 sm:px-5 sm:text-xs ${
                isActive ? 'text-wine' : 'text-cream/80 hover:text-saffron'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
