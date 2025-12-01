'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-ws-black font-script">
            About Us
          </h2>
          <p className="text-ws-black/70 text-lg font-zenKakuGothicNew">
            鳥取の豊かな自然と、そこに生きる人々の想いをつなぐ。
          </p>
        </div>

        {/* Representative Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32 relative">
          {/* Mint Color Background Blob */}
          <div className="absolute top-1/2 left-0 md:left-10 -translate-y-1/2 w-96 h-96 bg-[#BCE2BE] rounded-full blur-3xl opacity-50 -z-10"></div>

          {/* Image with Cow Shape Mask */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div
                className="absolute inset-0 bg-ws-gray/20"
                style={{
                  maskImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40,80 C30,60 50,40 70,50 C80,30 120,30 130,50 C150,40 170,60 160,80 C170,100 160,140 130,160 C100,180 100,180 70,160 C40,140 30,100 40,80 Z' fill='black'/%3E%3C/svg%3E\")",
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40,80 C30,60 50,40 70,50 C80,30 120,30 130,50 C150,40 170,60 160,80 C170,100 160,140 130,160 C100,180 100,180 70,160 C40,140 30,100 40,80 Z' fill='black'/%3E%3C/svg%3E\")",
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                  alt="河上美穂"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-[#BCE2BE] text-ws-black rounded-full text-sm font-bold mb-4">
              代表紹介
            </div>
            <h3 className="text-3xl font-bold mb-2 font-zenKakuGothicAntique">河上 美穂</h3>
            <span className="text-ws-black/50 text-sm block mb-6">Miho Kawakami</span>
            <div className="space-y-4 text-ws-black/80 font-zenKakuGothicNew leading-relaxed">
              <p>
                20xx年より鳥取ファーマーズガーデンを開業。
                <br />
                「食を通じて地域を元気にしたい」という想いから、
                地元農家さんと協力して、新鮮な食材を皆様にお届けしています。
              </p>
              <p>
                また、地域の子どもたちに安心できる食事を提供する
                「子ども食堂」の活動にも積極的に参加しています。
              </p>
              <p>ミントカラーが好き</p>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="bg-ws-gray/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ws-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-ws-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 border border-ws-black/20 text-ws-black rounded-full text-sm font-bold mb-6">
              企業紹介
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 font-zenKakuGothicAntique">
              鳥取ファーマーズガーデン
            </h3>
            <div className="space-y-6 text-lg text-ws-black/80 font-zenKakuGothicNew leading-loose">
              <p>
                私たちは、
                <span className="font-bold text-ws-black bg-[#BCE2BE]/50 px-1">
                  「鳥取県産のものにこだわり」
                </span>
                、
                <br className="hidden md:block" />
                地域の生産者と消費者を結ぶ架け橋となります。
              </p>
              <p>
                <span className="font-bold text-ws-black bg-[#BCE2BE]/50 px-1">
                  「地産地消を手軽に」
                </span>
                をモットーに、
                <br className="hidden md:block" />
                毎日の食卓がもっと楽しく、もっと豊かになるような
                <br className="hidden md:block" />
                商品と体験を提供し続けます。
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold mb-2 text-ws-primary">Fresh</h4>
                <p className="text-sm text-ws-black/70">
                  朝採れの新鮮な野菜や果物を、その日のうちに。
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold mb-2 text-ws-primary">Local</h4>
                <p className="text-sm text-ws-black/70">鳥取の土地で育った、安心・安全な食材。</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold mb-2 text-ws-primary">Connect</h4>
                <p className="text-sm text-ws-black/70">生産者の顔が見える、温かいつながり。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
