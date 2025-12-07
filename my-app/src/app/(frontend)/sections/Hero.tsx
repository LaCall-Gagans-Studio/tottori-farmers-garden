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
        <div
          className="relative w-80 h-40 md:w-96 md:h-48 mb-6"
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
          className="text-xl md:text-2xl font-medium tracking-wider font-zenKakuGothicNew"
          style={{
            animation: 'slideInFromRight 1.2s. ease-out 0.3s both',
          }}
        >
          自然の恵みを、そのまま
        </p>
        <div
          className="mt-8"
          style={{
            animation: 'slideInFromRight 1.2s ease-out 0.6s both',
          }}
        >
          <a
            href="https://www.instagram.com/farmars_garden/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
