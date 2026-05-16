import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Resources | Nutrition Insights by Gowthami Sukumaran',
  description:
    'Evidence-based nutrition articles by certified dietitian Gowthami Sukumaran — covering PCOS, thyroid health, weight management, diabetes, and women\'s wellness in the Indian context.',
}

const categoryColors: Record<string, string> = {
  "Women's Health": 'bg-gold/10 text-gold-dark dark:bg-gold/15 dark:text-gold border border-gold/20',
  'Thyroid Health': 'bg-blue/10 text-blue dark:bg-blue/15 dark:text-blue-light border border-blue/20',
  'Weight Management': 'bg-forest/10 text-forest dark:bg-forest/15 dark:text-forest-light border border-forest/20',
  'Metabolic Health': 'bg-forest/8 text-forest dark:bg-forest/12 dark:text-forest-light border border-forest/15',
}

const defaultCategory = 'bg-ink/8 text-ink/70 dark:bg-mist/8 dark:text-mist/70 border border-ink/10'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen mesh-bg overflow-x-hidden">
        {/* Header */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 right-0 w-72 h-72 blob-1 bg-forest/6 dark:bg-forest/10 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-56 h-56 blob-2 bg-gold/8 -translate-x-1/4" />
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest/5 dark:bg-forest-light/5 border border-forest/20 dark:border-forest-light/20 shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-forest-light" />
              <span className="text-sm font-bold text-forest dark:text-forest-light tracking-widest uppercase pt-0.5">
                Blog & Resources
              </span>
            </div>
            <h1 className="font-display text-display-lg md:text-display-xl font-light text-ink dark:text-mist mb-4">
              Nutrition Insights &{' '}
              <em className="text-forest dark:text-forest-light font-medium italic">Expert Guides</em>
            </h1>
            <p className="text-base md:text-lg text-ink/60 dark:text-mist/60 max-w-2xl mx-auto font-light">
              Evidence-based nutrition articles by certified dietitian Gowthami Sukumaran — practical advice for real Indian lifestyles.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col p-6 md:p-8 rounded-4xl bg-white dark:bg-night-card border border-ink/6 dark:border-mist/5 hover:border-forest/30 dark:hover:border-forest/30 transition-all duration-400 hover:shadow-soft-lg hover:-translate-y-1 overflow-hidden"
                >
                  {/* Hover bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-forest/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Category + read time */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? defaultCategory}`}>
                        <Tag size={11} />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-ink/45 dark:text-mist/45">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-ink dark:text-mist group-hover:text-forest dark:group-hover:text-forest-light transition-colors duration-300 mb-3 leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-ink/60 dark:text-mist/55 leading-relaxed flex-1 mb-6">
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-ink/6 dark:border-mist/6">
                      <span className="text-xs text-ink/40 dark:text-mist/40">{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest dark:text-forest-light group-hover:gap-2.5 transition-all duration-200">
                        Read Article
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-4xl bg-forest dark:bg-forest text-white p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 blob-1 bg-white/5 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-sm font-bold tracking-widest uppercase text-white/60 mb-3">Ready for personalised advice?</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                  Get a nutrition plan built around <em className="italic font-medium">your</em> life.
                </h3>
                <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm md:text-base">
                  Articles give you knowledge. A personalised plan gives you results. Book a free 15-minute call with Gowthami.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-forest font-semibold rounded-full hover:bg-mist transition-all duration-300 shadow-soft hover:-translate-y-0.5"
                >
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
