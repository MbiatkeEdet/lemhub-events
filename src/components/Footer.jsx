import { Crown } from 'lucide-react'

export default function Footer({ onOpenChat }) {
  return (
    <footer className="border-t border-bronze-line/60 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-display text-lg text-bone">
                Lemhub-<span className="text-gold">Events</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-bone-dim">
              SMS invites, registration links, and QR check-in — the guest list handled properly,
              for events of any size.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold">NAVIGATE</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-bone-dim">
              <li><a href="/" className="hover:text-bone">Home</a></li>
              <li><a href="/packages" className="hover:text-bone">Packages</a></li>
              <li><a href="/register" className="hover:text-bone">Guest registration</a></li>
              <li><a href="/dashboard" className="hover:text-bone">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold">SUPPORT</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-bone-dim">
              <li>NTA Road Mgbougba</li>
              <li>Port Harcourt, Rivers State</li>
              <li>+234 803 626 5605</li>
              <li>support@lemhub-events.com</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold">HOURS</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-bone-dim">
              <li>
                <button
                  type="button"
                  onClick={onOpenChat}
                  className="text-left font-body text-sm text-bone-dim transition hover:text-bone"
                >
                  Live chat — 24 hours
                </button>
              </li>
              <li>Priority support — 7am–11pm</li>
              <li>Premium success line — 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-dashed border-bronze-line pt-6 font-mono text-xs text-bone-dim md:flex-row md:items-center">
          <p>© 2026 Lemhub-Events. All rights reserved.</p>
          <p>EVENT GUEST OPERATIONS — REG. NO. LE-1997</p>
        </div>
      </div>
    </footer>
  )
}
