'use client'

import { useEffect, useRef } from 'react'
import { Salad, Dumbbell, Globe, HeartPulse } from 'lucide-react'

const services = [
  {
    icon: Salad,
    title: 'Personalised Nutrition Plans',
    description:
      'Custom diet plans built around your lifestyle, food preferences, and health goals - including Indian cuisine, regional foods, and traditional eating patterns.',
    highlights: ['Blood report review', 'Indian meal planning', 'Weekly plan updates', 'Supplement guidance'],
    color: 'from-forest/10 to-forest/5',
    iconBg: 'bg-forest/15 dark:bg-forest/20',
    iconColor: 'text-forest dark:text-forest-light',
  },
  {
    icon: HeartPulse,
    title: 'Weight Management',
    description:
      'Sustainable, science-backed weight loss and body composition support - no crash diets, no extreme restrictions. Just practical, lasting results.',
    highlights: ['Body composition tracking', 'Metabolic health focus', 'Lifestyle-based approach', 'Long-term habit building'],
    color: 'from-gold/10 to-gold/5',
    iconBg: 'bg-gold/15 dark:bg-gold/15',
    iconColor: 'text-gold-dark dark:text-gold',
  },
  {
    icon: Globe,
    title: 'Clinical & Therapeutic Nutrition',
    description:
      'Hospital-grade nutrition expertise for managing lifestyle-related conditions including diabetes, PCOS, thyroid disorders, and digestive issues.',
    highlights: ['NABH-backed protocols', 'Condition-specific plans', 'Blood work analysis', 'Medical nutrition therapy'],
    color: 'from-forest/8 to-gold/8',
    iconBg: 'bg-forest/10 dark:bg-forest/15',
    iconColor: 'text-forest dark:text-forest-light',
  },
  {
    icon: Dumbbell,
    title: "Women's Wellness",
    description:
      'Specialised nutrition support for women across all life stages - hormonal health, post-pregnancy recovery, PCOS, and overall well-being.',
    highlights: ['Hormone-friendly nutrition', 'Post-pregnancy care', 'PCOS & thyroid support', 'Energy & mood balance'],
    color: 'from-gold/8 to-forest/8',
    iconBg: 'bg-gold/12 dark:bg-gold/12',
    iconColor: 'text-gold-dark dark:text-gold-light',
  },
]

export default function Services() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest/5 dark:bg-forest-light/5 border border-forest/20 dark:border-forest-light/20 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-forest-light" />
            <span className="text-sm font-bold text-forest dark:text-forest-light tracking-widest uppercase pt-0.5">
              What I Offer
            </span>
          </div>
          <h2 id="services-heading" className="reveal reveal-delay-1 font-display text-display-xl font-light text-ink dark:text-mist">
            Services Designed for{' '}
            <em className="text-blue dark:text-blue-light">Real Results</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink/55 dark:text-mist/55 max-w-xl mx-auto leading-relaxed">
            No cookie-cutter programs. Every service is tailored to you - your body, your schedule, your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`reveal reveal-delay-${i + 1} group relative p-5 sm:p-6 md:p-8 rounded-4xl bg-white dark:bg-night-card border border-ink/6 dark:border-mist/5 hover:border-forest/30 dark:hover:border-forest/30 transition-all duration-400 hover:shadow-soft-lg hover:-translate-y-1 overflow-hidden`}
              >
                {/* BG gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={service.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-semibold text-ink dark:text-mist mb-3 group-hover:text-forest dark:group-hover:text-forest-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ink/60 dark:text-mist/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid grid-cols-2 gap-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-ink/70 dark:text-mist/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-forest-light flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-forest dark:text-forest-light group-hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
