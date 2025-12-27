'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const COW_ANIMATION_IMAGES = [
  '/images/cow-anim-1.png',
  '/images/cow-anim-2.png',
  '/images/cow-anim-3.png',
  '/images/cow-anim-4.png',
  '/images/cow-anim-5.png',
]

export default function SplashScreen() {
  const [showLogo, setShowLogo] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    // 1. ロゴのフェードイン開始
    const t1 = setTimeout(() => setShowLogo(true), 100)

    // 2. アニメーション (各フレームへの切り替えをスケジュール)
    // Frame 0 is initial (Display for 2000ms)
    const t2 = setTimeout(() => setCurrentFrame(1), 2100)
    const t3 = setTimeout(() => setCurrentFrame(2), 2500)
    const t4 = setTimeout(() => setCurrentFrame(3), 2900)
    const t5 = setTimeout(() => setCurrentFrame(4), 3300)

    // 3. 全体のフェードアウト開始 (Frame 4表示開始(3300ms) + 2000ms待機 = 5300ms)
    const t6 = setTimeout(() => setIsVisible(false), 5300)

    // 4. DOMから削除 (フェードアウト完了後)
    const t7 = setTimeout(() => setShouldRender(false), 6300)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
      clearTimeout(t7)
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
          src={COW_ANIMATION_IMAGES[currentFrame]}
          alt="Tottori Farmers Garden"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
