import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TanStackQueryProvider } from '@/providers/tanstack-query-provider'
import { ClientThemeWrapper } from '@/providers/client-theme-wrapper'
import { Toaster } from '@/components/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'A clean Next.js template with Shadcn UI, Zustand, and TanStack Query',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <TanStackQueryProvider>
          <ClientThemeWrapper>
            {children}
            <Toaster />
          </ClientThemeWrapper>
        </TanStackQueryProvider>
      </body>
    </html>
  )
}
