import React from 'react'
import Link from 'next/link'

// If you use Next/Image in your project, you can swap <img> for <Image>.
// This file is self‑contained so you can drop it into `app/(frontend)/components/YouTubeHome.tsx`
// and render it from a page.

// -----------------------------
// Types & Mock Data
// -----------------------------

type Video = {
  id: string
  title: string
  channel: string
  meta: string // e.g., "7万 回視聴・7時間前"
  duration: string
  thumb: string
}

type Chip = {
  id: string
  label: string
  active?: boolean
}

const chips: Chip[] = [
  { id: 'all', label: 'すべて', active: true },
  { id: 'music', label: '音楽' },
  { id: 'news', label: 'ニュース' },
  { id: 'games', label: 'ゲーム' },
  { id: 'mix', label: 'ミックス' },
  { id: 'podcast', label: 'ポッドキャスト' },
  { id: 'hiphop', label: 'ヒップホップ' },
  { id: 'live', label: 'ライブ' },
  { id: 'uploaded', label: '最近アップロードされた動画' },
  { id: 'watch', label: '視聴済み' },
]

const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'ミックスリスト ‑ TORAUMA / 橘 [beat. 詩奏] (Official Music Video)',
    channel: 'ZORN、SugLawd Familiar、変態紳士クラブ など',
    meta: '本日更新',
    duration: '5:07',
    thumb: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: '70年ぶり日本で金鉱脈発見 期待は… ドルラッシュの再来？',
    channel: 'ANNnewsCH',
    meta: '7万 回視聴・7時間前',
    duration: '8:29',
    thumb: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: '【夫婦漫談】 二瓶有加 きしたかのの夫婦話 VS 高野夫妻のリアル夜話',
    channel: '佐久間宣行のNOBROCK TV',
    meta: '3.5万 回視聴・49分前',
    duration: '21:41',
    thumb: 'https://images.unsplash.com/photo-1541632680474-5f5711a1ce7a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '4',
    title: '第2次百年戦争 勃発 ‑ Europa Universalis Ⅵ',
    channel: 'ゲーム実況チャンネル',
    meta: '2.1万 回視聴・1日前',
    duration: '1:15:40',
    thumb: 'https://images.unsplash.com/photo-1520975922284-7b683db35dbc?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'playlist | Vinyl Jazz Hiphop | Nujabes',
    channel: 'playlist',
    meta: '23万 回視聴・2週間前',
    duration: '2:34:46',
    thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '6',
    title: '最新作を無双！最強のドイツ騎士団団長',
    channel: 'EU5 公式',
    meta: '9.8万 回視聴・3日前',
    duration: '10:11',
    thumb: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1400&auto=format&fit=crop',
  },
]

// -----------------------------
// Small atoms
// -----------------------------

function Icon({ name, className }: { name: string; className?: string }) {
  // minimal inline icons so you don't need any library
  const common = 'w-5 h-5'
  switch (name) {
    case 'menu':
      return <svg className={`${common} ${className ?? ''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    case 'search':
      return <svg className={`${common} ${className ?? ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
    case 'mic':
      return <svg className={`${common} ${className ?? ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v4a4 4 0 0 0 4 4z"/><path d="M19 10a7 7 0 0 1-14 0"/><path d="M12 19v3"/></svg>
    case 'bell':
      return <svg className={`${common} ${className ?? ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    case 'camera':
      return <svg className={`${common} ${className ?? ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3z"/></svg>
    default:
      return null
  }
}

function ChipPill({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={[
        'shrink-0 rounded-full px-4 py-2 text-sm',
        active
          ? 'bg-zinc-100 text-zinc-900 font-medium'
          : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
      ].join(' ')}
    >
      {label}
    </button>
  )
}

function VideoCard({ v }: { v: Video }) {
  return (
    <Link href={`/#/watch/${v.id}`} className="group block">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-800">
        <img src={v.thumb} alt={v.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
        <span className="absolute right-2 bottom-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-zinc-100">{v.duration}</span>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-700"/>
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-medium leading-snug text-zinc-100">{v.title}</h3>
          <p className="mt-1 text-xs text-zinc-400">{v.channel}</p>
          <p className="text-xs text-zinc-500">{v.meta}</p>
        </div>
      </div>
    </Link>
  )
}

// -----------------------------
// Layout parts
// -----------------------------

function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-zinc-800 bg-zinc-900/90 px-3 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/70">
      <button className="rounded p-2 text-zinc-200 hover:bg-zinc-800"><Icon name="menu"/></button>
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold text-red-500">▶︎</span>
        <span className="text-lg font-semibold tracking-tight">YouTube</span>
        <span className="ml-1 rounded bg-zinc-700 px-1.5 py-0.5 text-xs">Premium</span>
      </Link>

      <div className="mx-auto flex w-full max-w-3xl items-center gap-2">
        <div className="flex w-full overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
          <input
            className="w-full bg-transparent px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none"
            placeholder="検索"
          />
          <button className="grid place-items-center border-l border-zinc-700 px-4 hover:bg-zinc-800">
            <Icon name="search" />
          </button>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700"><Icon name="mic"/></button>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="rounded-full p-2 hover:bg-zinc-800"><Icon name="camera"/></button>
        <button className="rounded-full p-2 hover:bg-zinc-800"><Icon name="bell"/></button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
      </div>
    </header>
  )
}

function Sidebar() {
  const Item = ({ label }: { label: string }) => (
    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800">
      <div className="h-5 w-5 rounded bg-zinc-600/60" />
      <span>{label}</span>
    </button>
  )

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 flex-col overflow-y-auto border-r border-zinc-800 p-2 lg:flex">
      <nav className="space-y-1">
        <Item label="ホーム" />
        <Item label="ショート" />
        <Item label="登録チャンネル" />
        <Item label="YouTube Music" />
      </nav>
      <div className="my-4 h-px bg-zinc-800" />
      <div className="space-y-1">
        <p className="px-3 pb-1 text-xs font-medium text-zinc-400">マイページ</p>
        <Item label="履歴" />
        <Item label="再生リスト" />
        <Item label="作成した動画" />
        <Item label="映画とテレビ番組" />
        <Item label="後で見る" />
        <Item label="高く評価した動画" />
        <Item label="オフライン" />
      </div>
    </aside>
  )
}

function ChipRow() {
  return (
    <div className="sticky top-14 z-40 border-b border-zinc-800 bg-zinc-900/90 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/70">
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {chips.map((c) => (
          <ChipPill key={c.id} label={c.label} active={c.active} />
        ))}
      </div>
    </div>
  )
}

// -----------------------------
// Page
// -----------------------------

export default function YouTubeHome() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <TopBar />
      <div className="mx-auto flex max-w-[1600px] gap-4">
        <Sidebar />
        <main className="flex-1">
          <ChipRow />
          <section className="p-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {sampleVideos.map((v) => (
                <VideoCard key={v.id} v={v} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

// -----------------------------
// Notes for integration
// -----------------------------
// 1) Tailwind classes rely only on the default palette to avoid tokens like `border-border`.
// 2) For better scroll look, add this to your globals:
//    .no-scrollbar { scrollbar-width: none; } .no-scrollbar::-webkit-scrollbar{ display:none }
// 3) Replace mock thumbnails with your own. If using Next/Image, pass width/height.
// 4) You can make the sidebar collapsible by toggling a state and conditionally rendering <Sidebar/> or a compact icon rail.
