interface LogoProps {
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Official AK chef-hat monogram (public/brand/logo.png, background made transparent
 * from the supplied logo) beside the "Maison Biryani / Cuisine Indienne" wordmark.
 */
export function Logo({ tone = 'light', className = '' }: LogoProps) {
  const main = tone === 'light' ? 'text-cream' : 'text-burgundy'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/brand/logo.png"
        alt=""
        width={118}
        height={151}
        decoding="async"
        className="h-12 w-auto shrink-0 select-none sm:h-14"
      />
      <span className="flex flex-col leading-none">
        <span className="flex items-baseline gap-1.5">
          <span className="font-script text-2xl text-saffron">Maison</span>
          <span className={`font-display text-2xl font-bold ${main}`}>Biryani</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.38em] text-gold">
          Cuisine Indienne
        </span>
      </span>
      <span className="sr-only">AK Maison Biryani</span>
    </span>
  )
}
