'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full h-screen md:h-[130vh] flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-[center_60%] md:object-[center_40%]"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Cloud 1 - Left Top (Large) */}
      <div
        className="absolute top-[25%] md:top-[12%] left-[8%] w-24 md:w-72 h-16 md:h-48 z-[15] opacity-70"
        style={{
          animation: 'fadeIn 1s ease-out 0s forwards',
        }}
      >
        <Image src="/images/kumo-1.png" alt="" fill className="object-contain" priority />
      </div>

      {/* Cloud 2 - Left Middle (Small) */}
      <div
        className="absolute top-[45%] md:top-[35%] left-[5%] w-20 md:w-48 h-14 md:h-32 z-[15] opacity-70"
        style={{
          animation: 'fadeIn 1s ease-out 2s forwards',
        }}
      >
        <Image src="/images/kumo-3.png" alt="" fill className="object-contain" />
      </div>

      {/* Cloud 3 - Right Top (Medium) */}
      <div
        className="absolute top-[28%] md:top-[18%] right-[12%] w-22 md:w-60 h-16 md:h-40 z-[15] opacity-70"
        style={{
          animation: 'fadeIn 1s ease-out 4s forwards',
        }}
      >
        <Image src="/images/kumo-2.png" alt="" fill className="object-contain" />
      </div>

      {/* Cloud 4 - Right Middle (Small) */}
      <div
        className="absolute top-[42%] md:top-[32%] right-[5%] w-20 md:w-52 h-14 md:h-36 z-[15] opacity-70"
        style={{
          animation: 'fadeIn 1s ease-out 6s forwards',
        }}
      >
        <Image src="/images/kumo-3.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-start pt-20 md:pt-32 h-full text-white px-4">
        <div
          className="relative w-32 h-16 md:w-56 md:h-28 mb-4 md:mb-6"
          style={{
            animation: 'slideInFromRight 1.2s ease-out',
          }}
        >
          <Image
            src="/images/splash-logo.png"
            alt="鳥取ファーマーズガーデン"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p
          className="text-lg md:text-2xl font-medium tracking-wider font-mikachan mb-6 md:mb-8"
          style={{
            animation: 'slideInFromRight 1.2s. ease-out 0.3s both',
          }}
        >
          自然の恵みを、そのまま
        </p>
      </div>
    </div>
  )
}
