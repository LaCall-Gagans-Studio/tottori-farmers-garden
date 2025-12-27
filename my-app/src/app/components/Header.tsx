'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null, // viewport
        threshold: 0.5, // 50% visibility
      },
    )

    const sections = ['home', 'news', 'products', 'about', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Home(home) and About sections have dark/red backgrounds, so use White header elements
  const isWhiteTheme = activeSection === 'home' || activeSection === 'about'
  const isHero = activeSection === 'home'

  const menuItems = [
    { label: 'ホーム', href: '#home', image: '/images/home_nav.png' },
    { label: '最新情報', href: '#news', image: '/images/news_nav.png' },
    { label: '商品情報', href: '#products', image: '/images/products_nav.png' },
    { label: '私たちについて', href: '#about', image: '/images/about_nav.png' },
    { label: 'お問合せ', href: '#contact', image: '/images/contact_nav.png' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-6 flex justify-between items-center z-50 transition-colors duration-300 bg-transparent pointer-events-none">
        {/* 左：大きめロゴ (Hero以外で表示) */}
        <div
          className={`pointer-events-auto transition-opacity duration-300 ${isHero ? 'opacity-0' : 'opacity-100'}`}
        >
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
              src={isWhiteTheme ? '/images/header-logo.png' : '/images/splash-logo.png'}
              alt="Logo"
              width={80}
              height={80}
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* 右：Instagram + ハンバーガーボタン */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/farmars_garden/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-center justify-center w-20 h-20"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-colors duration-300 ${isWhiteTheme ? 'text-white' : 'text-gray-800'}`}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* ハンバーガーボタン */}
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center w-20 h-20 focus:outline-none z-[70]"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-28 h-28">
              <Image
                src={
                  isWhiteTheme || open ? '/images/hamburger-lines.png' : '/images/hamburger-cow.png'
                }
                alt="Menu"
                fill
                className="object-contain transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* サイドメニュー (Right Slide-in) */}
        <nav
          className={`fixed top-0 right-0 h-dvh w-[85vw] md:w-[90vw] md:max-w-[1300px] z-[60] flex flex-col items-center justify-start pt-32 transition-transform duration-500 ease-in-out pointer-events-auto ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#C62828' }}
        >
          {/* メニューリスト */}
          <ul className="space-y-4 text-center flex flex-col items-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.label === 'ホーム') {
                      e.preventDefault()
                      setOpen(false)
                      window.location.href = '/#home'
                      window.location.reload()
                    } else {
                      setOpen(false)
                    }
                  }}
                  className="block relative w-60 h-16 md:w-72 md:h-20 hover:opacity-80 transition-opacity overflow-visible group"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-contain scale-[1.5]"
                  />
                  {/* Hover Image (Right side of text) */}
                  <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Image src="/images/nav-hover.png" alt="" fill className="object-contain" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
