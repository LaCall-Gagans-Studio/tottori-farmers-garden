'use client'

import Image from 'next/image'

// --- Types ---
interface NewsItem {
  id: string
  imageUrl: string
  date: string
  caption: string
  url?: string
}

// --- Dummy Data ---
const RESTAURANT_ITEMS: NewsItem[] = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.27',
    caption:
      '地元の食材をふんだんに使った冬の新作コース料理が始まりました。🍷 #鳥取レストラン #地産地消',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.25',
    caption: '自家製ハーブティーで心も体も温まるひとときを。🌿',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1550966842-2862cb996dd4?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.20',
    caption: 'テラス席からの夕景。贅沢な時間をお過ごしください。🌅',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.15',
    caption: 'シェフ特製のデザートプレート。お祝い事にも最適です。🎂',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    date: '2025.11.10',
    caption: '新鮮な野菜のグリル。素材本来の味をお楽しみください。🥗',
  },
]

// Background image opacity (0-1) - currently handled by inner white div

export default function Restaurant() {
  const pickupItem = RESTAURANT_ITEMS[0]
  const sideItems = RESTAURANT_ITEMS.slice(1, 5)

  return (
    <section
      id="restaurant"
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
        {/* Decoration Images */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -left-10 md:-left-20 w-48 h-40 md:w-80 md:h-64">
            <Image
              src="/images/news-decoration-left.png"
              alt="Decoration Left"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-0 right-0 w-48 h-64 md:w-80 md:h-96">
            <Image
              src="/images/news-decoration-right.png"
              alt="Decoration Right"
              fill
              className="object-contain object-top object-right"
            />
          </div>
        </div>

        {/* Title */}
        <div className="relative w-[90vw] h-32 md:w-[600px] md:h-48 mb-8 md:mb-12">
          {/* Using a placeholder or the same title image for now, user can change later */}
          <Image
            src="/images/news_title.png"
            alt="レストラン情報"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content Grid */}
        <div className="w-full max-w-7xl">
          {/* Mobile Layout: Simple Stack */}
          <div className="flex flex-col gap-12 lg:hidden">
            {/* Pickup */}
            <a
              href={pickupItem.url || '#'}
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
                  src={pickupItem.imageUrl}
                  alt={pickupItem.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-lg font-bold text-gray-800 line-clamp-3 leading-relaxed px-2">
                {pickupItem.caption}
              </p>
            </a>
            {/* Standard Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {sideItems.map((post) => (
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

          {/* Desktop Layout: Big Right, Small Left */}
          <div className="hidden lg:grid grid-cols-4 gap-x-8 gap-y-0 items-start">
            {/* Left Column Row 1: Images 1 & 2 */}
            {sideItems.slice(0, 2).map((post, idx) => (
              <div
                key={`img-top-${post.id}`}
                className={`col-span-1 row-start-1 col-start-${idx + 1}`}
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

            {/* Left Column Row 2: Captions 1 & 2 */}
            {sideItems.slice(0, 2).map((post, idx) => (
              <div
                key={`txt-top-${post.id}`}
                className={`col-span-1 row-start-2 mb-6 px-1 col-start-${idx + 1}`}
              >
                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{post.caption}</p>
              </div>
            ))}

            {/* Left Column Row 3: Images 3 & 4 */}
            {sideItems.slice(2, 4).map((post, idx) => (
              <div
                key={`img-bot-${post.id}`}
                className={`col-span-1 row-start-3 col-start-${idx + 1}`}
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

            {/* Left Column Row 4: Captions 3 & 4 */}
            {sideItems.slice(2, 4).map((post, idx) => (
              <div
                key={`txt-bot-${post.id}`}
                className={`col-span-1 row-start-4 px-1 mt-4 col-start-${idx + 1}`}
              >
                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{post.caption}</p>
              </div>
            ))}

            {/* Right Column: Pickup (Large) */}
            <div className="col-span-2 row-span-3 row-start-1 col-start-3 relative flex flex-col h-full">
              <div className="absolute -top-10 -right-4 w-36 h-18 z-30 pointer-events-none drop-shadow-lg">
                <Image
                  src="/images/pickup-text.png"
                  alt="Pick UP!"
                  fill
                  className="object-contain"
                />
              </div>

              <a
                href={pickupItem.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full transition-all duration-500"
              >
                <div className="relative flex-1 w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100 mb-4">
                  <Image
                    src={pickupItem.imageUrl}
                    alt={pickupItem.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </a>
            </div>

            {/* Right Column Row 4: Pickup Caption */}
            <div className="col-span-2 row-start-4 col-start-3 px-2 mt-4">
              <p className="text-base text-gray-800 line-clamp-3 leading-relaxed font-bold">
                {pickupItem.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
