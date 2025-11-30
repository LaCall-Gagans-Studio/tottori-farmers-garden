'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [showLogo, setShowLogo] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // 1. ロゴのフェードイン開始 (少し待ってから)
    const fadeInTimer = setTimeout(() => {
      setShowLogo(true)
    }, 100)

    // 2. 全体のフェードアウト開始 (1.5秒後)
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    // 3. DOMから削除 (2.5秒後 - アニメーション完了後)
    const cleanupTimer = setTimeout(() => {
      setShouldRender(false)
    }, 2500)

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTimer)
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
      <div
        className={`relative w-64 h-64 md:w-96 md:h-96 transition-opacity duration-1000 ease-in-out ${
          showLogo ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
