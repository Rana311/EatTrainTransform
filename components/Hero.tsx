'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: 'Hundreds', label: 'Clients Transformed' },
  { icon: Award, value: '10+ yrs', label: 'Weight Management' },
  { icon: Star, value: '6+ yrs', label: 'Clinical & Fitness' },
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.hero-reveal')
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0')
        el.classList.remove('opacity-0', 'translate-y-8')
      }, 150 + i * 120)
    })
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 blob-1 bg-forest/8 dark:bg-forest/12 animate-float translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 blob-2 bg-gold/10 dark:bg-gold/8 animate-float-delayed -translate-x-1/4" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 blob-3 bg-forest/5 animate-float" style={{ animationDelay: '2s' }} />
        {/* Decorative circles */}
        <div className="absolute top-32 right-1/4 w-2 h-2 rounded-full bg-gold/60 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 rounded-full bg-forest/60 animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-gold/40 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="relative z-10">
            {/* Badge */}


            {/* Headline */}
            <h1 className="hero-reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="block font-display text-display-lg lg:text-display-xl font-light italic text-ink dark:text-mist leading-none mb-2 whitespace-nowrap">
                Transform Your Body
              </span>
              <span className="block font-display text-display-lg lg:text-display-xl font-semibold text-forest dark:text-forest-light leading-none whitespace-nowrap">
                Elevate Your Life
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 text-lg text-ink/60 dark:text-mist/60 font-light leading-relaxed max-w-md">
              Personalised nutrition plans and dietitian expertise, built around your body, your food culture, and your goals - by <em>Gowthami Sukumaran</em>.
            </p>

            {/* CTA Row */}
            <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
              >
                Start Your Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink/15 dark:border-mist/15 text-ink dark:text-mist font-semibold rounded-full hover:border-forest dark:hover:border-forest-light hover:text-forest dark:hover:text-forest-light transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 flex gap-8 mt-12 pt-8 border-t border-ink/8 dark:border-mist/8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-forest/10 dark:bg-forest/15 flex items-center justify-center">
                    <Icon size={16} className="text-forest dark:text-forest-light" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-ink dark:text-mist font-sans leading-none">{value}</div>
                    <div className="text-xs text-ink/50 dark:text-mist/50 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="hero-reveal opacity-0 translate-y-8 transition-all duration-700 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image frame */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem]">
                {/* Decorative border frame */}
                <div className="absolute -top-3 -left-3 w-full h-full rounded-5xl border-2 border-forest/20 dark:border-forest/25" />
                <div className="relative w-full h-full rounded-5xl overflow-hidden shadow-soft-lg">
                  <img src="/Hero.jpeg" alt="Hero" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-12 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-white dark:bg-night-card shadow-card dark:shadow-card-dark rounded-2xl px-4 py-3 flex items-center gap-2.5 border border-ink/5 dark:border-mist/5">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold text-sm">🥗</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink dark:text-mist">Nutrition Plan</div>
                    <div className="text-xs text-ink/50 dark:text-mist/50">100% personalized</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 animate-float-delayed">
                <div className="bg-white dark:bg-night-card shadow-card dark:shadow-card-dark rounded-2xl px-4 py-3 border border-ink/5 dark:border-mist/5">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-ink dark:text-mist">"Lost 14 kg in 4 months"</div>
                  <div className="text-xs text-ink/50 dark:text-mist/50 mt-0.5">— Sneha R., Bengaluru</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
