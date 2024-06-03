import React from 'react'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import Navbar from '../../components/shared/Navbar'
import LeftSidebar from '../../components/shared/LeftSidebar'
import Bottombar from '../../components/shared/Bottombar'
import RightSidebar from '../../components/shared/RightSidebar'

import '../globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Threads your favorite social app',
  description:
    'Threads is a social networking service owned by the American company Meta Platforms. The app aims to function as an adjunct to Instagram, a product of Meta',
  metadataBase: new URL('https://threads-clone-v1.vercel.app'),
  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon.ico',
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/images/favicon/favicon.ico',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/images/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
    },
  },
}

export const viewport = {
  themeColor: '#5b51d8',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
