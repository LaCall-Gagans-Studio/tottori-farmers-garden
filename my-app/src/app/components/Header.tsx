'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // 100px以上スクロールした際に、下スクロールで非表示、上スクロールで表示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        threshold: 0.5,
      },
    )

    const sections = ['home', 'news', 'products', 'about', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [lastScrollY])

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
        className={`fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-6 flex justify-between items-start z-50 transition-all duration-500 ease-in-out bg-transparent pointer-events-none ${
          isVisible ? 'translate-y-0' : '-translate-y-full md:translate-y-[-140%]'
        }`}
      >
        {/* 左：ロゴ (Hero以外で表示) */}
        <div
          className={`pointer-events-auto transition-opacity duration-300 mt-2 ${isHero ? 'opacity-0' : 'opacity-100'}`}
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
              width={50}
              height={50}
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* 右：ナビゲーション + 外部リンク */}
        <div className="flex items-start gap-4 lg:gap-6 pointer-events-none">
          {/* PC用ナビゲーション (画面端はみ出し・左下角丸) */}
          <nav className="hidden md:flex items-center bg-red-700 px-12 py-8 lg:px-16 lg:py-10 rounded-bl-[80px] gap-6 lg:gap-10 shadow-2xl pointer-events-auto mt-[-24px] md:mt-[-40px] mr-[-40px] lg:mr-[-50px]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-sm lg:text-lg font-bold hover:scale-105 transition-all font-mikachan whitespace-nowrap"
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
            {/* Instagram Icon (PC nav inside) */}
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
          </nav>

          {/* Instagram (Mobile only) + ハンバーガーボタン */}
          <div className="flex items-center gap-1 pointer-events-auto mt-2">
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
                  className="block relative w-full aspect-[4/1] hover:scale-105 transition-transform duration-300 group"
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
