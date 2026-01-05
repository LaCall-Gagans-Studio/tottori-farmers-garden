import Image from 'next/image'

export default function Contact() {
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
        <div className="max-w-6xl mx-auto ">
          <div className="flex justify-center mb-12">
            <div className="relative w-[300px] h-24 md:w-[400px] md:h-32">
              <Image
                src="/images/contact_title_v2.png"
                alt="お問い合わせ"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <form className="space-y-4 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="お名前"
              className="w-full p-4 border border-red-600 rounded-lg focus:outline-none transition-colors placeholder-red-600"
            />
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full p-4 border border-red-600 rounded-lg focus:outline-none transition-colors placeholder-red-600"
            />
            <textarea
              placeholder="お問い合わせ内容"
              rows={6}
              className="w-full p-4 border border-red-600 rounded-lg focus:outline-none transition-colors placeholder-red-600"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-12 py-4 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
