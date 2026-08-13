import { useMemo, useState } from 'react'
import { Search, Copy, QrCode } from 'lucide-react'
import { guests, stats } from '../data/guests'

const rsvpStyles = {
  Confirmed: 'text-gold border-gold/40 bg-gold/10',
  Pending: 'text-brass border-brass/40 bg-brass/10',
  Declined: 'text-bone-dim border-bronze-line bg-bone/5',
}

const inviteStyles = {
  Delivered: 'text-gold',
  Pending: 'text-brass',
  Failed: 'text-red-400',
}

export default function Dashboard() {
  const [query, setQuery] = useState('')
  const [rsvpFilter, setRsvpFilter] = useState('All')
  const [copied, setCopied] = useState(false)

  const filtered = useMemo(() => {
    return guests.filter((g) => {
      const matchesQuery =
        g.name.toLowerCase().includes(query.toLowerCase()) ||
        g.id.toLowerCase().includes(query.toLowerCase())
      const matchesRsvp = rsvpFilter === 'All' || g.rsvp === rsvpFilter
      return matchesQuery && matchesRsvp
    })
  }, [query, rsvpFilter])

  function copyLink() {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="grain mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-gold">EVENT ORGANIZER</p>
          <h1 className="mt-3 font-display text-4xl text-bone md:text-5xl">Guest dashboard</h1>
          <p className="mt-4 max-w-md font-body text-sm text-bone-dim">
            Live view of every invite, RSVP, and check-in for Guest Suite Gala.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={copyLink}
            className="flex items-center gap-2 rounded-full border border-bronze-line px-5 py-2.5 font-body text-sm text-bone transition-colors hover:border-gold hover:text-gold"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Link copied' : 'Copy registration link'}
          </button>
          <button className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-ink transition-colors hover:bg-brass">
            <QrCode className="h-4 w-4" />
            Open scan mode
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-bronze-line/60 bg-charcoal p-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-bone-dim">
              {s.label.toUpperCase()}
            </p>
            <p className="mt-2 font-display text-3xl text-bone">{s.value}</p>
            <p className="mt-1 font-body text-xs text-gold">{s.delta}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bone-dim" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or invite code"
            className="w-full rounded-lg border border-bronze-line bg-charcoal py-2.5 pl-9 pr-4 font-body text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'Confirmed', 'Pending', 'Declined'].map((t) => (
            <button
              key={t}
              onClick={() => setRsvpFilter(t)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                rsvpFilter === t
                  ? 'border-gold bg-gold text-ink'
                  : 'border-bronze-line text-bone-dim hover:text-bone'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Guest table */}
      <div className="mt-8 overflow-x-auto rounded-xl border border-bronze-line/60">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="border-b border-bronze-line bg-charcoal text-left">
              {['Invite code', 'Name', 'Phone', 'RSVP', 'Invite', 'Table', 'Checked in'].map((h) => (
                <th key={h} className="px-5 py-3 font-mono text-[11px] tracking-[0.15em] text-bone-dim">
                  {h.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((g) => (
              <tr key={g.id} className="border-b border-bronze-line/40 last:border-0 hover:bg-charcoal/60">
                <td className="px-5 py-4 font-mono text-sm text-gold">{g.id}</td>
                <td className="px-5 py-4 font-body text-sm text-bone">{g.name}</td>
                <td className="px-5 py-4 font-mono text-sm text-bone-dim">{g.phone}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide ${rsvpStyles[g.rsvp]}`}
                  >
                    {g.rsvp.toUpperCase()}
                  </span>
                </td>
                <td className={`px-5 py-4 font-body text-sm ${inviteStyles[g.invite]}`}>{g.invite}</td>
                <td className="px-5 py-4 font-mono text-sm text-bone-dim">{g.table}</td>
                <td className="px-5 py-4 font-body text-sm">
                  {g.checkedIn ? (
                    <span className="text-gold">Yes</span>
                  ) : (
                    <span className="text-bone-dim">—</span>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-12 text-center font-body text-sm text-bone-dim">
                  No guests match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
