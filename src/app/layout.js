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
  title: 'Alex Zlatara',
  description:
    'Alex zlatara je prestižna radnja koja nudi vrhunske, ručno rađene zlatne i srebrne nakite. Naši dizajni kombinuju klasičnu eleganciju i moderni šarm, savršeni za svaki trenutak.',
  icons: {
    icon: 'icon.png',
  },
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
