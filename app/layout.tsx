import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Midnight Studios INTL',
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
          <html lang="en">
            <head>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                crossOrigin="anonymous"
              />
            </head>
            <body className={inter.className}>
              <MantineProvider
                theme={{
                  primaryColor: 'red',
                  colors: {
                    red: ['#ffe0e0', '#ffb3b3', '#ff8080', '#ff4d4d', '#ff1a1a', '#e60000', '#cc0000', '#b30000', '#990000', '#800000'],
                  },
                  fontFamily: 'Inter, sans-serif',
                }}
                defaultColorScheme="dark"
              >
                <Notifications />
                {children}
              </MantineProvider>
            </body>
          </html>
        )
}