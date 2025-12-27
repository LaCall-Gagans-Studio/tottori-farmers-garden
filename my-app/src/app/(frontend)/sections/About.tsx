'use client'

import Image from 'next/image'

export default function About() {
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
      }}
    >
      <div className="w-full min-h-full bg-white relative z-10 py-20 px-6">
        {/* Top Red Semi-circle connecting to previous section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[99%] z-20">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[100px] md:h-[150px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="hidden"
            ></path>
            {/* Simple convex curve (semi-circle like) */}
            <path d="M0,0 C600,200 600,200 1200,0 V120 H0 V0Z" fill="#C62828"></path>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative w-80 h-32 md:w-96 md:h-40">
                <Image
                  src="/images/about_nav.png"
                  alt="私たちについて"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-40 flex flex-col items-center text-center">
            {/* Logo */}
            <div className="relative w-72 h-20 md:w-96 md:h-24 mb-12">
              <Image
                src="/images/splash-logo.png"
                alt="鳥取ファーマーズガーデン"
                fill
                className="object-contain"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full md:w-[700px] h-[300px] md:h-[450px] mb-16">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/tatemono.png"
                  alt="Farm landscape"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-lg md:text-xl text-gray-800 font-mikachan leading-[2.5] tracking-wider">
              <p className="mb-8">
                私たちは、
                <span className="text-xl md:text-2xl font px-2 border-b border-gray-800/30">
                  「鳥取県産のものにこだわり」
                </span>
                <br />
                地域の生産者と消費者を結ぶ架け橋となります。
              </p>
              <p>
                <span className="text-xl md:text-2xl font px-2 border-b border-gray-800/30">
                  「地産地消を手軽に」
                </span>
                をモットーに、
                <br />
                毎日の食卓がもっと楽しく、もっと豊かになるような
                <br />
                商品と体験を提供し続けます。
              </p>
            </div>
          </div>

          {/* Representative Section */}
          <div className="flex flex-col items-center text-center">
            {/* Name */}
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font font-mikachan text-gray-800 mb-2">
                河上 美穂
              </h3>
              <p className="text-gray-600 text-sm tracking-widest">REPRESENTATIVE</p>
            </div>

            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-16 shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-700 bg-white p-2 rounded-full overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/kawakami-miho.jpg"
                  alt="河上美穂"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-lg md:text-xl text-gray-800 font-mikachan leading-[2.5] tracking-wider">
              <p className="mb-8">20xx年より鳥取ファーマーズガーデンを開業。</p>
              <p className="mb-8">
                「食を通じて地域を元気にしたい」という想いから、
                <br />
                地元農家さんと協力して、
                <br />
                新鮮な食材を皆様にお届けしています。
              </p>
              <p>
                また、地域の子どもたちに安心できる食事を提供する
                <br />
                「子ども食堂」の活動にも積極的に参加しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
