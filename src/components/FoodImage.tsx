import { useState } from 'react'

interface FoodImageProps {
  src: string
  alt: string
  /** Shown inside the placeholder when the photograph file is missing. */
  label: string
  className?: string
  eager?: boolean
  /** Load now at normal priority (e.g. slider cards that are about to slide into view). */
  preload?: boolean
  sizes?: string
  /** Optional responsive sources and intrinsic size (prevents layout shift). */
  srcSet?: string
  width?: number
  height?: number
  /** Optional CSS object-position focal point. */
  position?: string
}

/**
 * Photograph with a graceful brand-coloured fallback, so a missing file never shows a broken icon.
 */
export function FoodImage({
  src,
  alt,
  label,
  className = '',
  eager = false,
  preload = false,
  sizes,
  srcSet,
  width,
  height,
  position,
}: FoodImageProps) {
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
      srcSet={srcSet}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      style={position ? { objectPosition: position } : undefined}
      loading={eager || preload ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={`bg-wine object-cover ${className}`}
    />
  )
}
