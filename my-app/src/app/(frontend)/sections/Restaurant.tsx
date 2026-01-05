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
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 01',
    caption: '鳥取和牛の極上ステーキ',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 02',
    caption: '採れたてガーデンサラダ',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 03',
    caption: '自家製生パスタのボロネーゼ',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 04',
    caption: '季節の地野菜ポタージュ',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 05',
    caption: '大山どりのハーブグリル',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 06',
    caption: 'パティシエ特製デザート',
  },
  {
    id: '7',
    imageUrl:
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 07',
    caption: '搾りたて旬のフルーツジュース',
  },
  {
    id: '8',
    imageUrl:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    date: 'Menu 08',
    caption: '石窯で焼いた自家製パン',
  },
]

export default function Restaurant() {
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
          <div className="absolute -top-10 -right-10 md:-right-20 w-48 h-40 md:w-80 md:h-64">
            <Image
              src="/images/news-decoration-right.png"
              alt="Decoration Right"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-[300px] h-24 md:w-[400px] md:h-32">
            <Image
              src="/images/restaurant_title_v2.png"
              alt="レストラン情報"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-2 text-center">
            <p className="text-red-600 font-bold text-lg md:text-xl">営業時間 11:00〜14:30</p>
            <p className="text-red-600 font-bold text-sm md:text-base">(ラストオーダー 14:00)</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
            {RESTAURANT_ITEMS.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 mb-3">
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="px-1">
                  <p className="text-sm md:text-base text-gray-800 font-bold leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
