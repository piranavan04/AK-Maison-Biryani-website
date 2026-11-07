import { useState } from 'react'

interface FoodImageProps {
  src: string
  alt: string
  /** Shown inside the placeholder when the photograph file is missing. */
  label: string
  className?: string
  eager?: boolean
  sizes?: string
}

/**
 * Photograph with a graceful brand-coloured fallback, so a missing file never shows a broken icon.
 */
export function FoodImage({ src, alt, label, className = '', eager = false, sizes }: FoodImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`pattern-gold relative flex items-center justify-center bg-linear-to-br from-burgundy to-wine ${className}`}
      >
        <div className="absolute inset-0 bg-wine/70" aria-hidden="true" />
        <span className="relative px-4 text-center font-script text-3xl text-saffron/90 sm:text-4xl">
          {label}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={`bg-wine object-cover ${className}`}
    />
  )
}
