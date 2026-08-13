import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageSquareText, Link2, QrCode, BarChart3 } from 'lucide-react'
// Using a public image for the hero visual instead of the EventPass component
import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'

const features = [
  {
    icon: MessageSquareText,
    title: 'SMS invites',
    body: 'Send personalized invites straight to your guest list, tracked from sent to delivered.',
  },
  {
    icon: Link2,
    title: 'Registration links',
    body: 'One branded link collects RSVPs, dietary notes, and plus-ones automatically.',
  },
  {
    icon: QrCode,
    title: 'QR check-in',
    body: 'Every guest gets a unique QR pass — scan at the gate, no lists, no lookup.',
  },
  {
    icon: BarChart3,
    title: 'Live dashboard',
    body: 'Watch RSVPs and check-ins update in real time, from setup through the final guest.',
  },
]

const steps = [
  { n: '01', title: 'Create your event', body: 'Set the guest cap, pick a package, and get a branded registration link in seconds.' },
  { n: '02', title: 'Invite by SMS', body: 'Import your list and send SMS invites with the registration link built in.' },
  { n: '03', title: 'Scan guests in', body: 'Each RSVP gets a QR pass. Scan at the door — the dashboard updates live.' },
]

export default function Home() {
  const [imgError, setImgError] = useState(false)
  const [img2Error, setImg2Error] = useState(false)
  return (
    <div className="grain">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-gold">EVENT GUEST MANAGEMENT</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-bone md:text-6xl">
              Every invite,
              <br />
              <span className="text-gold">every guest, tracked.</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-bone-dim">
              Lemhub-Events sends the invites, collects the RSVPs, and checks guests in by QR —
              so your event runs on one clean list instead of five spreadsheets.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-brass"
              >
                Start free
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-full border border-bronze-line px-7 py-3 font-body text-sm text-bone transition-colors hover:border-gold hover:text-gold"
              >
                See registration flow
              </Link>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-bronze-line pt-6">
              <div>
                <p className="font-display text-2xl text-bone">50K+</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-bone-dim">INVITES SENT</p>
              </div>
              <div>
                <p className="font-display text-2xl text-bone">98.4%</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-bone-dim">SMS DELIVERY</p>
              </div>
              <div>
                <p className="font-display text-2xl text-bone">&lt;1s</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-bone-dim">QR SCAN TIME</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              {!imgError ? (
                <img
                  src="/event1.jpg"
                  alt="Event"
                  onError={() => setImgError(true)}
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              ) : (
                <div className="w-full h-[420px] md:h-[520px] bg-gradient-to-tr from-charcoal to-ink flex items-end p-6">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-gold">EVENT PREVIEW</p>
                    <p className="mt-1 font-display text-xl text-bone">Guest Suite Gala</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
              <div className="absolute left-4 bottom-4 rounded-full bg-gold/95 px-3 py-1 font-semibold text-ink">
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-bronze-line/60 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-mono text-xs tracking-[0.3em] text-gold">HOW GUESTS MOVE THROUGH</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-bone md:text-4xl">
            The infrastructure behind a seamless guest list.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-bronze-line/60 p-6">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg text-bone">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-bone-dim">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.3em] text-gold">THE PROCESS</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-bone md:text-4xl">
          From invite to check-in in three steps.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div className="grid gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative pl-2">
                <p className="font-display text-5xl text-bronze-line">{s.n}</p>
                <h3 className="mt-3 font-display text-xl text-bone">{s.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-bone-dim">{s.body}</p>
                {i < steps.length - 1 && (
                  <div className="mt-6 hidden h-px w-full bg-bronze-line md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
              {!img2Error ? (
                <img
                  src="/event2.jpg"
                  alt="Process illustration"
                  onError={() => setImg2Error(true)}
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              ) : (
                <div className="w-full h-[320px] md:h-[420px] bg-gradient-to-br from-charcoal to-ink flex items-center justify-center p-6">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-gold">PROCESS ILLUSTRATION</p>
                    <p className="mt-1 font-display text-xl text-bone">How Guests Move</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Package preview */}
      <section className="border-t border-bronze-line/60 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-gold">PACKAGES</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl text-bone md:text-4xl">
                Starter, Standard, or Premium — sized to your guest list.
              </h2>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center gap-1 font-body text-sm text-gold hover:text-brass"
            >
              Compare all packages <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <PackageCard key={p.code} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl text-bone md:text-4xl">
          Your registration link is one click away.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm text-bone-dim">
          Set up your first event free. No card required for Starter.
        </p>
        <Link
          to="/packages"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-brass"
        >
          Get started
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
