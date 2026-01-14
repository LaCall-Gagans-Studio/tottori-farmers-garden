'use client'

import Image from 'next/image'

// --- Types ---
interface InstagramPost {
  id: string
  imageUrl: string
  date: string
  caption: string
  url?: string // Optional: direct link to Instagram post
}

// --- Dummy Data ---
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.27',
    caption: 'クリスマスケーキ、予約開始しました🎅 #鳥取 #農業',
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
    imageUrl: '/images/instagram-reel-4.jpg',
    date: '2025.11.15',
    caption: '8月の営業日カレンダーを更新しました！',
    url: 'https://www.instagram.com/reel/DM2tjIHhdjK/?igsh=MW0yYzZ1Y2RxcnY5bw==',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.10',
    caption: '大山が綺麗に見えました⛰️ 空気が澄んでいて気持ちいい！',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.05',
    caption: '秋の味覚、さつまいも掘り体験🍠 #鳥取 #収穫体験',
  },
  {
    id: '7',
    imageUrl:
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.01',
    caption: '朝霧に包まれた農園。幻想的な風景です🌫️',
  },
  {
    id: '8',
    imageUrl:
      'https://images.unsplash.com/photo-1622212611568-32d624f5f0ed?auto=format&fit=crop&q=80&w=800',
    date: '2025.10.28',
    caption: 'ハロウィンイベント開催！カボチャのランタン作り🎃',
  },

  {
    id: '10',
    imageUrl:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    date: '2025.10.20',
    caption: '秋晴れの空の下、稲刈りが終わりました🌾',
  },
]

// Background image opacity (0-1) - currently handled by inner white div

export default function News() {
  // Use the first 3 posts
  const pickupPost = INSTAGRAM_POSTS[0]
  const sidePosts = INSTAGRAM_POSTS.slice(1, 5)

  return (
    <section
      className="w-full font-mikachan overflow-hidden relative p-3 md:p-5"
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url(/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="w-full min-h-full bg-white relative z-10 flex flex-col items-center pt-20 pb-20 px-4 md:px-6">
        {/* Title */}
        <div className="relative w-[260px] h-20 md:w-[400px] md:h-32 mb-12">
          <Image
            src="/images/news_title_v4.png"
            alt="最新情報"
            fill
            className="object-contain"
            priority
          />
          {/* Animation positioned: Left-side of the title, flipped horizontally, overlapped on mobile to prevent overflow */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 -mr-6 md:mr-4 w-20 h-20 md:w-24 md:h-24">
            <Image
              src="/images/news-cow-v2-1.png"
              alt=""
              fill
              className="object-contain absolute inset-0 -scale-x-100"
              style={{ animation: 'news-cow-step-1 3s infinite' }}
            />
            <Image
              src="/images/news-cow-v2-2.png"
              alt=""
              fill
              className="object-contain absolute inset-0 -scale-x-100"
              style={{ animation: 'news-cow-step-2 3s infinite' }}
            />
            <Image
              src="/images/news-cow-v2-3.png"
              alt=""
              fill
              className="object-contain absolute inset-0 -scale-x-100"
              style={{ animation: 'news-cow-step-3 3s infinite' }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-full max-w-7xl">
          {/* Mobile Layout: Simple Stack */}
          <div className="flex flex-col gap-12 lg:hidden">
            {/* Pickup - Slightly larger aspect ratio for mobile prominence */}
            <a
              href={pickupPost.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col w-full relative"
            >
              {/* Pickup Decoration Image - Mobile */}
              <div className="absolute -top-6 -right-2 w-28 h-14 z-30 pointer-events-none drop-shadow-lg">
                <Image
                  src="/images/pickup-text.png"
                  alt="Pick UP!"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100 mb-4">
                <Image
                  src={pickupPost.imageUrl}
                  alt={pickupPost.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-lg font-bold text-gray-800 line-clamp-3 leading-relaxed px-2">
                {pickupPost.caption}
              </p>
            </a>
            {/* Standard Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {sidePosts.slice(0, 4).map((post) => (
                <a
                  key={post.id}
                  href={post.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col w-full"
                >
                  <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 mb-3">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed px-1">
                    {post.caption}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Layout: Precise Aligned Grid (Pickup Left, 4 items Right) */}
          <div className="hidden lg:grid grid-cols-4 gap-x-8 gap-y-0 items-start">
            {/* Left Column: Pickup (Large) - Spans 3 rows to align with right side images */}
            <div className="col-span-2 row-span-3 col-start-1 row-start-1 relative flex flex-col h-full">
              {/* Pickup Decoration Image - Desktop */}
              <div className="absolute -top-10 -right-4 w-36 h-18 z-30 pointer-events-none drop-shadow-lg">
                <Image
                  src="/images/pickup-text.png"
                  alt="Pick UP!"
                  fill
                  className="object-contain"
                />
              </div>

              <a
                href={pickupPost.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full transition-all duration-500"
              >
                <div className="relative flex-1 w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100">
                  <Image
                    src={pickupPost.imageUrl}
                    alt={pickupPost.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </a>
            </div>

            {/* Right Column Row 1: Images 1 & 2 */}
            {sidePosts.slice(0, 2).map((post, idx) => (
              <div
                key={`img-top-${post.id}`}
                className={`col-span-1 row-start-1 col-start-${idx + 3}`}
              >
                <a
                  href={post.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-3/2 w-full overflow-hidden rounded-2xl shadow-md border border-gray-100"
                >
                  <Image
                    src={post.imageUrl}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </a>
              </div>
            ))}

            {/* Right Column Row 2: Captions 1 & 2 */}
            {sidePosts.slice(0, 2).map((post, idx) => (
              <div
                key={`txt-top-${post.id}`}
                className={`col-span-1 row-start-2 mb-6 px-1 col-start-${idx + 3}`}
              >
                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{post.caption}</p>
              </div>
            ))}

            {/* Right Column Row 3: Images 3 & 4 */}
            {sidePosts.slice(2, 4).map((post, idx) => (
              <div
                key={`img-bot-${post.id}`}
                className={`col-span-1 row-start-3 col-start-${idx + 3}`}
              >
                <a
                  href={post.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-3/2 w-full overflow-hidden rounded-2xl shadow-md border border-gray-100"
                >
                  <Image
                    src={post.imageUrl}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </a>
              </div>
            ))}

            {/* Row 4: Captions for Left Item and Right Items 3 & 4 */}
            <div className="col-span-2 row-start-4 col-start-1 px-2 mt-4">
              <p className="text-base text-gray-800 line-clamp-3 leading-relaxed font-bold">
                {pickupPost.caption}
              </p>
            </div>
            {sidePosts.slice(2, 4).map((post, idx) => (
              <div
                key={`txt-bot-${post.id}`}
                className={`col-span-1 row-start-4 px-1 mt-4 col-start-${idx + 3}`}
              >
                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
