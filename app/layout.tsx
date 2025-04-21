import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LuminaChain POOL',
  description: 'Mine LMT tokens efficiently with our optimized pool. Stable payouts',
  generator: 'pool.luminachain.pro',
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
