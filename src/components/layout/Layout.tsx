import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToWorks = () => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
      return
    }

    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-warm-bg text-warm-text">
      <header className="border-b border-warm-accent/50 bg-warm-card/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <span className="title-warm text-lg font-semibold">个人数字花园</span>
          <nav className="flex flex-wrap gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [
                  'rounded-full px-3 py-1.5 text-sm transition-all',
                  isActive
                    ? 'bg-warm-primary text-white'
                    : 'bg-warm-accent/40 text-warm-title hover:bg-warm-accent/70',
                ].join(' ')
              }
            >
              首页
            </NavLink>

            <button
              type="button"
              onClick={scrollToWorks}
              className="rounded-full bg-warm-accent/40 px-3 py-1.5 text-sm text-warm-title transition-all hover:bg-warm-accent/70"
            >
              作品
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
                    'rounded-full px-3 py-1.5 text-sm transition-all',
                    isActive
                      ? 'bg-warm-primary text-white'
                      : 'bg-warm-accent/40 text-warm-title hover:bg-warm-accent/70',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-warm-accent/50 bg-warm-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-warm-text md:px-8">
          © {new Date().getFullYear()} 个人数字花园 · 持续生长中
        </div>
      </footer>
    </div>
  )
}

export default Layout
