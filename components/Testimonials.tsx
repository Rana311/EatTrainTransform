'use client'

import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sneha Ramakrishnan',
    role: 'Software Engineer, Bengaluru',
    result: 'Lost 14 kg in 4 months',
    quote:
      "I'd tried so many diets before. Gowthami ma'am was the first person who actually understood my lifestyle, my South Indian food habits, and built something I could genuinely stick to. I didn't feel deprived - I felt energetic!",
    rating: 5,
    initials: 'SR',
    color: 'bg-forest/15 dark:bg-forest/20',
  },
  {
    name: 'Arjun Nair',
    role: 'IT Professional, Kochi',
    result: 'Reversed pre-diabetes',
    quote:
      'As someone with a desk job and erratic eating hours, I was losing hope. The plan she designed was so practical - no fancy ingredients, no gym required. My HbA1c came down in just 3 months.',
    rating: 5,
    initials: 'AN',
    color: 'bg-gold/15 dark:bg-gold/12',
  },
  {
    name: 'Meera Subramaniam',
    role: 'Teacher, Chennai',
    result: 'PCOS managed naturally',
    quote:
      'After my second delivery I was struggling with weight and hormonal issues. Gowthami didi addressed my PCOS, sleep, and nutrition together. I feel like myself again - maybe even better than before!',
    rating: 5,
    initials: 'MS',
    color: 'bg-forest/10 dark:bg-forest/15',
  },
  {
    name: 'Divya Krishnamurthy',
    role: 'Homemaker, Hyderabad',
    result: 'Lost 10 kg post-pregnancy',
    quote:
      'I was skeptical about online coaching, but the personalised attention I received was incredible. She understood that I eat traditional Telugu food and never asked me to give it up. The results were amazing!',
    rating: 5,
    initials: 'DK',
    color: 'bg-gold/10 dark:bg-gold/10',
  },
  {
    name: 'Rahul Menon',
    role: 'Entrepreneur, Thrissur',
    result: 'Down 2 trouser sizes',
    quote:
      'I travel a lot for work and thought I could never follow a diet. The travel-friendly plan she made was a game changer. No complicated rules - just smarter choices wherever I am.',
    rating: 5,
    initials: 'RM',
    color: 'bg-forest/8 dark:bg-forest/12',
  },
  {
    name: 'Lakshmi Venkatesh',
    role: 'Bank Manager, Coimbatore',
    result: 'Thyroid & weight under control',
    quote:
      "Managing thyroid and weight together felt impossible. Gowthami ma'am's approach was patient, evidence-based, and genuinely caring. Best investment I've made in my health - I only wish I had started sooner.",
    rating: 5,
    initials: 'LV',
    color: 'bg-gold/12 dark:bg-gold/10',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-surface dark:bg-night-surface relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 blob-1 bg-forest/4 dark:bg-forest/6 -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 blob-2 bg-gold/5 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-night-card border border-ink/8 dark:border-mist/8 mb-6">
            <span className="text-xs font-semibold text-ink/50 dark:text-mist/50 tracking-widest uppercase">
              Success Stories
            </span>
          </div>
          <h2 id="testimonials-heading" className="reveal reveal-delay-1 font-display text-display-lg font-light text-ink dark:text-mist">
            Real People.{' '}
            <em className="text-forest dark:text-forest-light">Real Results.</em>
          </h2>
          <div className="reveal reveal-delay-2 flex items-center justify-center gap-1.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" />
            ))}
            <span className="ml-2 text-sm text-ink/50 dark:text-mist/50">4.9 average from 200+ reviews</span>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`reveal reveal-delay-${(i % 4) + 1} break-inside-avoid group bg-white dark:bg-night-card rounded-4xl p-6 border border-ink/5 dark:border-mist/5 hover:border-forest/20 dark:hover:border-forest/20 transition-all duration-400 hover:shadow-soft`}
            >
              {/* Quote icon */}
              <Quote size={20} className="text-forest/20 dark:text-forest/25 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Result badge */}
              <span className={`inline-block px-3 py-1 ${t.color} text-forest dark:text-forest-light text-xs font-semibold rounded-full mb-3`}>
                {t.result}
              </span>

              {/* Quote */}
              <blockquote className="text-ink/70 dark:text-mist/65 text-sm leading-relaxed mb-5 font-light italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center`}>
                  <span className="text-forest dark:text-forest-light text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink dark:text-mist">{t.name}</div>
                  <div className="text-xs text-ink/45 dark:text-mist/45">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
