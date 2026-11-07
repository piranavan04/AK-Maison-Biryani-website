import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_ITEMS, SECTION_IDS, SITE } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScrolled'
import { Logo } from './Logo'

export function Navbar() {
  const scrolled = useScrolled()
  const activeSection = useScrollSpy(SECTION_IDS)
  const [open, setOpen] = useState(false)

  // Lock page scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the menu if the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? 'bg-wine/95 shadow-[0_1px_0_rgb(217_164_65/0.35)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-500 sm:px-8 ${
          scrolled ? 'py-2.5' : 'py-4 lg:py-5'
        }`}
      >
        <a href="#home" aria-label="AK Maison Biryani, back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            const current = item.sections.includes(activeSection)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={current ? 'true' : undefined}
                  className={`link-underline pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-saffron ${
                    current ? 'text-saffron' : 'text-cream/90'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="btn-gold hidden items-center gap-2 rounded-full bg-saffron px-6 py-2.5 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-wine transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            514-858-0505
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full border border-gold/60 text-cream transition-colors hover:bg-gold/15 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-wine transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-royal)] lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex h-[calc(100dvh-4.5rem)] flex-col justify-center gap-1 px-8 pb-16">
            {NAV_ITEMS.map((item, i) => {
              const current = item.sections.includes(activeSection)
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
                  className={`border-b border-gold/20 transition-[opacity,transform] duration-500 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? 'true' : undefined}
                    className={`block py-4 font-display text-4xl font-semibold ${
                      current ? 'text-saffron' : 'text-cream'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
            <li
              style={{ transitionDelay: open ? '520ms' : '0ms' }}
              className={`pt-8 transition-[opacity,transform] duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <a
                href={SITE.phoneHref}
                className="btn-gold flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-wine"
              >
                <Phone className="size-4" aria-hidden="true" />
                Order Now · {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
