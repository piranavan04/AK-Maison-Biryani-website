import { ArrowRight, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { IMAGES, photoProps } from '../data/images'
import { Eyebrow, Ornament } from './Ornament'
import { FoodImage } from './FoodImage'

export function Hero() {
  const { t } = useTranslation()
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-wine text-cream"
      aria-labelledby="hero-title"
    >
      {/* Layered background: burgundy glow plus a faint gold lattice */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_35%,var(--color-burgundy)_0%,var(--color-wine)_62%)]"
      />
      <div
        aria-hidden="true"
        className="pattern-gold absolute inset-0 -z-10 opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="mx-auto grid min-h-svh max-w-7xl items-center gap-9 px-5 pb-14 pt-24 sm:gap-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-32">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="hero-rise" style={{ '--d': '100ms' } as React.CSSProperties}>
            <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
            <Ornament className="mt-4 max-sm:hidden" />
          </div>

          <h1
            id="hero-title"
            className="hero-rise mt-4 font-display text-[2.55rem] font-semibold leading-[1.04] sm:mt-6 tracking-tight text-cream sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]"
            style={{ '--d': '250ms' } as React.CSSProperties}
          >
            {t('hero.titleLead')}{' '}
            <span className="italic text-saffron">{t('hero.titleAccent')}</span>
          </h1>

          <p
            className="hero-rise mt-5 max-w-xl text-[0.97rem] leading-relaxed text-cream/80 sm:mt-6 sm:text-lg"
            style={{ '--d': '420ms' } as React.CSSProperties}
          >
            {t('hero.intro')}
          </p>

          <div
            className="hero-rise mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4 sm:[&:lang(fr)]:flex-wrap"
            style={{ '--d': '560ms' } as React.CSSProperties}
          >
            <a
              href="#menu"
              className="btn-gold group inline-flex items-center justify-center gap-3 rounded-full bg-saffron px-8 py-3.5 [&:lang(fr)]:px-7 [&:lang(fr)]:tracking-[0.15em] sm:[&:lang(fr)]:whitespace-nowrap text-[0.8rem] sm:py-4 sm:text-[0.82rem] font-bold uppercase tracking-[0.2em] text-wine transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold"
            >
              {t('hero.ctaMenu')}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#visit"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-gold/70 px-8 py-3.5 [&:lang(fr)]:px-7 [&:lang(fr)]:tracking-[0.15em] sm:[&:lang(fr)]:whitespace-nowrap text-[0.8rem] sm:py-4 sm:text-[0.82rem] font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-saffron hover:bg-saffron/10 hover:text-saffron"
            >
              <MapPin className="size-4" />
              {t('hero.ctaVisit')}
            </a>
          </div>
        </div>

        {/* Arch photograph */}
        <div className="order-1 mx-auto w-full max-w-[16.5rem] sm:max-w-[26rem] lg:order-2 lg:max-w-[30rem] lg:justify-self-end">
          <div className="hero-arch-in relative">
            {/* offset gold outline */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] border border-gold/60 sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative aspect-[10/11] overflow-hidden rounded-t-[999px] sm:aspect-[4/5] border-2 border-gold bg-burgundy shadow-[0_30px_80px_-30px_rgb(0_0_0/0.7)]">
              <FoodImage
                {...photoProps(IMAGES.hero, t)}
                label={t('hero.photoLabel')}
                eager
                sizes="(min-width: 1024px) 30rem, (min-width: 640px) 26rem, 90vw"
                className="size-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-wine/45 via-transparent to-transparent"
              />
            </div>

            {/* Grand opening seal */}
            <div className="absolute -bottom-7 -left-4 grid size-[7.6rem] place-items-center rounded-full border border-gold bg-burgundy text-center shadow-[0_18px_40px_-14px_rgb(0_0_0/0.65)] sm:-left-8 sm:size-36 sm:-bottom-6">
              <div className="absolute inset-1.5 rounded-full border border-gold/50" aria-hidden="true" />
              <div className="relative">
                <p className="text-[0.5rem] font-bold uppercase tracking-[0.16em] text-gold sm:text-[0.55rem] sm:tracking-[0.24em]">{t('opening.title')}</p>
                <p className="mt-1 font-display text-2xl font-bold leading-none text-saffron sm:text-[1.7rem]">
                  {t('opening.sealDay')}
                </p>
                <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-cream/80 sm:tracking-[0.22em]">
                  {t('opening.sealYearTime', { time: t('opening.time') })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent"
      />
    </section>
  )
}
