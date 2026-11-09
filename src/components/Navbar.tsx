import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NAV_ITEMS, SECTION_IDS, SITE } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScrolled'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'

export function Navbar() {
  const scrolled = useScrolled()
  const activeSection = useScrollSpy(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  // French labels are longer: the full desktop navigation needs 1280px in French (1024px in English);
  // below that, French uses the same mobile menu as tablets.
  const isFr = i18n.resolvedLanguage === 'fr'

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
    const mq = window.matchMedia(isFr ? '(min-width: 1280px)' : '(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [isFr])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        solid
          ? 'bg-wine shadow-[0_1px_0_rgb(217_164_65/0.35)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label={t('common.primaryNav')}
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-500 sm:px-8 ${
          scrolled ? 'py-2.5' : 'py-4 lg:py-5'
        }`}
      >
        <a href="#home" aria-label={t('common.logoHome')} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul
          className={`hidden items-center ${isFr ? 'gap-9 xl:flex' : 'gap-6 lg:flex xl:gap-9'}`}
        >
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
                  {t(item.labelKey)}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex xl:mr-1" />
          <a
            href={SITE.phoneHref}
            className="btn-gold hidden items-center gap-2 rounded-full bg-saffron px-6 py-2.5 lg:px-5 xl:px-6 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-wine transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {t('common.orderNow')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
            className={`grid size-11 place-items-center rounded-full border border-gold/60 text-cream transition-colors hover:bg-gold/15 ${
              isFr ? 'xl:hidden' : 'lg:hidden'
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-wine transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-royal)] ${isFr ? 'xl:hidden' : 'lg:hidden'} ${
          open ? 'grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex h-[calc(100dvh-5rem)] flex-col justify-center gap-1 px-8 pb-16">
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
                    {t(item.labelKey)}
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
                className="btn-gold flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-saffron px-5 py-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-wine"
              >
                <Phone className="size-4" aria-hidden="true" />
                {t('common.orderNowPhone', { phone: SITE.phoneDisplay })}
              </a>
            </li>
            <li
              style={{ transitionDelay: open ? '600ms' : '0ms' }}
              className={`pt-4 transition-[opacity,transform] duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <LanguageSwitcher variant="menu" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
