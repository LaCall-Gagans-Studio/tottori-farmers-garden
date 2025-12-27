'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

// --- Types ---
type Category = 'All' | 'Seasonal' | 'New' | 'Meat' | 'Dairy' | 'Vegetables' | 'Processed' | 'Goods'

interface Product {
  id: string
  title: string
  price: number
  origin: string
  description: string
  category: Category
  imageUrl: string
}

// --- Dummy Data ---
const PRODUCTS: Product[] = [
  {
    id: '1',
    title: '牛100%ハンバーグ',
    price: 12000,
    origin: '鳥取県',
    description:
      '鳥取の豊かな自然で育った黒毛和牛。口の中でとろけるような食感と、濃厚な旨味が特徴です。特別な日のディナーに最適です。',
    category: 'Meat',
    imageUrl:
      'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: '焼きしゃぶ丼',
    price: 850,
    origin: '鳥取県大山町',
    description:
      '大山山麓の新鮮な生乳を100%使用した、クリーミーでコクのあるバターです。トーストや料理の隠し味にどうぞ。',
    category: 'Dairy',
    imageUrl:
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: '鳥取地鶏ピヨ',
    price: 3500,
    origin: '鳥取県',
    description:
      'しっかりとした歯ごたえと、噛むほどに溢れ出る旨味が自慢の地鶏です。焼き鳥や鍋料理におすすめです。',
    category: 'Meat',
    imageUrl:
      'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: '砂丘らっきょう',
    price: 600,
    origin: '鳥取砂丘',
    description:
      '鳥取砂丘の砂地で育った、シャキシャキとした食感がたまらないらっきょうです。甘酢漬けでさっぱりと。',
    category: 'Vegetables',
    imageUrl:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: '自家製ソーセージセット',
    price: 2800,
    origin: '鳥取県',
    description:
      '厳選された豚肉とスパイスを使用した、無添加・手作りのソーセージセット。バーベキューや朝食にぴったり。',
    category: 'Processed',
    imageUrl:
      'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: '濃厚ジャージー牛乳',
    price: 400,
    origin: '鳥取県蒜山',
    description:
      '蒜山高原のジャージー牛から搾った、濃厚で甘みのある牛乳です。そのまま飲むのはもちろん、カフェオレにも。',
    category: 'Dairy',
    imageUrl:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
  },
]

const CATEGORIES: Category[] = [
  'All',
  'Seasonal',
  'New',
  'Meat',
  'Dairy',
  'Vegetables',
  'Processed',
  'Goods',
]

const getCategoryLabel = (cat: Category): string => {
  const labels: Record<Category, string> = {
    All: 'すべて',
    Seasonal: '季節限定',
    New: '新製品',
    Meat: 'お肉',
    Dairy: '乳製品',
    Vegetables: '野菜',
    Processed: '加工品',
    Goods: 'グッズ',
  }
  return labels[cat]
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProducts =
    selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory)

  return (
    <section
      ref={sectionRef}
      className="w-full font-mikachan overflow-hidden relative p-3 md:p-5"
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url(/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full min-h-full bg-white relative z-10 pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center mb-0">
              <div className="relative w-[400px] h-70">
                <Image
                  src="/images/products_title_v2.png"
                  alt="商品情報"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Category Buttons - 2 Rows with Dotted Dividers */}
          <div className="mb-8 py-2">
            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Dotted Dividers - Full Height */}
              <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
                <div />
                <div className="border-l-2 border-dotted border-red-600" />
                <div className="border-l-2 border-dotted border-red-600" />
                <div className="border-l-2 border-dotted border-red-600" />
              </div>

              {/* First Row */}
              <div className="grid grid-cols-4 gap-0 mb-0 relative z-10">
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className="relative px-2 py-2 text-center font-mikachan text-lg md:text-xl font-bold transition-all duration-300 group w-full"
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          selectedCategory === cat
                            ? 'text-red-700'
                            : 'text-red-600 group-hover:text-red-700'
                        }`}
                      >
                        {getCategoryLabel(cat)}
                      </span>
                      {/* Category Marker Image */}
                      <div
                        className={`absolute inset-0 transition-all duration-300 ${
                          selectedCategory === cat
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-40'
                        }`}
                        style={{
                          transform:
                            selectedCategory === cat ? 'scale(1.1) rotate(-2deg)' : 'scale(0.9)',
                        }}
                      >
                        <Image
                          src="/images/category-marker.png"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Horizontal Dotted Divider */}
              <div className="w-full border-t-2 border-dotted border-red-600 my-2 relative z-10" />

              {/* Second Row */}
              <div className="grid grid-cols-4 gap-0 relative z-10">
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className="relative px-2 py-2 text-center font-mikachan text-lg md:text-xl font-bold transition-all duration-300 group w-full"
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          selectedCategory === cat
                            ? 'text-red-700'
                            : 'text-red-600 group-hover:text-red-700'
                        }`}
                      >
                        {getCategoryLabel(cat)}
                      </span>
                      {/* Category Marker Image */}
                      <div
                        className={`absolute inset-0 transition-all duration-300 ${
                          selectedCategory === cat
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-40'
                        }`}
                        style={{
                          transform:
                            selectedCategory === cat ? 'scale(1.1) rotate(2deg)' : 'scale(0.9)',
                        }}
                      >
                        <Image
                          src="/images/category-marker.png"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[400px]">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-ws-gray/30"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-ws-black shadow-sm">
                      {product.origin}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-ws-black group-hover:text-red-600 transition-colors">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-ws-black/60 text-sm line-clamp-2">{product.description}</p>
                    <div className="mt-4 flex items-center text-red-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                      詳細を見る <span className="ml-1">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center min-h-[400px]">
              <div className="relative w-64 h-64 mb-2 opacity-80">
                <Image
                  src="/images/tatemono.png"
                  alt="Coming Soon"
                  fill
                  className="object-contain grayscale"
                />
              </div>
              <p className="text-2xl font-bold text-gray-400 font-mikachan">ただいま準備中です。</p>
            </div>
          )}

          {/* Modal */}
          {selectedProduct && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
              onClick={() => setSelectedProduct(null)}
            >
              <div
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-ws-gray transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[300px]">
                    <Image
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-ws-secondary/20 text-ws-black text-xs font-bold mb-4 w-fit">
                      {selectedProduct.category === 'Meat'
                        ? 'お肉'
                        : selectedProduct.category === 'Dairy'
                          ? '乳製品'
                          : selectedProduct.category === 'Vegetables'
                            ? '野菜'
                            : selectedProduct.category === 'Processed'
                              ? '加工品'
                              : 'その他'}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 font-mikachan">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-ws-black/50 mb-6 flex items-center gap-2">
                      <span className="inline-block w-4 h-4 rounded-full bg-ws-tertiary/50"></span>
                      産地: {selectedProduct.origin}
                    </p>
                    <p className="text-ws-black/80 leading-relaxed mb-8">
                      {selectedProduct.description}
                    </p>
                    {/* Price and Cart button removed */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
