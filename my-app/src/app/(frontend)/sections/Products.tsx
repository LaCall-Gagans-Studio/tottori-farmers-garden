'use client'

import { useState } from 'react'
import Image from 'next/image'

// --- Types ---
type Category = 'All' | 'Meat' | 'Dairy' | 'Vegetables' | 'Processed'

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

const CATEGORIES: Category[] = ['All', 'Meat', 'Dairy', 'Vegetables', 'Processed']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts =
    selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-24 px-6 bg-ws-background text-ws-black font-zenKakuGothicNew">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-ws-green font-script">
            Products
          </h2>
          <p className="text-ws-black/70 text-lg">
            鳥取の自然が育んだ、至高の味わいをお届けします。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-ws-primary text-white border-ws-primary shadow-lg scale-105'
                  : 'bg-white text-ws-black border-ws-gray hover:border-ws-primary hover:text-ws-primary'
              }`}
            >
              {cat === 'All'
                ? 'すべて'
                : cat === 'Meat'
                  ? 'お肉'
                  : cat === 'Dairy'
                    ? '乳製品'
                    : cat === 'Vegetables'
                      ? '野菜'
                      : '加工品'}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                  <h3 className="text-xl font-bold text-ws-black group-hover:text-ws-primary transition-colors">
                    {product.title}
                  </h3>
                  <span className="text-lg font-bold text-ws-primary">
                    ¥{product.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-ws-black/60 text-sm line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center text-ws-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                  詳細を見る <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                  <h3 className="text-3xl font-bold mb-2 font-zenKakuGothicAntique">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-ws-black/50 mb-6 flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-ws-tertiary/50"></span>
                    産地: {selectedProduct.origin}
                  </p>
                  <p className="text-ws-black/80 leading-relaxed mb-8">
                    {selectedProduct.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-ws-gray">
                    <span className="text-3xl font-bold text-ws-primary">
                      ¥{selectedProduct.price.toLocaleString()}
                      <span className="text-sm text-ws-black/50 font-normal ml-1">(税込)</span>
                    </span>
                    <button className="bg-ws-black text-white px-8 py-3 rounded-full font-bold hover:bg-ws-primary hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      カートに入れる
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
