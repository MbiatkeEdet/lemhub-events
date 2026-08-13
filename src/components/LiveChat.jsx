import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const cannedReplies = [
  'Hi there! I’m here for your event questions — what can I help you with today?',
  'Our concierge can assist with booking, QR access, or guest registration details.',
  'If you need help with a guest list or package selection, just type your question below.',
  'I’m here 24/7 to support your event setup and check-in process.',
]

export default function LiveChat({ open: controlledOpen, onChangeOpen }) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'agent',
      text: 'Hi there! Live chat is ready. Send a message and our guest support desk will reply shortly.',
    },
  ])
  const scrollRef = useRef(null)

  useEffect(() => {
    if (typeof controlledOpen === 'boolean') {
      setOpen(controlledOpen)
    }
  }, [controlledOpen])

  const setOpenState = (value) => {
    if (typeof onChangeOpen === 'function') {
      onChangeOpen(value)
    }
    setOpen(value)
  }

  useEffect(() => {
    if (!open || !scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [open, messages])

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (!lastMessage || lastMessage.role !== 'user') return

    const timer = setTimeout(() => {
      const reply = cannedReplies[Math.floor(Math.random() * cannedReplies.length)]
      setMessages((current) => [
        ...current,
        {
          id: current.length + 1,
          role: 'agent',
          text: reply,
        },
      ])
    }, 900)

    return () => clearTimeout(timer)
  }, [messages])

  const handleSend = (event) => {
    event.preventDefault()
    const trimmed = draft.trim()
    if (!trimmed) return

    setMessages((current) => [
      ...current,
      {
        id: current.length + 1,
        role: 'user',
        text: trimmed,
      },
    ])
    setDraft('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 text-left">
      {open ? (
        <div className="w-[340px] overflow-hidden rounded-3xl border border-bronze-line/60 bg-charcoal shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between bg-ink px-4 py-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-gold">LIVE CHAT</p>
              <p className="mt-1 font-display text-sm text-bone">Guest support</p>
            </div>
            <button
              type="button"
              onClick={() => setOpenState(false)}
              className="rounded-full p-2 text-bone-dim transition hover:bg-white/5 hover:text-bone"
              aria-label="Close live chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    message.role === 'user'
                      ? 'bg-gold text-ink'
                      : 'bg-surface text-bone'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t border-bronze-line/60 px-4 py-3">
            <div className="flex items-center gap-3">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type a message..."
                className="min-w-0 flex-1 rounded-full border border-bronze-line bg-ink px-4 py-3 text-sm text-bone placeholder:text-bone-dim/70 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink transition hover:bg-brass"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 font-semibold text-ink shadow-2xl shadow-black/20 transition hover:bg-brass"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Live chat</span>
        </button>
      )}
    </div>
  )
}
