'use client'

import { useEffect, useState } from 'react'

export function SectionDots() {
  const sections = ['hero', 'about', 'projects', 'contact']
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero'
      for (const id of sections) {
        const section = document.getElementById(id)
        if (section && window.scrollY >= section.offsetTop - window.innerHeight / 2) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hidden lg:flex flex-col items-center gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-[999]">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === id
              ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] scale-125'
              : 'bg-gray-600 hover:bg-blue-400'
          }`}
        ></a>
      ))}
    </div>
  )
}
