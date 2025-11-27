'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md z-50">
      {/* 左：大きめロゴ */}
      <div>
        <Image src="/logo.jpg" alt="Logo" width={80} height={80} />
      </div>

      {/* 右：ハンバーガーボタン */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
      >
        <span className="block h-1 bg-white rounded"></span>
        <span className="block h-1 bg-white rounded"></span>
        <span className="block h-1 bg-white rounded"></span>
      </button>

      {/* メニュー */}
      {open && (
        <nav className="absolute top-20 right-6 bg-white text-black border border-gray-300 rounded-lg shadow-lg p-4 space-y-4 z-50">
          <a href="#home" onClick={() => setOpen(false)}>
            ホーム
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            私たちについて
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            お問い合わせ
          </a>
        </nav>
      )}
    </header>
  )
}
