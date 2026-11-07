interface LogoProps {
  /** Size classes. Height drives the size; width follows the logo's aspect ratio. */
  className?: string
}

/**
 * Official AK Maison Biryani logo (public/brand/logo-full.webp), recoloured for the dark
 * burgundy theme: gold monogram, saffron script, cream wordmark, gold tagline.
 * Source file with the original black background: public/brand/logo-full-original.jpg
 */
export function Logo({ className = 'h-12 sm:h-14' }: LogoProps) {
  return (
    <img
      src="/brand/logo-full.webp"
      alt="AK Maison Biryani, Cuisine Indienne"
      width={720}
      height={167}
      decoding="async"
      className={`w-auto select-none ${className}`}
    />
  )
}
