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
  // Duplicate posts to ensure smooth infinite scrolling
  const displayPosts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS]

  return (
    <section className="py-24 px-6 bg-ws-background font-zenKakuGothicNew overflow-hidden">
      <div className="max-w-full mx-auto">
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

        {/* Marquee Container */}
        <div className="relative w-full">
          <div
            className="flex gap-8 w-max animate-infinite-scroll hover:[animation-play-state:paused]"
            style={{
              animation: 'ticker 40s linear infinite',
            }}
          >
            {displayPosts.map((post, index) => (
              <div key={`${post.id}-${index}`} className="relative pt-12 w-[300px] flex-shrink-0">
                {/* Rope Segment (Connects to neighbors) */}
                <svg
                  className="absolute top-2 -left-[50%] w-[200%] h-24 z-10 pointer-events-none"
                  preserveAspectRatio="none"
                >
                  {/* A curve that goes through the clips */}
                  <path
                    d="M0,15 Q150,45 300,15"
                    fill="none"
                    stroke="#A0522D"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <a
                  href="https://www.instagram.com/farmars_garden/?igsh=MXB2NHp2cmppZXN1cA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white p-2 pb-4 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 relative transform hover:-translate-y-2 hover:rotate-1"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                  }}
                >
                  {/* Clips */}
                  <div className="absolute -top-3 left-[20%] w-3 h-8 bg-ws-wood border border-ws-black/20 rounded-sm z-30 shadow-sm"></div>
                  <div className="absolute -top-3 right-[20%] w-3 h-8 bg-ws-wood border border-ws-black/20 rounded-sm z-30 shadow-sm"></div>

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
                    <p className="text-xs text-ws-black/50 mb-2 font-bold">{post.date}</p>
                    <p className="text-sm text-ws-black/80 line-clamp-2">{post.caption}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
