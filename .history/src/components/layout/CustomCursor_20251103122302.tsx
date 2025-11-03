'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
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

    document.addEventListener('mousemove', updateCursor)
    return () => document.removeEventListener('mousemove', updateCursor)
  }, [])

  // === Effet d’inertie pour le grand cercle ===
  useEffect(() => {
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.08,
        y: prev.y + (position.y - prev.y) * 0.08,
      }))
      requestAnimationFrame(smoothFollow)
    }
    smoothFollow()
  }, [position])

  return (
    <>
      {/* 🌌 Grand cercle lumineux flou (effet glow) */}
      <div
        className="pointer-events-none fixed z-[5] w-[400px] h-[400px] rounded-full blur-[120px] opacity-25 bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-600 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${trailingPos.x - 200}px, ${trailingPos.y - 200}px) scale(${isPointer ? 1.2 : 1})`,
        }}
      />

      {/* 🔵 Cercle principal */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 bg-blue-500/20 border-2 border-blue-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-50 transition-all duration-100 ${
          isPointer ? 'scale-150 bg-blue-500/40' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* 🔹 Point central */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
