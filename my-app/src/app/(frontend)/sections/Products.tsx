export default function Products() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">商品一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow">商品A</div>
        <div className="border p-4 rounded shadow">商品B</div>
        <div className="border p-4 rounded shadow">商品C</div>
      </div>
    </div>
  )
}
