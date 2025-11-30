import Header from '../components/Header'
import Footer from '../components/Footer'
import SplashScreen from '../components/SplashScreen'
import { ReactNode } from 'react'
import './styles.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 min-h-screen">
        <SplashScreen />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
