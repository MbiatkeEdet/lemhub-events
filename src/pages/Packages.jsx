import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'
import { Check, Minus } from 'lucide-react'

const compareRows = [
  { label: 'SMS invites', values: [true, true, true] },
  { label: 'Branded registration link', values: [true, true, true] },
  { label: 'QR check-in', values: [true, true, true] },
  { label: 'Custom page branding', values: [false, true, true] },
  { label: 'Table / seat assignment', values: [false, true, true] },
  { label: 'Custom domain', values: [false, false, true] },
  { label: 'Multi-gate check-in', values: [false, false, true] },
  { label: 'Dedicated success manager', values: [false, false, true] },
]

export default function Packages() {
  return (
    <div className="grain">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 text-center md:pt-24">
        <p className="font-mono text-xs tracking-[0.3em] text-gold">PACKAGES</p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl text-bone md:text-5xl">
          Choose the tier your guest list deserves.
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-body text-sm text-bone-dim">
          Every tier includes SMS invites, a branded registration link, and QR check-in. Higher
          tiers widen your guest cap, SMS credits, and how deep the dashboard goes.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.code} pkg={p} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-bronze-line/60 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="font-mono text-xs tracking-[0.3em] text-gold">SIDE BY SIDE</p>
          <h2 className="mt-3 font-display text-3xl text-bone md:text-4xl">Full comparison</h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="border-b border-bronze-line text-left">
                  <th className="py-4 font-body text-sm font-medium text-bone-dim">Benefit</th>
                  {packages.map((p) => (
                    <th key={p.code} className="py-4 text-center font-display text-base text-bone">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-bronze-line/50">
                    <td className="py-4 font-body text-sm text-bone-dim">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="py-4 text-center">
                        {v ? (
                          <Check className="mx-auto h-4 w-4 text-gold" strokeWidth={2.5} />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-bone-dim/40" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ-ish note */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.3em] text-gold">GOOD TO KNOW</p>
        <div className="mt-6 space-y-6">
          <div className="border-t border-dashed border-bronze-line pt-6">
            <h3 className="font-display text-lg text-bone">Can I upgrade mid-event?</h3>
            <p className="mt-2 font-body text-sm text-bone-dim">
              Yes — raise your guest cap or add SMS credits any time before the event starts.
              Downgrades take effect on your next event.
            </p>
          </div>
          <div className="border-t border-dashed border-bronze-line pt-6">
            <h3 className="font-display text-lg text-bone">How do unused SMS credits work?</h3>
            <p className="mt-2 font-body text-sm text-bone-dim">
              Credits are per event and don't roll over. Premium plans can pool credits across
              multiple events on request.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
