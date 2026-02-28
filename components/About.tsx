'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const credentials = [
  "Master's in Dietetics & Food Service Management",
  "10+ Years Weight Management Experience",
  "Clinical & Fitness Nutrition Expert",
  "NABH-Accredited Hospital Experience",
]

const achievements = [
  { value: '10+', label: 'Years of Experience' },
  { value: 'Hundreds', label: 'Lives Changed' },
  { value: '6+', label: 'Years Clinical & Fitness' },
]

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-surface dark:bg-night-surface relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 blob-1 bg-forest/5 dark:bg-forest/8 translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 blob-2 bg-gold/6 dark:bg-gold/6 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Photo placeholder */}
          <div className="reveal relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-gold/15 dark:from-forest/25 dark:to-gold/15 rounded-5xl translate-x-4 translate-y-4" />
              {/* Main image container */}
              <div className="relative rounded-5xl overflow-hidden bg-gradient-to-br from-surface to-white dark:from-night-card dark:to-night aspect-[4/5] flex items-center justify-center shadow-soft-lg border border-ink/5 dark:border-mist/5">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-forest/15 dark:bg-forest/20 blob-1 mx-auto mb-4 animate-float" />
                  <p className="text-ink/25 dark:text-mist/20 font-display text-sm italic">

                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 bg-forest text-white rounded-3xl px-6 py-4 shadow-soft-lg">
                <div className="font-display text-3xl font-semibold leading-none">10+</div>
                <div className="text-xs text-white/70 mt-1">Years of<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div>
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-night-card border border-ink/8 dark:border-mist/8 mb-6">
              <span className="text-xs font-semibold text-ink/50 dark:text-mist/50 tracking-widest uppercase">
                About Me
              </span>
            </div>

            <h2
              id="about-heading"
              className="reveal reveal-delay-1 font-display text-display-md font-light text-ink dark:text-mist mb-6"
            >
              Hi, I'm <em className="text-forest dark:text-forest-light">Gowthami sukumaran</em>
            </h2>

            <div className="reveal reveal-delay-2 space-y-4 text-ink/65 dark:text-mist/60 leading-relaxed text-sm md:text-base">
              <p>
                I'm a Nutritionist and Dietitian with over 10 years of experience in weight management and more than 6 years of professional experience across hospital and fitness settings.
              </p>
              <p>
                My foundation is rooted in clinical nutrition, having worked in a NABH-accredited multispecialty hospital, followed by extensive experience in the fitness and wellness industry. Over the years, I've guided hundreds of individuals through sustainable weight loss, body composition improvement, and healthier lifestyle habits — always focusing on what is practical, realistic, and long-lasting.
              </p>

              <h3 className="text-base font-semibold text-ink dark:text-mist mt-5 mb-1">My Journey</h3>
              <p>I hold a Master's degree in Dietetics and Food Service Management, with hands-on experience in hospital-based therapeutic nutrition, fitness and performance nutrition, women's wellness, and metabolic conditions. My career — from hospital wards to fitness studios and independent practice — helps me bridge clinical knowledge with everyday life.</p>

              <h3 className="text-base font-semibold text-ink dark:text-mist mt-5 mb-1">What I Do</h3>
              <p>I help clients use food as a tool to manage weight, improve metabolic health, build sustainable eating habits, and prevent lifestyle-related conditions. Every plan is personalised to your body, history, lifestyle, and goals. Nutrition should support your life — not complicate it.</p>

              <h3 className="text-base font-semibold text-ink dark:text-mist mt-5 mb-1">My Approach</h3>
              <p>I don't believe in extreme diets or temporary fixes. I focus on consistency over perfection, habits over restriction, and education over dependency — with regular follow-ups and genuine psychological support.</p>
            </div>

            {/* Credentials */}
            <ul className="reveal reveal-delay-3 grid grid-cols-1 gap-2.5 mt-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-ink/75 dark:text-mist/70">
                  <CheckCircle2 size={16} className="text-forest dark:text-forest-light flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="reveal reveal-delay-4 flex gap-8 mt-10 pt-8 border-t border-ink/8 dark:border-mist/8">
              {achievements.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl font-semibold text-forest dark:text-forest-light leading-none">
                    {value}
                  </div>
                  <div className="text-xs text-ink/50 dark:text-mist/50 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
