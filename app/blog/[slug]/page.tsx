import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, ArrowRight, Clock, Tag, User } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Gowthami Sukumaran'],
      images: [{ url: '/gowthami_hero_updated.jpeg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/gowthami_hero_updated.jpeg'],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function ArticlePage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Gowthami Sukumaran',
      jobTitle: 'Registered Dietitian & Nutrition Coach',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fitudal',
      url: 'https://eattraintransform.in',
    },
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen mesh-bg overflow-x-hidden">
        {/* Article header */}
        <section className="pt-32 pb-10 lg:pt-40 lg:pb-12 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 right-0 w-72 h-72 blob-1 bg-forest/5 translate-x-1/3" />
          </div>
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink/50 dark:text-mist/50 hover:text-forest dark:hover:text-forest-light transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
              All Articles
            </Link>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-forest/10 text-forest dark:bg-forest/15 dark:text-forest-light border border-forest/20">
                <Tag size={11} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink/45 dark:text-mist/45">
                <Clock size={11} />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-display-lg font-light text-ink dark:text-mist leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author + date */}
            <div className="flex items-center gap-3 pb-8 border-b border-ink/8 dark:border-mist/8">
              <div className="w-9 h-9 rounded-full bg-forest/15 dark:bg-forest/20 flex items-center justify-center flex-shrink-0">
                <User size={16} className="text-forest dark:text-forest-light" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-mist">Gowthami Sukumaran</p>
                <p className="text-xs text-ink/45 dark:text-mist/45">
                  Certified Dietitian · {formatDate(post.date)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="rounded-4xl bg-forest text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 blob-1 bg-white/5 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-bold tracking-widest uppercase text-white/55 mb-3">Get personalised help</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                  Ready to put this into practice?
                </h2>
                <p className="text-white/70 text-sm md:text-base mb-6 max-w-md">
                  A plan built around your body, your food culture, and your goals — by Gowthami Sukumaran. Start with a free 15-minute call.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest font-semibold rounded-full hover:bg-mist transition-all duration-300 shadow-soft hover:-translate-y-0.5 text-sm"
                >
                  Book Free Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-ink/50 dark:text-mist/50 hover:text-forest dark:hover:text-forest-light transition-colors duration-200 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
