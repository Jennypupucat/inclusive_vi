import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Let's join us in the renewal of Convoys Wharf!",
  description: 'Explore the progress, heritage protection and community discussion of Convoys Wharf regeneration project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
} 