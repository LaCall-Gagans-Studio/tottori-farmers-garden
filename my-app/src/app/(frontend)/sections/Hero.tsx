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

      <h1 className="text-5xl font-bold mb-4 font-zenKakuGothicAntique drop-shadow-lg">
        鳥取ファーマーズガーデン
      </h1>
      <p className="text-xl font-zenKakuGothicNew drop-shadow-md">
        新鮮な野菜と楽しい体験をお届けします
      </p>
    </div>
  )
}
