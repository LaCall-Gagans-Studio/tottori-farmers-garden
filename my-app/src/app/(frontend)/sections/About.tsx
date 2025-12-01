'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="py-32 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-ws-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            About Us
          </span>
          <div className="flex justify-center mb-6">
            <div className="relative w-96 h-40">
              <Image
                src="/images/about_title.png"
                alt="私たちが大切にしていること"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-ws-black/70 text-lg font-zenKakuGothicNew max-w-2xl mx-auto leading-relaxed">
            鳥取の豊かな自然と、そこに生きる人々の想いをつなぐ。
            <br />
            食卓に笑顔と彩りを届けるために。
          </p>
        </div>

        {/* Company Section (Now Top) */}
        <div className="mb-32 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-ws-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-ws-secondary/5 rounded-full blur-3xl -z-10"></div>

          <div className="bg-white/80 backdrop-blur-sm border border-ws-black/5 rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-ws-primary"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-ws-black text-white rounded-full text-sm font-bold mb-8 tracking-wider">
                FARMERS GARDEN
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-10 font-zenKakuGothicAntique leading-tight">
                鳥取ファーマーズガーデン
              </h3>

              <div className="space-y-8 text-lg text-ws-black/80 font-zenKakuGothicNew leading-loose">
                <p>
                  私たちは、
                  <span className="font-bold text-ws-black border-b-4 border-ws-primary/30 px-1 mx-1">
                    「鳥取県産のものにこだわり」
                  </span>
                  、
                  <br className="hidden md:block" />
                  地域の生産者と消費者を結ぶ架け橋となります。
                </p>
                <p>
                  <span className="font-bold text-ws-black border-b-4 border-ws-primary/30 px-1 mx-1">
                    「地産地消を手軽に」
                  </span>
                  をモットーに、
                  <br className="hidden md:block" />
                  毎日の食卓がもっと楽しく、もっと豊かになるような
                  <br className="hidden md:block" />
                  商品と体験を提供し続けます。
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                  {
                    title: 'Fresh',
                    desc: '朝採れの新鮮な野菜や果物を、その日のうちに。',
                    icon: '🌿',
                  },
                  { title: 'Local', desc: '鳥取の土地で育った、安心・安全な食材。', icon: '🗻' },
                  { title: 'Connect', desc: '生産者の顔が見える、温かいつながり。', icon: '🤝' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-ws-background p-8 rounded-2xl border border-ws-black/5 hover:border-ws-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-ws-primary font-zenKakuGothicAntique">
                      {item.title}
                    </h4>
                    <p className="text-sm text-ws-black/70 leading-relaxed font-zenKakuGothicNew">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Representative Section (Now Bottom) */}
        <div className="flex flex-col md:flex-row items-center gap-16 relative">
          {/* Mint Color Background Blob */}
          <div className="absolute top-1/2 right-0 md:right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#BCE2BE] rounded-full blur-[100px] opacity-40 -z-10"></div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="pl-0 md:pl-10 border-l-0 md:border-l-4 border-ws-primary/20 md:py-4">
              <div className="inline-block px-4 py-1 bg-[#BCE2BE] text-ws-black rounded-full text-sm font-bold mb-6">
                REPRESENTATIVE
              </div>
              <h3 className="text-4xl font-bold mb-2 font-zenKakuGothicAntique">河上 美穂</h3>
              <span className="text-ws-primary font-script text-2xl block mb-8">Miho Kawakami</span>

              <div className="space-y-6 text-ws-black/80 font-zenKakuGothicNew leading-relaxed text-lg">
                <p>20xx年より鳥取ファーマーズガーデンを開業。</p>
                <p>
                  「食を通じて地域を元気にしたい」という想いから、
                  地元農家さんと協力して、新鮮な食材を皆様にお届けしています。
                </p>
                <p>
                  また、地域の子どもたちに安心できる食事を提供する
                  「子ども食堂」の活動にも積極的に参加しています。
                </p>
                <p className="text-sm text-ws-black/50 mt-4">※ミントカラーが好き</p>
              </div>
            </div>
          </div>

          {/* Image with Cow Shape Mask */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 border-2 border-ws-black/5 rounded-full scale-110"></div>
              <div
                className="absolute inset-0 bg-ws-gray/20 drop-shadow-2xl"
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
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
