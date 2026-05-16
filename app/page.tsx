import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Services     = dynamic(() => import('@/components/Services'))
const About        = dynamic(() => import('@/components/About'))
const Pricing      = dynamic(() => import('@/components/Pricing'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Contact      = dynamic(() => import('@/components/Contact'))
const Footer       = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen mesh-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
