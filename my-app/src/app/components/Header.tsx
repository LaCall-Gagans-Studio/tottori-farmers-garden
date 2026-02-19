'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [footerOverlap, setFooterOverlap] = useState(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('main-scroll-container')
      if (!container) return

      const currentScrollY = container.scrollTop

      // 100px以上スクロールした際に、下スクロールで非表示、上スクロールで表示
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY

      // Footerとの衝突検知
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        if (footerRect.top < viewportHeight) {
          // フッターが画面内に入ってきた分だけヘッダーを押し上げる
          setFooterOverlap(viewportHeight - footerRect.top)
        } else {
          setFooterOverlap(0)
        }
      }
    }

    const container = document.getElementById('main-scroll-container')
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: container,
        threshold: 0.5,
      },
    )

    const sections = ['home', 'news', 'products', 'restaurant', 'about', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
      observer.disconnect()
    }
  }, [])

  // Home(home) and About sections have dark/red backgrounds, so use White header elements
  const isWhiteTheme = activeSection === 'home' || activeSection === 'about'
  const isHero = activeSection === 'home'

  const menuItems = [
    { label: 'ホーム', href: '#home', image: '/images/splash-logo.png' },
    { label: '鳥取ファーマーズガーデン便り', href: '#news', image: '/images/news_title_v4.png' },
    { label: '商品情報', href: '#products', image: '/images/products_title_v2.png' },
    { label: 'レストラン', href: '#restaurant', image: '/images/restaurant_title_v2.png' },
    { label: '私たちについて', href: '#about', image: '/images/about_title_v2.png' },
    { label: 'お問合せ', href: '#contact', image: '/images/contact_title_v2.png' },
  ]

  return (
    <>
      <header
        className="fixed bottom-0 left-0 w-full px-6 py-4 md:px-10 md:py-6 flex justify-between items-end z-50 transition-all duration-500 ease-in-out bg-transparent pointer-events-none"
        style={{
          transform: isVisible
            ? `translateY(-${footerOverlap}px)`
            : `translateY(calc(80% - ${footerOverlap}px))`,
        }}
      >
        {/* PC用ナビゲーション (画面下固定・波線デザイン) */}
        <nav className="hidden md:flex items-center absolute bottom-0 left-0 w-full px-10 py-6 lg:px-16 lg:py-8 pointer-events-auto transition-all duration-500 translate-y-2">
          <div className="absolute inset-0 z-[-1] pointer-events-none">
            <svg
              className="w-full h-full filter drop-shadow-[0_-5px_15px_rgba(0,0,0,0.3)]"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              style={{ height: 'calc(100% + 40px)', bottom: 0, position: 'absolute' }}
            >
              <path
                d="M0 120 L1000 120 V 40 Q 937.5 15, 875 40 Q 812.5 65, 750 40 Q 687.5 15, 625 40 Q 562.5 65, 500 40 Q 437.5 15, 375 40 Q 312.5 65, 250 40 Q 187.5 15, 125 40 Q 62.5 65, 0 40 Z"
                fill="#C62828"
              />
            </svg>
          </div>

          <div className="flex items-center w-full justify-between gap-6 lg:gap-10">
            {/* 左端：ロゴ */}
            <div className="transition-opacity duration-300 opacity-100">
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
                  width={100}
                  height={100}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain hover:opacity-80 transition-opacity brightness-0 invert"
                />
              </a>
            </div>

            {/* メニュー項目 (横に広く配置) */}
            <div className="flex-1 flex items-center justify-around gap-4 lg:gap-6 px-4 lg:px-10">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm lg:text-lg font-bold hover:scale-105 transition-all font-kiwi whitespace-nowrap"
                  onClick={(e) => {
                    if (item.label === 'ホーム') {
                      e.preventDefault()
                      window.location.href = '/#home'
                      window.location.reload()
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/farmars_garden/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity flex items-center justify-center border-l border-white/30 ml-2 pl-4 lg:pl-6"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </nav>

        {/* モバイル用：左ロゴ (Mobile only) */}
        <div
          className={`md:hidden pointer-events-auto transition-opacity duration-300 mb-2 ${isHero ? 'opacity-0' : 'opacity-100'}`}
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
              className="w-12 h-12 md:w-20 md:h-20 object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* 右：モバイル用ボタン */}
        <div className="flex items-end gap-4 lg:gap-6 pointer-events-none md:hidden">
          {/* Instagram Icon - Mobile only */}
          <a
            href="https://www.instagram.com/farmars_garden/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden hover:opacity-70 transition-opacity flex items-center justify-center w-12 h-12"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-colors duration-300 ${isWhiteTheme ? 'text-white' : 'text-red-700'}`}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* ハンバーガーボタン (モバイルのみ) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex justify-center items-center w-14 h-14 focus:outline-none z-[70]"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-16 h-16">
              <Image
                src={open ? '/images/hamburger-lines.png' : '/images/hamburger-cow.png'}
                alt="Menu"
                fill
                className="object-contain transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* サイドメニュー (Right Slide-in) */}
        <nav
          className={`fixed top-0 right-0 h-dvh w-full md:w-[60vw] lg:w-[45vw] z-50 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out pointer-events-auto ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundColor: '#C62828',
          }}
        >
          {/* メニューリスト */}
          <ul className="space-y-6 md:space-y-8 text-center flex flex-col items-center w-full px-10">
            {menuItems.map((item) => (
              <li key={item.label} className="w-full max-w-[300px] md:max-w-[400px]">
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
                  className="block relative w-full aspect-4/1 hover:scale-105 transition-transform duration-300 group"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                  {/* Hover Decoration */}
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
