interface OrnamentProps {
  className?: string
}

/** Small gold divider with a diamond centre, used under section eyebrows. */
export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <span aria-hidden="true" className={`flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-10 bg-current opacity-70" />
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
        <path d="M12 1 23 12 12 23 1 12Z" />
      </svg>
      <span className="h-px w-10 bg-current opacity-70" />
    </span>
  )
}

interface EyebrowProps {
  children: string
  tone?: 'gold' | 'burgundy'
  className?: string
}

export function Eyebrow({ children, tone = 'gold', className = '' }: EyebrowProps) {
  const color = tone === 'gold' ? 'text-saffron' : 'text-royal'
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.32em] sm:text-[0.8rem] ${color} ${className}`}>
      {children}
    </p>
  )
}
