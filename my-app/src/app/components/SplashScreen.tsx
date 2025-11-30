'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // 2秒後にフェードアウト開始
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    // フェードアウトアニメーション完了後にDOMから削除 (さらに1秒後など)
    const cleanupTimer = setTimeout(() => {
      setShouldRender(false)
    }, 3000) // 2s display + 1s fade out

    return () => {
      clearTimeout(timer)
      clearTimeout(cleanupTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-64 h-64 md:w-96 md:h-96 animate-pulse">
        <Image
          src="/images/splash-logo.png"
          alt="Tottori Farmers Garden"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
