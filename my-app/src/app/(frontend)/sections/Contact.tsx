export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
      <form className="space-y-4">
        <input type="text" placeholder="お名前" className="w-full p-2 border rounded" />
        <input type="email" placeholder="メールアドレス" className="w-full p-2 border rounded" />
        <textarea placeholder="お問い合わせ内容" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          送信
        </button>
      </form>
    </div>
  )
}
