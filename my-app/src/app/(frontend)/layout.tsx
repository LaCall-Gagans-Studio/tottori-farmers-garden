import Header from '../components/Header'
import SplashScreen from '../components/SplashScreen'
import { ReactNode } from 'react'
import './styles.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 min-h-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
        <SplashScreen />
        <Header />
        <main style={{ margin: 0, padding: 0 }}>{children}</main>
      </body>
    </html>
  )
}
