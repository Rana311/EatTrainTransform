'use client'

import { useEffect, useRef } from 'react'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'FUEL',
    period: 'Duration: 3 Months',
    tagline: 'Structured & Practical',
    features: [
      'Initial assessment & goal discussion',
      'Personalized diet plan based on lifestyle',
      'Monthly review sessions',
      'Basic lifestyle & routine guidance',
      'Supplement suggestions (if required)',
      'WhatsApp support for basic queries',
    ],
    cta: 'Get FUEL Plan',
    popular: false,
    color: 'bg-white dark:bg-night-card',
    border: 'border-ink/8 dark:border-mist/8',
  },
  {
    name: 'STABILIZE',
    period: 'Duration: 3 Months',
    tagline: 'Most Chosen',
    features: [
      'Detailed first consultation & assessment',
      'Personalized nutrition & lifestyle plan',
      'Monthly structured reviews & weekly tracking',
      'Body composition guidance',
      'Blood report review & recommendations',
      'Supplement guidance (if required)',
      'Habit-building & mindset support',
      'Travel-friendly & routine-adjusted strategies',
      'Recipe & meal-planning guidance',
      'WhatsApp support for follow-ups',
    ],
    cta: 'Choose Stabilize',
    popular: true,
    color: 'bg-forest dark:bg-forest',
    border: 'border-transparent',
  },
  {
    name: 'THRIVE',
    period: 'Duration: 3 Months',
    tagline: 'For deep, lasting change',
    features: [
      'In-depth initial consultation',
      'Complete lifestyle, food & mindset assessment',
      'Fully personalized nutrition & wellness plan',
      'Flexible review sessions based on needs',
      'Detailed blood work analysis & guidance',
      'Advanced lifestyle recommendations',
      'Strong behavioral coaching & mindset shifts',
      'Continuous accountability & close follow-up',
      'Travel-friendly, real-life solutions',
    ],
    cta: 'Start Thriving',
    popular: false,
    color: 'bg-white dark:bg-night-card',
    border: 'border-ink/8 dark:border-mist/8',
  },
]

export default function Pricing() {
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
      id="pricing"
      ref={sectionRef}
      className="py-24 lg:py-32 relative"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface dark:bg-night-card border border-ink/8 dark:border-mist/8 mb-6">
            <span className="text-xs font-semibold text-ink/50 dark:text-mist/50 tracking-widest uppercase">
              Plans
            </span>
          </div>
          <h2 id="pricing-heading" className="reveal reveal-delay-1 font-display text-display-lg font-light text-ink dark:text-mist">
            Simple, Transparent{' '}
            <em className="text-forest dark:text-forest-light">Pricing</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink/55 dark:text-mist/55 max-w-lg mx-auto">
            No hidden fees, no long contracts. Cancel any time. Start with what fits your life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-4xl border ${plan.color} ${plan.border} p-8 transition-all duration-400 ${plan.popular
                ? 'shadow-soft-lg scale-105 z-10'
                : 'hover:shadow-soft hover:-translate-y-1'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold text-white text-xs font-bold rounded-full shadow-soft">
                    <Zap size={11} className="fill-white" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <h3 className={`font-sans text-sm font-bold tracking-widest uppercase mb-3 ${plan.popular ? 'text-white/70' : 'text-ink/50 dark:text-mist/50'}`}>
                  {plan.name}
                </h3>
                <div className={`flex items-end gap-1 ${plan.popular ? 'text-white' : 'text-ink dark:text-mist'}`}>
                  <span className="font-display text-2xl font-semibold leading-none">{plan.period}</span>
                </div>
                <p className={`text-sm mt-3 ${plan.popular ? 'text-white/80' : 'text-ink/60 dark:text-mist/60'}`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Divider */}
              <div className={`w-full h-px mb-6 ${plan.popular ? 'bg-white/15' : 'bg-ink/6 dark:bg-mist/6'}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white/80' : 'text-forest dark:text-forest-light'}`}
                    />
                    <span className={`text-sm leading-snug ${plan.popular ? 'text-white/80' : 'text-ink/65 dark:text-mist/65'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-8 flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${plan.popular
                  ? 'bg-white text-forest hover:bg-mist shadow-soft'
                  : 'bg-forest text-white hover:bg-forest-dark shadow-soft hover:shadow-soft-lg'
                  }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <p className="reveal text-center mt-8 text-sm text-ink/40 dark:text-mist/40">
          All plans include a free 15-minute discovery call. No commitment required.
        </p>
      </div>
    </section>
  )
}
