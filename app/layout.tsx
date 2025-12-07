import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'James\' Personal Website',
  description: 'Personal website of James, a second-year student at Naga College Foundation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}