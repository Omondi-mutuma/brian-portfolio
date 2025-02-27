import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Brian Omondi - Web Developer Portfolio',
  description: 'Created by Brian Omondi',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  )
}
