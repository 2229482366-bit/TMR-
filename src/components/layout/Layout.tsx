import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { scrollToSection as smoothScrollToSection } from '../../utils/sectionScroll'
import PageTransition from './PageTransition'

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const outlet = useOutlet()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return
    }

    const sectionId = decodeURIComponent(location.hash.replace('#', ''))
    window.requestAnimationFrame(() => {
      smoothScrollToSection(sectionId)
    })
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname !== '/insights') {
      setShowBackToTop(false)
      return
    }

    const updateVisibility = () => {
      setShowBackToTop(window.scrollY > 280)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [location.pathname])

  const handleSectionClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: `#${id}` })
      return
    }

    navigate({ hash: `#${id}` }, { replace: true })
    smoothScrollToSection(id)
  }

  const isHomeSectionActive = (id: string) =>
    location.pathname === '/' && location.hash === `#${id}`

  return (
    <div className="min-h-screen bg-warm-bg text-warm-text">
      <header className="sticky top-0 z-50 border-b border-warm-accent/35 bg-warm-bg/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <NavLink to="/" className="-ml-1 text-lg font-medium tracking-wide text-textMain md:-ml-2">
            铁某人的小屋
          </NavLink>
          <nav className="flex flex-wrap items-center gap-5 md:gap-7">
            <button
              type="button"
              onClick={() => handleSectionClick('works')}
              className={[
                'text-sm font-normal text-textMuted transition-colors',
                isHomeSectionActive('works')
                  ? 'underline decoration-warm-accent/80 decoration-2 underline-offset-8'
                  : 'hover:text-textMain',
              ].join(' ')}
            >
              作品
            </button>

            <button
              type="button"
              onClick={() => handleSectionClick('contact')}
              className={[
                'text-sm font-normal text-textMuted transition-colors',
                isHomeSectionActive('contact')
                  ? 'underline decoration-warm-accent/80 decoration-2 underline-offset-8'
                  : 'hover:text-textMain',
              ].join(' ')}
            >
              联系
            </button>

            {[
              { to: '/insights', label: '洞察' },
              { to: '/inspirations', label: '碎片' },
              { to: '/toolbox', label: '百宝箱' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'text-sm font-normal text-textMuted transition-colors',
                    isActive
                      ? 'underline decoration-warm-accent/80 decoration-2 underline-offset-8'
                      : 'hover:text-textMain',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {location.pathname === '/insights' && showBackToTop && (
          <motion.button
            type="button"
            aria-label="回到顶部"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 12, scale: 0.9, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 10, scale: 0.92, filter: 'blur(8px)' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-warm-accent bg-warm-card/85 text-textMain shadow-soft backdrop-blur-sm transition-colors hover:bg-warm-bg/90"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="border-t border-warm-accent/35 bg-warm-bg">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-textMuted md:px-8">
          © {new Date().getFullYear()} 铁某人的小屋 · 持续生长中
        </div>
      </footer>
    </div>
  )
}

export default Layout
