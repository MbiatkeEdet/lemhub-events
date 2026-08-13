import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className="grain mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs tracking-[0.3em] text-gold">CONCIERGE</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl text-bone md:text-5xl">
        Speak to someone directly.
      </h1>
      <p className="mt-4 max-w-md font-body text-sm text-bone-dim">
        For plan questions, SMS or QR issues, or anything the site can't answer — reach the
        desk below.
      </p>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <ContactRow icon={Phone} label="Front desk" value="+234 803 555 0117" />
          <ContactRow icon={Mail} label="Email" value="support@eledimevents.com" />
          <ContactRow icon={MapPin} label="Address" value="NTA Road Mgbougba, Port Harcourt" />

          <div className="border-t border-dashed border-bronze-line pt-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-gold">RESPONSE TIME</p>
            <p className="mt-2 font-body text-sm text-bone-dim">
              Sovereign guests: under 5 minutes, any hour.
              <br />
              All other inquiries: within 2 hours, 7am–11pm.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-bronze-line/60 bg-charcoal p-8">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-gold" strokeWidth={1.5} />
              <p className="mt-4 font-display text-xl text-bone">Message sent</p>
              <p className="mt-2 font-body text-sm text-bone-dim">
                Someone from the desk will follow up shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  required
                  placeholder="Name"
                  className="rounded-lg border border-bronze-line bg-ink px-4 py-3 font-body text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border border-bronze-line bg-ink px-4 py-3 font-body text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none"
                />
              </div>
              <input
                placeholder="Guest ID (if applicable)"
                className="w-full rounded-lg border border-bronze-line bg-ink px-4 py-3 font-body text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none"
              />
              <textarea
                required
                rows={5}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-bronze-line bg-ink px-4 py-3 font-body text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gold py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-brass sm:w-auto sm:px-10"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-lg border border-bronze-line/60 p-2.5">
        <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-bone-dim">{label.toUpperCase()}</p>
        <p className="mt-1 font-body text-sm text-bone">{value}</p>
      </div>
    </div>
  )
}
