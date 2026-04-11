'use client'

import { useEffect, useRef } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

import Image from 'next/image'

import t8 from '../public/Testimonial_8.jpeg'
import t2 from '../public/Testimonial_2.jpeg'
import t14 from '../public/Testimonial_14.jpeg'
import t1 from '../public/Testimonial_1.jpeg'
import t4 from '../public/Testimonial_4.jpeg'
import t10 from '../public/Testimonial_10.jpeg'
import t12 from '../public/Testimonial_12.jpeg'

import t9 from '../public/Testimonial_9.jpeg'
import t3 from '../public/Testimonial_3.jpeg'
import t6 from '../public/Testimonial_6.jpeg'
import t7 from '../public/Testimonial_7.jpeg'
import t5 from '../public/Testimonial_5.jpeg'
import t11 from '../public/Testimonial_11.jpeg'
import t13 from '../public/Testimonial_13.jpeg'

// Shorter testimonials (heights < 1020px)
const row1Images = [t8, t2, t14, t1, t4, t10, t12]

// Taller testimonials (heights > 1020px)
const row2Images = [t9, t3, t6, t7, t5, t11, t13]

const CarouselRow = ({ images, rowIdx, delayClass }: { images: any[], rowIdx: number, delayClass: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? window.innerWidth * 0.8 : 400
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className={`relative group ${delayClass} reveal`}>
      {/* Scroll Left Button */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-night-card/90 backdrop-blur-sm shadow-soft-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-forest hover:text-white dark:hover:bg-forest-light dark:hover:text-forest-dark border border-ink/5 dark:border-mist/5 disabled:opacity-0 focus:opacity-100 text-ink dark:text-mist"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-surface dark:from-night-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-surface dark:from-night-surface to-transparent z-10 pointer-events-none" />

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar px-4 sm:px-8"
      >
        {images.map((src, i) => (
          <div
            key={src.src}
            className="relative flex-none w-[80vw] sm:w-[300px] lg:w-[360px] snap-center rounded-[2rem] overflow-hidden shadow-soft-md border border-ink/5 dark:border-mist/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-xl bg-white dark:bg-night-card group/card"
          >
            <Image
              src={src}
              alt={`Client Testimony ${i + 1} (Row ${rowIdx})`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover/card:scale-105"
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 320px, 380px"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 dark:group-hover/card:bg-white/5 transition-colors duration-300 pointer-events-none" />
            
            {/* Subtle inner border for premium feel */}
            <div className="absolute inset-0 rounded-[2rem] border border-ink/5 dark:border-mist/5 pointer-events-none" />
          </div>
        ))}
      </div>
      
      {/* Scroll Right Button */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-night-card/90 backdrop-blur-sm shadow-soft-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-forest hover:text-white dark:hover:bg-forest-light dark:hover:text-forest-dark border border-ink/5 dark:border-mist/5 disabled:opacity-0 focus:opacity-100 text-ink dark:text-mist"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

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

      <div className="max-w-[1400px] mx-auto px-0 relative z-10">
        {/* Header (contained within typical max-width wrapper) */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest/5 dark:bg-forest-light/5 border border-forest/20 dark:border-forest-light/20 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-forest-light" />
            <span className="text-sm font-bold text-forest dark:text-forest-light tracking-widest uppercase pt-0.5">
              Testimonials
            </span>
          </div>
          <h2 id="testimonials-heading" className="reveal reveal-delay-1 font-display text-display-lg md:text-display-xl font-light text-ink dark:text-mist">
            Real Conversations.{' '}
            <em className="text-forest dark:text-forest-light font-medium italic">Real Results.</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-ink/60 dark:text-mist/60 text-base md:text-lg max-w-2xl mx-auto font-light">
            Discover the journeys of those who transformed their bodies and lives through personalized nutrition.
          </p>
        </div>

        {/* Scrollable Container 1 (Shorter Images) */}
        <CarouselRow images={row1Images} rowIdx={1} delayClass="reveal-delay-3" />

        {/* Scrollable Container 2 (Taller Images) */}
        <div className="mt-4">
          <CarouselRow images={row2Images} rowIdx={2} delayClass="reveal-delay-4" />
        </div>

        {/* Helper text for small screens indicating scrolling */}
        <div className="text-center mt-6 lg:hidden reveal reveal-delay-5 flex items-center justify-center gap-2 text-xs font-medium text-ink/40 dark:text-mist/40">
          <ChevronLeft size={14} /> Swiping enabled <ChevronRight size={14} />
        </div>
      </div>

      {/* Hide Scrollbar CSS styling specific to this component */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}} />
    </section>
  )
}

