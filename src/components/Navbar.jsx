import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Crown } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/packages', label: 'Packages' },
  { to: '/register', label: 'Register' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-bronze-line/60 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Crown className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <span className="font-display text-lg tracking-wide text-bone">
            Lemhub-<span className="text-gold">Events</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-sm tracking-wide transition-colors ${
                  isActive ? 'text-gold' : 'text-bone-dim hover:text-bone'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/packages"
            className="rounded-full bg-gold px-5 py-2 font-body text-sm font-semibold text-ink transition-colors hover:bg-brass"
          >
            Start free
          </NavLink>
        </div>

        <button
          className="text-bone md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-bronze-line/60 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-body text-sm ${isActive ? 'text-gold' : 'text-bone-dim'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/packages"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink"
            >
              Start free
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
