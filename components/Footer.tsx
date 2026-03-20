import { Instagram, Mail, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink dark:bg-black text-mist/60 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-forest to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.png"
                alt="Eat Train Transform"
                className="h-10 w-auto object-contain rounded-full"
              />
            </div>
            <p className="text-sm leading-relaxed text-mist/45 max-w-xs">
              Personalised nutrition and dietitian services by Gowthami Sukumaran — helping you transform through food, not despite it.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Mail, href: 'mailto:gowthami@eattraintransform.in', label: 'Email' },
                { icon: MessageCircle, href: 'https://wa.me/919487320963?text=Hello Gowthami! %20I%20want%20to%20book%20a%20consultation', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-mist/8 flex items-center justify-center hover:bg-forest/40 transition-colors duration-200"
                >
                  <Icon size={15} className="text-mist/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-mist/30 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist/50 hover:text-forest-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-mist/30 mb-5">Start Today</h3>
            <p className="text-sm text-mist/45 leading-relaxed mb-5">
              Ready to begin your journey? Book a free consultation with Gowthami today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest-dark transition-all duration-300 shadow-soft"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-mist/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist/25">
            © {new Date().getFullYear()} EatTrainTransform. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-xs text-mist/25 hover:text-mist/50 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
