'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const heroSection = document.getElementById('hero-spacer')
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Heroセクション（スペーサー）が少しでも見えている間は透明、完全に見えなくなったら赤
        setIsScrolled(!entry.isIntersecting)
      },
      {
        threshold: 0.1, // 10%以上見えていれば透明
      },
    )

    observer.observe(heroSection)

    return () => observer.disconnect()
  }, [])

  const menuItems = [
    { label: 'ホーム', href: '#home', image: '/images/home_nav.png' },
    { label: '最新情報', href: '#news', image: '/images/news_nav.png' },
    { label: '商品情報', href: '#products', image: '/images/products_nav.png' },
    { label: '私たちについて', href: '#about', image: '/images/about_nav.png' },
    { label: 'お問合せ', href: '#contact', image: '/images/contact_nav.png' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-6 flex justify-between items-center z-50 transition-colors duration-300 ${
        !open && isScrolled ? '' : 'bg-transparent'
      }`}
    >
      {/* 左：大きめロゴ */}
      <div>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/#home'
            window.location.reload()
          }}
          className="cursor-pointer block"
          aria-label="ホームに戻る"
        >
          <Image
            src={!isScrolled ? '/images/header-logo.png' : '/images/splash-logo.png'}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      {/* 右：ハンバーガーボタン (Image) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center w-12 h-12 focus:outline-none z-[70]"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <div className="relative w-8 h-8">
          <Image
            src="/images/hamburger-red.png"
            alt="Menu"
            fill
            className={`object-contain transition-all duration-300 ${
              !isScrolled || open ? 'brightness-0 invert' : ''
            }`}
          />
        </div>
      </button>

      {/* フルスクリーンメニュー */}
      {open && (
        <nav
          className="fixed inset-0 w-screen h-dvh z-[60] flex flex-col items-center justify-center transition-none"
          style={{ backgroundColor: '#C62828' }}
        >
          {/* メニューリスト */}
          <ul className="space-y-8 text-center flex flex-col items-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block relative w-96 h-32 hover:opacity-80 transition-opacity overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-contain scale-[1.5]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
