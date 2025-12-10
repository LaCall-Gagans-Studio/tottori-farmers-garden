'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const heroSection = document.getElementById('home')
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Heroセクションが少しでも見えている間は透明、完全に見えなくなったら赤
        // thresholdを0にして、少しでも入っていればisIntersectingがtrueになるようにする
        setIsScrolled(!entry.isIntersecting)
      },
      {
        root: document.querySelector('main'), // スクロールコンテナを指定
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
        !open && isScrolled ? 'bg-red-600/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
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
            src="/images/header-logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      {/* 右：ハンバーガーボタン (Animated) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-[70] space-y-1.5"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block w-8 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white rounded transition-opacity duration-300 ease-in-out ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
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
