import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://eattraintransform.in'), // ← Replace with your domain
  title: {
    default: 'EatTrainTransform | Fitness & Nutrition',
    template: '%s | EatTrainTransform',
  },
  description:
    'Transform your body and elevate your life with personalized nutrition plans and expert fitness coaching by EatTrainTransform.',
  keywords: [
    'nutritionist',
    'personal trainer',
    'fitness coach',
    'nutrition plan',
    'weight loss coach',
    'muscle building',
    'online coaching',
    'certified nutritionist',
    'meal planning',
    'body transformation',
  ],
  authors: [{ name: 'EatTrainTransform' }],
  creator: 'EatTrainTransform',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eattraintransform.in',
    title: 'EatTrainTransform | Fitness & Nutrition',
    description: 'Personalized nutrition & fitness coaching to transform your body and elevate your life.',
    siteName: 'EatTrainTransform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EatTrainTransform | Fitness & Nutrition',
    description: 'Personalized nutrition & fitness coaching.',
    creator: '@eattraintransform',
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
              '@type': 'Person',
              name: 'EatTrainTransform',
              jobTitle: 'Fitness & Nutrition',
              description: 'Expert nutrition and gym training helping clients transform their bodies.',
              url: 'https://eattraintransform.in',
              sameAs: [
                'https://instagram.com/eattraintransform',
                'https://twitter.com/eattraintransform',
              ],
              knowsAbout: [
                'Nutrition Science',
                'Personal Training',
                'Weight Loss',
                'Muscle Building',
                'Wellness Coaching',
              ],
              offers: {
                '@type': 'Service',
                serviceType: 'Nutrition and Fitness Coaching',
              },
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
