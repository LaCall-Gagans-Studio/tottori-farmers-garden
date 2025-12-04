import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-16 font-zenKakuGothicNew">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Side: Text Area (Company, Address, Phone) */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-80">
            <div>
              <div className="relative w-96 h-24 mb-2">
                <Image
                  src="/images/header-logo.png"
                  alt="鳥取ファーマーズガーデン"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-white/80">地元の新鮮な食材と、心温まる体験を。</p>
            </div>

            <div className="space-y-4 text-lg">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="font-bold min-w-[5em]">住所</span>
                <span>
                  〒680-0864
                  <br />
                  鳥取県鳥取市吉成７３１−１
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold min-w-[5em]">電話番号</span>
                <a href="tel:0857-50-0910" className="hover:underline font-bold">
                  0857-50-0910
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map Area (Map Only) */}
          <div className="w-full md:w-1/2">
            <div className="h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.667597148846!2d134.2256849!3d35.4643093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35558e4d0c0d0d0d%3A0x0!2zMzXCsDI3JzUxLjUiTiAxMzTCsDEzJzMyLjUiRQ!5e0!3m2!1sja!2sjp!4v1630000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            {/* Instagram Link (Right Aligned) */}
            <div className="flex justify-end mt-4">
              <a
                href="https://www.instagram.com/farmars_garden/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
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

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} Tottori Farmers Garden. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
