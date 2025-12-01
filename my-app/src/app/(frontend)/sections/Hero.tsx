import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="relative w-80 h-40 md:w-96 md:h-48 mb-6">
          <Image
            src="/images/splash-logo.png"
            alt="鳥取ファーマーズガーデン"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-xl md:text-2xl font-medium tracking-wider font-zenKakuGothicNew">
          自然の恵みを、そのまま食卓へ
        </p>
      </div>
    </div>
  )
}
