import QRCode from 'react-qr-code'

export default function EventPass({
  name = 'Guest Name',
  id = 'EV-0000',
  event = 'Lemhub Events',
  tier = 'Standard',
  className = '',
}) {
  return (
    <div
      className={`perforated relative w-full max-w-sm rounded-2xl border border-bronze-line bg-gradient-to-br from-charcoal to-ink p-6 shadow-[0_30px_60px_-15px_rgba(212,165,55,0.15)] ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-gold">EVENT PASS</p>
          <p className="mt-1 font-display text-xl text-bone leading-tight">{event}</p>
        </div>
        <span className="rounded-full border border-bronze-line px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-bone-dim">
          {tier.toUpperCase()}
        </span>
      </div>

      <div className="mt-6">
        <p className="font-mono text-[10px] tracking-[0.25em] text-bone-dim">GUEST</p>
        <p className="mt-1 font-display text-xl text-bone">{name}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-dashed border-bronze-line pt-5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] text-bone-dim">INVITE CODE</p>
          <p className="mt-1 font-mono text-sm text-gold">{id}</p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.25em] text-bone-dim">SCAN AT GATE</p>
        </div>
        <div className="rounded-lg bg-bone p-2">
          <QRCode value={id} size={72} bgColor="#f3efe4" fgColor="#0a0a08" />
        </div>
      </div>
    </div>
  )
}
