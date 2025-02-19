import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
