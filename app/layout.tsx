import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HeroUIProvider } from '@heroui/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Midnight Studios INTL - Christ-Centered Tech Solutions',
  description: 'Midnight Studios INTL delivers cutting-edge technology solutions with Christian values at our core. We build innovative digital experiences that honor God while serving our clients with excellence.',
  keywords: 'christian technology, tech solutions, digital ministry, midnight studios, web development, mobile apps, christian values, technology consulting',
  authors: [{ name: 'Midnight Studios INTL' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
        return (
          <html lang="en" className="dark">
            <head>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                crossOrigin="anonymous"
              />
            </head>
            <body className={inter.className}>
              <HeroUIProvider>
                {children}
              </HeroUIProvider>
            </body>
          </html>
        )
}