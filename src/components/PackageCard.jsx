import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const accentMap = {
  bone: { text: 'text-bone', bg: 'bg-bone', ring: 'ring-bone/20' },
  gold: { text: 'text-gold', bg: 'bg-gold', ring: 'ring-gold/30' },
  brass: { text: 'text-brass', bg: 'bg-brass', ring: 'ring-brass/30' },
}

export default function PackageCard({ pkg }) {
  const accent = accentMap[pkg.accent] ?? accentMap.gold

  return (
    <div
      className={`perforated relative flex flex-col rounded-2xl border bg-charcoal p-8 ${
        pkg.featured
          ? 'border-gold shadow-[0_25px_60px_-20px_rgba(212,165,55,0.35)] md:-translate-y-3'
          : 'border-bronze-line'
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-mono text-[10px] tracking-[0.2em] text-ink">
          MOST BOOKED
        </span>
      )}

      <p className="font-mono text-[11px] tracking-[0.3em] text-bone-dim">{pkg.code}</p>
      <h3 className="mt-2 font-display text-3xl text-bone">{pkg.name}</h3>
      <p className="mt-2 font-body text-sm text-bone-dim">{pkg.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className={`font-display text-4xl ${accent.text}`}>{'\u20A6' + pkg.price.toLocaleString()}</span>
        <span className="font-body text-sm text-bone-dim">{pkg.period}</span>
      </div>

      <div className="my-6 dotted-tear" />

      <ul className="flex-1 space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 font-body text-sm text-bone-dim">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`} strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/register?package=${pkg.name.toLowerCase()}`}
        className={`mt-8 rounded-full py-3 text-center font-body text-sm font-semibold transition-colors ${
          pkg.featured
            ? 'bg-gold text-ink hover:bg-brass'
            : 'border border-bronze-line text-bone hover:border-gold hover:text-gold'
        }`}
      >
        Select {pkg.name}
      </Link>
    </div>
  )
}
