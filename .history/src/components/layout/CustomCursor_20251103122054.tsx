'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null
      )
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      {/* 💫 Grand halo lumineux plus rapide et fluide */}
      <div
        className="pointer-events-none fixed z-[5] w-[300px] h-[300px] rounded-full blur-[100px] opacity-25 
                   bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 150}px, ${position.y - 150}px) scale(${isPointer ? 1.15 : 1})`,
        }}
      />

      {/* 🔵 Cercle principal */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 border-2 border-blue-400 rounded-full pointer-events-none 
                   transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-50 transition-transform duration-75 ease-out ${
                     isPointer ? 'scale-150 bg-blue-500/30' : 'scale-100 bg-blue-400/10'
                   }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* 🔹 Point central */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none transform 
                   -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
