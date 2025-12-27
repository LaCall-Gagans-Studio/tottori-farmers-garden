'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'news', label: 'News' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function ScrollProgress() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        root: document.getElementById('main-scroll-container'),
        threshold: 0.5, // 50% visible to be considered active
      },
    )

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id)
      // Special handling for home since it's a spacer in the flow
      if (id === 'home') {
        const spacer = document.getElementById('hero-spacer')
        if (spacer) observer.observe(spacer)
      } else if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const container = document.getElementById('main-scroll-container')
    const element = id === 'home' ? document.getElementById('home') : document.getElementById(id)

    if (container && element) {
      // For home, we actually want to scroll to top 0
      if (id === 'home') {
        container.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        // Calculate position relative to container
        // Since container is the scroll parent, we can just use element.offsetTop if it's a direct child or close
        // But scrollIntoView is easier
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative flex items-center justify-center w-4 h-4"
          aria-label={`Scroll to ${label}`}
        >
          <div
            className={`absolute rounded-full transition-all duration-300 ${
              activeId === id ? 'w-3 h-3 bg-red-600' : 'w-2 h-2 bg-gray-400 group-hover:bg-red-400'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
