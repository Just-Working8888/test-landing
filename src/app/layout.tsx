import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cairo } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const title = 'CryptoMentor — Хочешь $10k/мес на крипте?'
const description = 'Живые торговые сессии, личный ментор и проверенные стратегии. 1200+ учеников уже зарабатывают на крипте.'

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CryptoMentor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
