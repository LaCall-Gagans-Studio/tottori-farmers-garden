import Image from 'next/image'

export default function Contact() {
  return (
    <section className="py-24 px-6 font-mikachan">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-center mb-12">
          <div className="relative w-96 h-40">
            <Image
              src="/images/contact_title.png"
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
    </section>
  )
}
