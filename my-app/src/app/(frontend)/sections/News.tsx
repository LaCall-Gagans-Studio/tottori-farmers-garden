'use client'

import { useEffect, useState } from 'react'
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

  // Animation loop
  useEffect(() => {
    let animationFrameId: number
    let lastTime = performance.now()
    const speed = 0.05 // Pixels per ms

    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      setOffset((prev) => {
        const newOffset = prev + speed * deltaTime
        // Reset offset to loop seamlessly
        // We have 5 posts, spacing is 500px -> total width 2500px
        return newOffset % (500 * INSTAGRAM_POSTS.length)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Helper to calculate card style based on position
  const getCardStyle = (index: number) => {
    const cardWidth = 400 // Increased from 280
    const gap = 100 // Increased gap
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
    // Container width is roughly 1200px (max-w-6xl)
    // Let's say center is 0
    const containerCenter = 600 // Half of 1200
    const relativeX = x - containerCenter + itemWidth / 2 // Center of the card relative to container center

    // Parabola: y = a * x^2 + c
    // SVG Curve: Start/End at Y=20, Center at Y=220.
    // In CSS coords (relative to container top):
    // Center (x=0) -> y=220 (Lowest point)
    // Edges (x=+-600) -> y=20 (Highest point)
    // Formula: y = 220 - k * x^2
    // At x=600: 20 = 220 - k * 360000
    // 200 = k * 360000
    // k = 200 / 360000 = 1 / 1800

    const k = 200 / (600 * 600)
    const ropeY = 220 - k * relativeX * relativeX

    // Rotation: derivative of the curve
    // y' = -2 * k * x
    // Slope is negative on right (going up? No, y decreases as x increases away from center? Wait.)
    // Formula: y = 220 - kx^2.
    // x=0 -> 220. x=10 -> 219. (Going UP visually, decreasing Y value).
    // So slope is negative.
    // Visual: Rope goes UP to the right. /
    // Slope < 0.
    // Rotation should be negative (counter-clockwise) for / ?
    // No, standard rotation: + is clockwise.
    // / is negative slope in CSS coords? (x+, y-). Yes.
    // We want card to tilt /. That is NEGATIVE rotation (counter-clockwise).
    // My formula y' = -2kx. For x>0, y' < 0.
    // atan(y') will be negative.
    // Let's check Left side (x<0).
    // y' = -2k(-x) = +2kx > 0.
    // Slope is positive (x+, y+). Going DOWN visually?
    // Formula y = 220 - kx^2.
    // x=-10 -> 219. x=0 -> 220.
    // As x increases (moves right), y increases (moves down).
    // So slope is positive. Visual: \
    // We want card to tilt \. That is POSITIVE rotation (clockwise).
    // atan(y') will be positive.
    // So `rotation = Math.atan(y')` should work directly.

    const rotation = Math.atan(-2 * k * relativeX) * (180 / Math.PI)

    // Adjust Y to align clips with rope
    // ropeY is the Y position of the rope itself.
    // We want the CLIPS (top of card) to be at ropeY.
    // Card is centered by translate.
    // If we translate by ropeY, the CENTER of the card is at ropeY.
    // We want the TOP of the card to be at ropeY.
    // Card height is roughly 500px (width 400 + padding + image + text).
    // Half height is ~250.
    // We want top of card at ropeY.
    // So center should be at ropeY + 250.
    const cardHalfHeight = 230 // Approximate for 400px width card
    const finalY = ropeY + cardHalfHeight - 20 // -20 fine tuning for clip position

    // Opacity/Visibility
    // If x is way off screen, hide it
    const isVisible = x > -600 && x < 1800

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
    <section className="py-24 px-6 bg-ws-background font-zenKakuGothicNew overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-ws-red font-script">News</h2>
        </div>
        <div className="text-center mb-16">
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
        <div className="relative h-[600px] w-full overflow-hidden">
          {/* Single Large Rope SVG */}
          <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible">
            {/* 
              Curve matching our math:
              Start: (-600, 20)
              Control: (0, 220) -> Quadratic bezier approximation for parabola
              End: (600, 20)
              
              Note: SVG coordinates are 0 to 100% width.
              Center is 50%.
              y=20 at 0% and 100%.
              y=120 at 50%.
            */}
            <path
              d="M -100,20 Q 50%,220 110%,20"
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
                className="group block bg-white p-4 pb-8 rounded-sm shadow-lg hover:shadow-2xl w-[400px]"
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
                <div className="p-6">
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
