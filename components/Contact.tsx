'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className} fill="#25D366">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 417.4c-33 0-65.4-8.8-94-25.5l-6.7-4-69.8 18.3L72 338.4l-4.4-7c-18.4-29.4-28-63.4-28-98.1 0-101.9 83-184.9 184.9-184.9 49.3 0 95.7 19.3 130.6 54.2 34.8 34.9 54 81.3 54 130.8 0 102-83 184-185.3 184zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.6-4.5 2.6-4.2 8-15 2.7-5.5 1.4-10.3-.1-13-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#fd5" />
        <stop offset="50%" stopColor="#ff543e" />
        <stop offset="100%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    goal: '',
    preferredTime: '',
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest/5 dark:bg-forest-light/5 border border-forest/20 dark:border-forest-light/20 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-forest-light" />
            <span className="text-sm font-bold text-forest dark:text-forest-light tracking-widest uppercase pt-0.5">
              Contact Me
            </span>
          </div>
          <h2 id="contact-heading" className="reveal reveal-delay-1 font-display text-display-xl font-light text-ink dark:text-mist">
            Ready to Start Your{' '}
            <em className="text-blue dark:text-blue-light">Transformation?</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink/55 dark:text-mist/55 max-w-lg mx-auto">
            Fill out the form and I'll reach out on WhatsApp within 24 hours to schedule your free discovery call.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
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
                    <EmailIcon className="w-[18px] h-[18px] text-forest dark:text-forest-light" />
                  </div>
                  gowthami@eattraintransform.in
                </a>

                <a
                  href="https://wa.me/919487320963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink/65 dark:text-mist/60 hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                  </div>
                  WhatsApp
                </a>

                <a
                  href="https://www.instagram.com/gowthamithileeban?igsh=bHZhajdldDBmY2ky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink/65 dark:text-mist/60 hover:text-[#c837ab] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#c837ab]/10 flex items-center justify-center group-hover:bg-[#c837ab]/20 transition-colors">
                    <InstagramIcon className="w-[18px] h-[18px]" />
                  </div>
                  @gowthamithileeban
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="bg-white dark:bg-night-card rounded-4xl p-5 sm:p-6 md:p-8 border border-ink/6 dark:border-mist/5 shadow-card dark:shadow-card-dark">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest/15 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-forest dark:text-forest-light" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink dark:text-mist mb-2">
                    Message Received!
                  </h3>
                  <p className="text-ink/55 dark:text-mist/55 text-sm">
                    I'll reach out on WhatsApp within 24 hours. Looking forward to chatting!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Phone side by side */}
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
                      <label htmlFor="phone" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email + Age */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="priya@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="age" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        Age
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="10"
                        max="100"
                        placeholder="e.g. 28"
                        value={formState.age}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Goal + Preferred Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="goal" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        What's Your Main Goal?
                      </label>
                      <input
                        id="goal"
                        name="goal"
                        type="text"
                        placeholder="e.g. Lose 8 kg, Manage PCOS..."
                        value={formState.goal}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="preferredTime" className="block text-xs font-semibold text-ink/50 dark:text-mist/50 mb-1.5 tracking-wide">
                        Best Time to Reach You
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formState.preferredTime}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Any time</option>
                        <option value="Morning">Morning (8am – 12pm)</option>
                        <option value="Afternoon">Afternoon (12pm – 5pm)</option>
                        <option value="Evening">Evening (5pm – 9pm)</option>
                      </select>
                    </div>
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