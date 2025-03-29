import localFont from 'next/font/local'
import './globals.css'

import { MenuWrapper } from '@/context/menus'
import { CartProvider } from '@/context/cart'

const lato = localFont({
  src: [
    { path: './fonts/Lato-Thin.ttf', weight: '100' },
    { path: './fonts/Lato-Light.ttf', weight: '300' },
    { path: './fonts/Lato-Regular.ttf', weight: '400' },
    { path: './fonts/Lato-Bold.ttf', weight: '700' },
    { path: './fonts/Lato-Black.ttf', weight: '900' },
  ],
  variable: '--font-lato', // CSS varijabla koju možeš koristiti u stilu
})

export const metadata = {
  title: {
    default: 'Alex Zlatara – Ekskluzivni Zlatni i Srebrni Nakit',
    template: '%s - Alex Zlatara',
  },
  description:
    'Alex Zlatara vam pruža ekskluzivan ručno izrađen zlatni i srebrni nakit vrhunskog kvaliteta. Otkrijte savršene komade nakita za posebne trenutke, izrađene sa ljubavlju i elegancijom.',
  keywords: [
    'Zlatni nakit',
    'Srebrni nakit',
    'Burme i prstenje',
    'Narukvice od zlata',
    'Minđuše od srebra',
    'Ručno rađeni nakit',
    'Personalizovani nakit',
    'Zlatara Svilajnac',
    'Luksuzni nakit',
    'Pokloni od zlata i srebra',
  ],
  metadataBase: new URL('https://alexzlatara.com/'),
  openGraph: {
    type: 'website',
    locale: 'sr-RS',
    url: 'https://alexzlatara.com/',
    title: 'Alex Zlatara – Ekskluzivni Zlatni i Srebrni Nakit',
    description:
      'Alex Zlatara vam pruža ekskluzivan ručno izrađen zlatni i srebrni nakit vrhunskog kvaliteta. Otkrijte savršene komade nakita za posebne trenutke, izrađene sa ljubavlju i elegancijom.',
    siteName: 'Alex Zlatara',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Zlatara – Ekskluzivni Zlatni i Srebrni Nakit',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Zlatara – Ekskluzivni Zlatni i Srebrni Nakit',
    description:
      'Alex Zlatara vam pruža ekskluzivan ručno izrađen zlatni i srebrni nakit vrhunskog kvaliteta. Otkrijte savršene komade nakita za posebne trenutke, izrađene sa ljubavlju i elegancijom.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  // other: {
  //   'google-site-verification': 'OVDE_UBACI_SVOJ_VERIFICATION_CODE',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <CartProvider>
        <MenuWrapper>
          <body className={`${lato.variable} antialiased`}>{children}</body>
        </MenuWrapper>
      </CartProvider>
    </html>
  )
}
