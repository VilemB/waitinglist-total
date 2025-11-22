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
  title: 'Stepps - create SOPs and process documentation easily with AI',
  description: 'Transform any workflow into professional SOPs and visual guides in seconds. Perfect for customer support teams, operations managers, HR onboarding, product teams, and engineering documentation.',
  keywords: [
    // Core Product Keywords
    'SOP generator', 'AI SOP creator', 'automated SOPs', 'process documentation software', 'workflow documentation tool',

    // Target Vertical Keywords
    'customer support SOPs', 'call center documentation', 'support team workflows', 'customer service playbooks',
    'operations management SOPs', 'business process documentation', 'workflow standardization', 'operations guides',
    'HR onboarding SOPs', 'employee onboarding documentation', 'HR process automation', 'company policy documentation',
    'product launch SOPs', 'product team workflows', 'feature launch documentation', 'cross-functional alignment',
    'engineering documentation', 'technical SOPs', 'development workflows', 'environment setup guides',
    'sales enablement SOPs', 'marketing playbooks', 'GTM team alignment', 'sales process documentation',

    // Problem/Solution Keywords
    'how to create SOPs', 'standard operating procedures template', 'workflow automation', 'team productivity tools',
    'visual guide creator', 'step-by-step documentation', 'process mapping software', 'team collaboration tools',

    // Alternative/Scribe Competitor Keywords
    'Scribe alternative', 'process.st alternative', 'Tango alternative', 'workflow documentation platform',
    'AI documentation assistant', 'automatic guide creation', 'screen recorder with documentation'
  ],
  authors: [{ name: 'Stepps.ai' }],
  creator: 'Stepps.ai',
  publisher: 'Stepps.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stepps.ai'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stepps.ai',
    title: 'AI SOP Generator for Customer Support, Operations & Product Teams | Stepps',
    description: 'Create professional SOPs and visual guides in seconds. Perfect for customer support teams, operations managers, HR onboarding, product launches, and engineering documentation.',
    siteName: 'Stepps.ai',
    images: [
      {
        url: '/og-image.svg', // TODO: Replace with og-image.png (1200x630) for better social sharing
        width: 1200,
        height: 630,
        alt: 'AI SOP Generator for Business Teams - Stepps.ai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SOP Generator for Customer Support, Operations & Product Teams',
    description: 'Transform any workflow into professional SOPs and visual guides. Perfect for support teams, operations, HR, product, and engineering teams.',
    images: ['/og-image.svg'], // TODO: Replace with og-image.png
    creator: '@stepps_ai',
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
