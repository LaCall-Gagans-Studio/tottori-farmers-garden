'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 100pxスクロールしたら背景色を変更
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'News', href: '#news' },
    { label: 'Products', href: '#products' },
    { label: 'About us', href: '#about' },
    { label: 'Contact us', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-4 left-[2%] w-[96%] px-6 py-3 flex justify-between items-center z-50 transition-all duration-300 rounded-full ${
        isScrolled ? 'bg-red-600 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* 左：大きめロゴ */}
      <div>
        <Image
          src="/images/header-logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
        />
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
        <nav className="fixed inset-0 bg-red-600 z-[60] flex flex-col items-center justify-center animate-in fade-in duration-300">
          {/* メニューリスト */}
          <ul className="space-y-8 text-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl md:text-4xl font-bold font-zenKakuGothicAntique hover:opacity-80 transition-opacity text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
