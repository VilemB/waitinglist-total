import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { QueryProvider } from '@/components/providers/query-provider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Stepps - Step-by-Step Guides Made Simple',
    template: '%s | Stepps'
  },
  description: 'Create beautiful, step-by-step guides and documentation in seconds with stepps.ai. Stop writing docs manually and start generating professional guides automatically.',
  keywords: [
    'step-by-step guides',
    'documentation',
    'guide generator',
    'process documentation',
    'knowledge sharing',
    'workflow automation',
    'stepps.ai',
    'documentation tools',
    'create guides',
    'automated documentation'
  ],
  authors: [{ name: 'Stepps Team' }],
  creator: 'Stepps.ai',
  publisher: 'Stepps.ai',
  generator: 'Stepps.ai',
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
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon-167.png', sizes: '167x167', type: 'image/png' },
      { url: '/apple-icon-152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-128.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: '/favicon-16.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stepps.ai',
    siteName: 'Stepps',
    title: 'Stepps - Step-by-Step Guides Made Simple',
    description: 'Create beautiful, step-by-step guides and documentation in seconds with stepps.ai. Stop writing docs manually and start generating professional guides automatically.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Stepps - Step-by-Step Guides Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stepps - Step-by-Step Guides Made Simple',
    description: 'Create beautiful, step-by-step guides and documentation in seconds with stepps.ai. Join the waitlist today!',
    images: ['/logo.svg'],
  },
  metadataBase: new URL('https://stepps.ai'),
  alternates: {
    canonical: 'https://stepps.ai',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-mono antialiased">
        <QueryProvider>
          {children}
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
