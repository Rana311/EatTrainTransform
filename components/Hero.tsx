'use client'

import { ArrowRight, Star, Users, Award } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Users, value: 'Hundreds', label: 'Clients Transformed' },
  { icon: Award, value: '10+ yrs', label: 'Weight Management' },
  { icon: Star, value: '6+ yrs', label: 'Clinical & Fitness' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center pt-20 pb-12 lg:min-h-screen lg:pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 blob-1 bg-forest/8 dark:bg-forest/12 animate-float translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-60 h-60 blob-2 bg-gold/10 dark:bg-gold/8 animate-float-delayed -translate-x-1/4" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 blob-3 bg-forest/5 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-32 right-1/4 w-2 h-2 rounded-full bg-gold/60 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 rounded-full bg-forest/60 animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-gold/40 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Image — shown FIRST on mobile, second on desktop */}
          <div className="hero-reveal order-first lg:order-last relative flex justify-center lg:justify-end" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              {/* Main image frame */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
                <div className="absolute -top-3 -left-3 w-full h-full rounded-5xl border-2 border-forest/20 dark:border-forest/25" />
                <div className="relative w-full h-full rounded-5xl overflow-hidden shadow-soft-lg">
                  <Image
                    src="/gowthami_hero_updated.jpeg"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <div className="hidden sm:block absolute -left-1 sm:-left-8 -top-20 sm:top-12 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-white dark:bg-night-card shadow-card dark:shadow-card-dark rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-3 flex items-center gap-1.5 sm:gap-2.5 border border-ink/5 dark:border-mist/5">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs sm:text-sm">🥗</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-xs font-bold text-ink dark:text-mist truncate">Nutrition Plan</div>
                    <div className="text-xs text-ink/50 dark:text-mist/50 truncate">100% personalized</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -right-1 sm:-right-6 bottom-36 sm:bottom-16 animate-float-delayed">
                <div className="bg-white dark:bg-night-card shadow-card dark:shadow-card-dark rounded-xl sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-3 border border-ink/5 dark:border-mist/5">
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5 sm:mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={7} className="fill-gold text-gold sm:size-auto" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-xs font-bold text-ink dark:text-mist line-clamp-1 sm:line-clamp-none">"Lost 10 kg post-pregnancy"</div>
                  <div className="text-xs text-ink/50 dark:text-mist/50 mt-0.5 line-clamp-1 sm:line-clamp-none">— Divya K., Hyderabad</div>
                </div>
              </div>
            </div>
          </div>

          {/* Left — Content */}
          <div className="relative z-10 order-last lg:order-first">
            {/* Headline */}
            <h1 className="hero-reveal" style={{ animationDelay: '0ms' }}>
              <span className="block font-display text-4xl sm:text-5xl md:text-display-lg lg:text-display-xl font-light italic text-ink dark:text-mist leading-none mb-2">
                Transform Your Body
              </span>
              <span className="block font-display text-4xl sm:text-5xl md:text-display-lg lg:text-display-xl font-semibold text-forest dark:text-forest-light leading-none">
                Elevate Your Life
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-reveal mt-6 text-base sm:text-lg text-ink/60 dark:text-mist/60 font-light leading-relaxed max-w-md" style={{ animationDelay: '150ms' }}>
              Personalised nutrition plans and dietitian expertise, built around your body, your food culture, and your goals - by <em>Gowthami Sukumaran</em>.
            </p>

            {/* CTA Row */}
            <div className="hero-reveal flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8" style={{ animationDelay: '250ms' }}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Start Your Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-ink/15 dark:border-mist/15 text-ink dark:text-mist font-semibold rounded-full hover:border-forest dark:hover:border-forest-light hover:text-forest dark:hover:text-forest-light transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="hero-reveal flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 pt-6 border-t border-ink/8 dark:border-mist/8" style={{ animationDelay: '350ms' }}>
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

        </div>
      </div>
    </section>
  )
}
