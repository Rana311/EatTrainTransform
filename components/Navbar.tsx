'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import clsx from 'clsx'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-cream/90 dark:bg-night/90 backdrop-blur-xl border-b border-ink/5 dark:border-mist/5 shadow-soft'
            : 'py-5 bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-display font-semibold text-sm">E</span>
            </div>
            <span className="font-display text-xl font-semibold text-ink dark:text-mist tracking-tight">
              EatTrainTransform
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/70 dark:text-mist/70 hover:text-forest dark:hover:text-forest-light transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-forest dark:bg-forest-light group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center text-ink/60 dark:text-mist/60 hover:text-forest dark:hover:text-forest-light hover:bg-surface dark:hover:bg-night-card transition-all duration-200"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === 'dark' ? (
                <Sun className="w-4.5 h-4.5" size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
            >
              Book a Call
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-ink dark:text-mist"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 md:hidden transition-all duration-400',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={clsx(
            'absolute top-0 right-0 h-full w-72 bg-cream dark:bg-night-surface shadow-2xl transition-transform duration-400',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="p-8 pt-20">
            <ul className="space-y-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl font-medium text-ink dark:text-mist hover:text-forest dark:hover:text-forest-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 flex items-center justify-center px-6 py-3 bg-forest text-white font-semibold rounded-full"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
