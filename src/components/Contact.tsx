import { MapPin, Phone } from 'lucide-react'
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from '../data/site'
import { Logo } from './Logo'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative bg-wine text-cream">
      <div
        aria-hidden="true"
        className="h-1.5 bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_14px,var(--color-wine)_14px_20px)]"
      />
      <div
        aria-hidden="true"
        className="pattern-gold absolute inset-x-0 top-1.5 h-full opacity-[0.05] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="contact-title" className="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
            We Look Forward to <span className="italic text-saffron">Welcoming You.</span>
          </h2>
          <p className="mt-5 text-base text-cream/75 sm:text-lg">
            Questions or orders? Call us, or come and see us at our Grand Opening on{' '}
            {SITE.grandOpening.dateLabel}.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-gold/30 pt-14 md:grid-cols-3">
          <div>
            <Logo className="h-16 sm:h-20" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
              {SITE.tagline} in Montreal, Quebec.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-saffron">Find Us</h3>
            <ul className="mt-5 space-y-4 text-cream/85">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic">
                  {SITE.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={SITE.phoneHref}
                  className="link-underline transition-colors hover:text-saffron"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-saffron">Explore</h3>
              <ul className="mt-5 space-y-3">
                {NAV_ITEMS.filter((item) => item.href !== '#contact').map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="link-underline text-cream/85 transition-colors hover:text-saffron"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-saffron">Follow</h3>
              <ul className="mt-5 space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    {social.url ? (
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-cream/85 transition-colors hover:text-saffron"
                      >
                        {social.label}
                      </a>
                    ) : (
                      <span className="text-cream/45" title="Link coming soon">
                        {social.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-16 border-t border-gold/20 pt-6 text-center text-xs tracking-wider text-cream/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
