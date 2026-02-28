'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { Mail, MessageCircle, Instagram, Send, CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'

const services = [
  'FUEL – Structured & Practical',
  'STABILIZE – Most Chosen',
  'THRIVE – Deep, Lasting Change',
  'Not Sure Yet',
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    goal: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with your actual API endpoint (Formspree, Resend, etc.)
    await new Promise((res) => setTimeout(res, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = clsx(
    'w-full px-4 py-3 rounded-2xl border text-sm font-light',
    'bg-white dark:bg-night-card',
    'border-ink/10 dark:border-mist/10',
    'text-ink dark:text-mist placeholder:text-ink/35 dark:placeholder:text-mist/35',
    'focus:outline-none focus:ring-2 focus:ring-forest/30 dark:focus:ring-forest/40 focus:border-forest/40',
    'transition-all duration-200'
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 blob-3 bg-forest/5 dark:bg-forest/8 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface dark:bg-night-card border border-ink/8 dark:border-mist/8 mb-6">
            <span className="text-xs font-semibold text-ink/50 dark:text-mist/50 tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          <h2 id="contact-heading" className="reveal reveal-delay-1 font-display text-display-lg font-light text-ink dark:text-mist">
            Ready to Start Your{' '}
            <em className="text-forest dark:text-forest-light">Transformation?</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink/55 dark:text-mist/55 max-w-lg mx-auto">
            Fill out the form below and I'll personally reach out within 24 hours to schedule your free discovery call.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Info */}
          <div className="lg:col-span-2 reveal">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink dark:text-mist mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free 15-minute discovery call',
                    'No-pressure conversation about your goals',
                    'Honest assessment of what will work for you',
                    'Program overview & pricing walkthrough',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/65 dark:text-mist/60">
                      <CheckCircle2 size={15} className="text-forest dark:text-forest-light flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-ink/8 dark:border-mist/8 space-y-4">
                <h3 className="font-display text-xl font-semibold text-ink dark:text-mist">
                  Reach Out Directly
                </h3>

                <a
                  href="mailto:gowthami@eattraintransform.in"
                  className="flex items-center gap-3 text-sm text-ink/65 dark:text-mist/60 hover:text-forest dark:hover:text-forest-light transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-forest/10 dark:bg-forest/15 flex items-center justify-center group-hover:bg-forest/15 transition-colors">
                    <Mail size={15} className="text-forest dark:text-forest-light" />
                  </div>
                  gowthami@eattraintransform.in
                </a>

                <a
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink/65 dark:text-mist/60 hover:text-forest dark:hover:text-forest-light transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-forest/10 dark:bg-forest/15 flex items-center justify-center group-hover:bg-forest/15 transition-colors">
                    <MessageCircle size={15} className="text-forest dark:text-forest-light" />
                  </div>
                  WhatsApp
                </a>

                <a
                  href="https://instagram.com/eattraintransform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink/65 dark:text-mist/60 hover:text-forest dark:hover:text-forest-light transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-forest/10 dark:bg-forest/15 flex items-center justify-center group-hover:bg-forest/15 transition-colors">
                    <Instagram size={15} className="text-forest dark:text-forest-light" />
                  </div>
                  @eattraintransform
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="bg-white dark:bg-night-card rounded-4xl p-8 border border-ink/6 dark:border-mist/5 shadow-card dark:shadow-card-dark">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest/15 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-forest dark:text-forest-light" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink dark:text-mist mb-2">
                    Message Received!
                  </h3>
                  <p className="text-ink/55 dark:text-mist/55 text-sm">
                    I'll personally reach out within 24 hours. Looking forward to chatting!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="name" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Priya Sharma"
                        value={formState.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="priya@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                      Your Main Goal
                    </label>
                    <input
                      id="goal"
                      name="goal"
                      type="text"
                      placeholder="e.g. Lose 8 kg, Manage PCOS, Control sugar levels..."
                      value={formState.goal}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                      Anything Else?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me a bit about yourself, your current situation, and what you're hoping to achieve..."
                      value={formState.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-forest text-white font-semibold rounded-2xl hover:bg-forest-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-ink/35 dark:text-mist/35 text-center">
                    By submitting, you agree to be contacted about coaching services. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
