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

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Left — Photo placeholder */}
          <div className="reveal relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-gold/15 dark:from-forest/25 dark:to-gold/15 rounded-5xl translate-x-4 translate-y-4" />
              <div className="relative rounded-5xl overflow-hidden shadow-soft-lg aspect-[4/5]">
                <img src="/Professional.jpeg" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-forest text-white rounded-3xl px-4 sm:px-6 py-3 sm:py-4 shadow-soft-lg">
                <div className="font-display text-3xl font-semibold leading-none">10+</div>
                <div className="text-xs text-white/70 mt-1">Years of<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div>
            <div className="reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest/5 dark:bg-forest-light/5 border border-forest/20 dark:border-forest-light/20 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-forest-light" />
            <span className="text-sm font-bold text-forest dark:text-forest-light tracking-widest uppercase pt-0.5">
              About Me
            </span>
          </div>

            <h2
              id="about-heading"
              className="reveal reveal-delay-1 font-display text-display-lg font-light text-ink dark:text-mist mb-6"
            >
              Hi, I'm <em className="text-blue dark:text-blue-light">Gowthami sukumaran</em>
            </h2>

            <div className="reveal reveal-delay-2 space-y-4 text-ink/65 dark:text-mist/60 leading-relaxed text-sm md:text-base">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>10+ Years Experience:</strong> Weight management & clinical nutrition across hospital and fitness settings.</li>
                <li><strong>Clinical Foundation:</strong> Experience in NABH-accredited multispecialty hospitals managing therapeutic nutrition and metabolic conditions.</li>
                <li><strong>Food as a Tool:</strong> Personalised plans that use food to improve metabolic health and build sustainable habits.</li>
                <li><strong>Practical & Realistic:</strong> Focus on consistency over perfection, and education over dependency—no extreme diets.</li>
              </ul>
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
            <div className="reveal reveal-delay-4 flex gap-4 sm:gap-8 mt-10 pt-8 border-t border-ink/8 dark:border-mist/8">
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
