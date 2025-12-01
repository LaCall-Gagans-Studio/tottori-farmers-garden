'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

// --- Types ---
interface InstagramPost {
  id: string
  imageUrl: string
  date: string
  caption: string
}

// --- Dummy Data ---
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.27',
    caption: '今日の収穫！新鮮な野菜がたくさん採れました🍅 #鳥取 #農業',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.25',
    caption: '冬支度が始まりました。温かいスープが美味しい季節です🍲',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1622212611568-32d624f5f0ed?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.20',
    caption: '子ども食堂の様子。みんなの笑顔に元気をもらいます😊',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1595855709915-445676d2a29e?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.15',
    caption: '新作のジャムが完成！甘さ控えめでパンにぴったり🍞',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.10',
    caption: '大山が綺麗に見えました⛰️ 空気が澄んでいて気持ちいい！',
  },
]

export default function News() {
  const [offset, setOffset] = useState(0)
  const [windowWidth, setWindowWidth] = useState(1200) // Default to desktop
  const itemWidthRef = useRef(260)

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      const isMobile = window.innerWidth < 768
      const cardWidth = isMobile ? 180 : 220
      const gap = isMobile ? 15 : 40
      itemWidthRef.current = cardWidth + gap
    }

    // Initial call
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation loop
  useEffect(() => {
    let animationFrameId: number
    let isPausing = true
    let pauseStartTime = performance.now()

    // Calculate initial offset to center the first card
    // We want relativeX = 0 for index 0.
    // relativeX = x - containerCenter + itemWidth/2
    // x = -offset
    // 0 = -offset - containerCenter + itemWidth/2
    // offset = itemWidth/2 - containerCenter
    // Note: This initial calculation is approximate because windowWidth might update.
    // But the loop will take over.
    // Let's start with a "centered" state for whatever the defaults are.
    let startOffset = 300 - 600 // -300 for default desktop
    let targetOffset = startOffset

    // Update startOffset once we have real dimensions?
    // Actually, let's just let the loop run.
    // If we want to force center on load, we might need to reset offset when windowWidth is first set.
    // But let's keep it simple.

    let startTime = 0
    const pauseDuration = 3000
    const moveDuration = 1000

    const animate = (time: number) => {
      const itemWidth = itemWidthRef.current

      if (isPausing) {
        if (time - pauseStartTime >= pauseDuration) {
          isPausing = false
          startTime = time
          startOffset = targetOffset
          targetOffset = startOffset + itemWidth
        }
      } else {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / moveDuration, 1)
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3)

        const current = startOffset + (targetOffset - startOffset) * ease
        setOffset(current)

        if (progress >= 1) {
          isPausing = true
          pauseStartTime = time
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Helper to calculate card style based on position
  const getCardStyle = (index: number) => {
    const isMobile = windowWidth < 768
    const cardWidth = isMobile ? 180 : 220
    const gap = isMobile ? 15 : 40
    const itemWidth = cardWidth + gap
    const totalWidth = itemWidth * INSTAGRAM_POSTS.length

    // Calculate current X position
    // Start from right, move left
    // Base position + offset
    let x = index * itemWidth - offset

    // Wrap around logic
    // If x is too far left, move to end
    while (x < -itemWidth) x += totalWidth
    // If x is too far right (shouldn't happen with this direction), move to start
    while (x > totalWidth - itemWidth) x -= totalWidth

    // Center the coordinate system for curve calculation
    // Use windowWidth for true centering
    const containerCenter = windowWidth / 2
    const relativeX = x - containerCenter + itemWidth / 2 // Center of the card relative to container center

    // Parabola: y = a * x^2 + c
    // SVG Curve: Start/End at Y=0, Center at Y=80 (Gentler curve, sag 80).
    // In CSS coords (relative to container top):
    // Center (x=0) -> y=80 (Lowest point)
    // Edges (x=+-600) -> y=0 (Highest point)
    // Formula: y = 80 - k * x^2
    // At x=600: 0 = 80 - k * 360000
    // 80 = k * 360000
    // k = 80 / 360000 = 1 / 4500

    // Adjust k for mobile?
    // On mobile, width is smaller.
    // If we keep same k, the curve might look flat because x range is smaller.
    // Let's keep k constant for now or adjust based on width.
    // A constant k means the "rope shape" is the same physical curve.
    const k = 80 / (600 * 600)
    const ropeY = 80 - k * relativeX * relativeX

    // Rotation: derivative of the curve
    // y' = -2 * k * x
    // So slope is positive. Visual: \
    // We want card to tilt \. That is POSITIVE rotation (clockwise).
    // atan(y') will be positive.
    // So `rotation = Math.atan(y')` should work directly.

    const rotation = Math.atan(-2 * k * relativeX) * (180 / Math.PI)

    // Adjust Y to align clips with rope
    // We want the top of the card (where clips are) to be near the ropeY.
    // Clips are at -top-6 (-24px).
    // So if card top is at ropeY + 20, clips are at ropeY - 4.
    // This looks about right for "hanging".
    const finalY = ropeY - 60

    // Opacity/Visibility
    // If x is way off screen, hide it
    const isVisible = x > -800 && x < 2000

    return {
      transform: `translate(${x}px, ${finalY}px) rotate(${rotation}deg)`,
      opacity: isVisible ? 1 : 0,
      zIndex: 10,
      // Use absolute positioning relative to the container
      position: 'absolute' as const,
      left: 0,
      top: 0,
      willChange: 'transform',
    }
  }

  return (
    <section className="py-10 px-6 font-zenKakuGothicNew overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-96 h-40">
              <Image
                src="/images/news_title.png"
                alt="News"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <a
            href="https://www.instagram.com/farmars_garden/?igsh=MXB2NHp2cmppZXN1cA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ws-primary hover:underline inline-flex items-center gap-2 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @farmars_garden
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[900px] w-full overflow-hidden">
          {/* Single Large Rope SVG */}
          <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible">
            {/* 
              Curve matching our math:
              Start: (-600, 0)
              Control: (0, 80) -> Quadratic bezier approximation for parabola
              End: (600, 0)
            */}
            <path
              d="M -100,0 Q 50%,80 110%,0"
              fill="none"
              stroke="#A0522D"
              strokeWidth="6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Cards */}
          <div className="relative w-full h-full">
            {INSTAGRAM_POSTS.map((post, index) => (
              <a
                key={post.id}
                href="https://www.instagram.com/farmars_garden/?igsh=MXB2NHp2cmppZXN1cA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-3 pb-6 rounded-sm shadow-lg hover:shadow-2xl"
                style={getCardStyle(index)}
              >
                {/* Clips */}
                <div className="absolute -top-6 left-[20%] w-6 h-14 bg-ws-wood border border-ws-black/20 rounded-sm z-30 shadow-sm"></div>
                <div className="absolute -top-6 right-[20%] w-6 h-14 bg-ws-wood border border-ws-black/20 rounded-sm z-30 shadow-sm"></div>

                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={post.imageUrl}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-bold">View on Instagram</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-ws-black/50 mb-2 font-bold">{post.date}</p>
                  <p className="text-base text-ws-black/80 line-clamp-2">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
