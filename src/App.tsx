import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Contact } from './components/Contact'
import { Dishes } from './components/Dishes'
import { MenuSection } from './components/menu/MenuSection'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Story } from './components/Story'
import { Visit } from './components/Visit'
import { WhyChoose } from './components/WhyChoose'
import { scrollToElement, scrollToId, watchHeaderHeight } from './lib/scroll'

export default function App() {
  const { t } = useTranslation()
  // Keep CSS scroll-padding equal to the real header height, for native anchor jumps.
  useEffect(() => watchHeaderHeight(), [])

  // In-page links (#story, #menu, ...) scroll under the real header and correct themselves once
  // the page settles, so no part of the previous section peeks out between the bar and the target.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      const hash = link?.getAttribute('href')
      if (!link || !hash || hash.length < 2) return
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!target) return
      event.preventDefault()
      history.replaceState(null, '', hash)
      scrollToElement(target)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Links that arrive with a section anchor (e.g. a QR code to /#menu) open at that section.
  // The browser's own jump happens before React has drawn the page, so it finds nothing; this
  // repeats it once the sections exist and again after fonts have loaded.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    scrollToId(id, { instant: true })
    document.fonts?.ready.then(() => scrollToId(id, { instant: true }))
  }, [])

  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-2 focus:text-wine"
      >
        {t('common.skipToMenu')}
      </a>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Dishes />
        <MenuSection />
        <WhyChoose />
        <Gallery />
        <Visit />
      </main>
      <Contact />
    </>
  )
}
