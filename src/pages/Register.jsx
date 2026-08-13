import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Copy, Link2 } from 'lucide-react'
import EventPass from '../components/EventPass'
import { packages } from '../data/packages'

export default function Register() {
  const [params] = useSearchParams()
  const preselect = params.get('package')

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    tier: packages.find((p) => p.name.toLowerCase() === preselect)?.name ?? packages[1].name,
    event: 'Guest Suite Gala',
    plusOnes: 0,
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [code] = useState(`EV-${Math.floor(1000 + Math.random() * 9000)}`)
  const [copied, setCopied] = useState(false)

  const registrationLink = 'guestsuite.app/r/gala-2026'

  useEffect(() => {
    if (preselect) {
      const match = packages.find((p) => p.name.toLowerCase() === preselect)
      if (match) setForm((f) => ({ ...f, tier: match.name }))
    }
  }, [preselect])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function copyLink() {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-28 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.5} />
        <h1 className="mt-6 font-display text-3xl text-bone">You're on the list</h1>
        <p className="mt-3 font-body text-sm text-bone-dim">
          A QR pass has been sent by SMS to {form.phone || 'your number'}. Show it at the gate.
        </p>
        <div className="mt-10">
          <EventPass name={form.name || 'Guest Name'} id={code} event={form.event} tier={form.tier} />
        </div>
      </div>
    )
  }

  return (
    <div className="grain mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs tracking-[0.3em] text-gold">GUEST REGISTRATION</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl text-bone md:text-5xl">
        Register for the event.
      </h1>
      <p className="mt-4 max-w-md font-body text-sm text-bone-dim">
        This is the same link your guests receive by SMS. Fill it in and your QR pass is issued
        instantly.
      </p>

      <div className="mt-6 flex max-w-md items-center justify-between gap-3 rounded-lg border border-bronze-line bg-charcoal px-4 py-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <Link2 className="h-4 w-4 shrink-0 text-gold" />
          <span className="truncate font-mono text-xs text-bone-dim">{registrationLink}</span>
        </div>
        <button
          onClick={copyLink}
          className="flex shrink-0 items-center gap-1 font-mono text-[11px] tracking-wide text-gold hover:text-brass"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Adaeze Nwosu"
                className={inputClass}
              />
            </Field>
            <Field label="Phone number">
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 803 555 0101"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Email (optional)">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
          </Field>

          <Field label="Package">
            <select name="tier" value={form.tier} onChange={handleChange} className={inputClass}>
              {packages.map((p) => (
                <option key={p.code} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Plus-ones">
            <input
              type="number"
              min={0}
              max={5}
              name="plusOnes"
              value={form.plusOnes}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <Field label="Notes for the organizer (optional)">
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Dietary restrictions, accessibility needs..."
              className={inputClass}
            />
          </Field>

          <button
            type="submit"
            className="w-full rounded-full bg-gold py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-brass sm:w-auto sm:px-10"
          >
            Confirm registration
          </button>
        </form>

        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-gold">LIVE PREVIEW</p>
          <div className="mt-4">
            <EventPass name={form.name || 'Guest Name'} id={code} event={form.event} tier={form.tier} />
          </div>
          <p className="mt-4 font-body text-xs text-bone-dim">
            This pass is generated the moment registration is confirmed and sent by SMS to the
            phone number above.
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-[0.2em] text-bone-dim">
        {label.toUpperCase()}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

const inputClass =
  'w-full rounded-lg border border-bronze-line bg-charcoal px-4 py-3 font-body text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none'
