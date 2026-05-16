import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://eattraintransform.in'),
  title: {
    default: 'Fitudal | Certified Dietitian & Online Nutrition Coach in India',
    template: '%s | Fitudal',
  },
  description:
    'Gowthami Sukumaran is a certified dietitian offering personalised online nutrition coaching in India. Specialising in weight management, PCOS, thyroid, diabetes, and women\'s wellness. Book a free consultation today.',
  keywords: [
    'online dietitian India',
    'certified nutritionist India',
    'PCOS nutrition specialist',
    'thyroid diet plan',
    'diabetes nutrition coach',
    'post-pregnancy weight loss',
    'online nutritionist India',
    'Hyderabad nutritionist',
    'women\'s nutrition India',
    'personalised nutrition plan',
    'weight management coach',
    'clinical nutritionist',
    'meal planning India',
    'body transformation',
    'Gowthami Sukumaran dietitian',
  ],
  authors: [{ name: 'Gowthami Sukumaran' }],
  creator: 'Gowthami Sukumaran',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://eattraintransform.in',
    title: 'Fitudal | Certified Dietitian & Online Nutrition Coach in India',
    description: 'Personalised online nutrition coaching by Gowthami Sukumaran — specialising in PCOS, thyroid, weight management, and women\'s wellness across India.',
    siteName: 'Fitudal',
    images: [
      {
        url: '/gowthami_hero_updated.jpeg',
        width: 1200,
        height: 630,
        alt: 'Gowthami Sukumaran – Certified Dietitian & Nutrition Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitudal | Certified Dietitian & Online Nutrition Coach in India',
    description: 'Personalised online nutrition coaching by Gowthami Sukumaran — PCOS, thyroid, weight management & women\'s wellness.',
    images: ['/gowthami_hero_updated.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://eattraintransform.in',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  name: 'Gowthami Sukumaran',
                  jobTitle: 'Registered Dietitian & Nutrition Coach',
                  description:
                    'Certified dietitian with 10+ years of experience in clinical and fitness nutrition, specialising in weight management, PCOS, thyroid disorders, diabetes, and women\'s wellness.',
                  url: 'https://eattraintransform.in',
                  knowsAbout: [
                    'Nutrition Science',
                    'Weight Management',
                    'PCOS Nutrition',
                    'Thyroid Diet',
                    'Diabetes Nutrition',
                    'Women\'s Wellness',
                    'Clinical Nutrition',
                    'Post-Pregnancy Recovery',
                    'Indian Meal Planning',
                  ],
                },
                {
                  '@type': 'ProfessionalService',
                  name: 'Fitudal',
                  description:
                    'Personalised online nutrition coaching and dietitian services across India by Gowthami Sukumaran.',
                  url: 'https://eattraintransform.in',
                  areaServed: 'India',
                  serviceType: 'Nutrition & Dietitian Coaching',
                  priceRange: '₹₹',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Nutrition Coaching Plans',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'FUEL Plan',
                          description:
                            '3-month structured nutrition plan with personalised diet plan, monthly review sessions, and WhatsApp support.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'STABILIZE Plan',
                          description:
                            '3-month personalised nutrition and lifestyle plan with weekly tracking, body composition guidance, blood report review, and WhatsApp follow-ups.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'THRIVE Plan',
                          description:
                            '3-month in-depth nutrition and wellness plan with behavioural coaching, advanced blood work analysis, and continuous accountability.',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'WebSite',
                  name: 'Fitudal',
                  url: 'https://eattraintransform.in',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
