import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { GalleryItem } from '../data/gallery'
import { photoProps } from '../data/images'
import { FoodImage } from './FoodImage'

interface LightboxProps {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = items[index]
  const count = items.length

  const prev = () => onChange((index - 1 + count) % count)
  const next = () => onChange((index + 1) % count)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((index - 1 + count) % count)
      if (event.key === 'ArrowRight') onChange((index + 1) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, count, onChange, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.caption}, image ${index + 1} of ${count}`}
      className="fixed inset-0 z-[100] flex flex-col bg-wine/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="grid size-11 place-items-center rounded-full border border-gold/60 text-cream transition-colors hover:bg-gold/20"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-wine/70 text-cream transition-colors hover:bg-gold/20 sm:left-6"
        >
          <ChevronLeft className="size-5" />
        </button>

        <figure
          key={item.id}
          onClick={(e) => e.stopPropagation()}
          className="hero-rise flex max-h-full max-w-5xl flex-col items-center"
          style={{ '--d': '0ms' } as React.CSSProperties}
        >
          <FoodImage
            {...photoProps(item.photo)}
            label={item.caption}
            eager
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="h-auto max-h-[68dvh] w-auto max-w-full border border-gold/50 object-contain"
          />
          <figcaption className="mt-5 text-center font-display text-2xl italic text-saffron">
            {item.caption}
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-wine/70 text-cream transition-colors hover:bg-gold/20 sm:right-6"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="h-6" />
    </div>
  )
}
