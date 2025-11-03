'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Incrémente la barre de progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 500) // fade out
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center 
                 bg-grid dark:bg-grid-light bg-black/90 text-white 
                 transition-opacity duration-700 ease-out"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <div className="flex flex-col items-center space-y-6 animate-fade-in">
        <Image
          src="/Photo-de-profil.jpg"
          alt="Mayssem Saad"
          width={120}
          height={120}
          className="rounded-full border-2 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        />
        <h1 className="text-3xl font-bold tracking-wide">Mayssem Saad</h1>
        <p className="text-gray-400 italic text-sm">Building intelligent systems...</p>

        {/* Progress bar */}
        <div className="w-52 h-2 bg-gray-800 rounded-full overflow-hidden mt-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-xs text-gray-500">{progress}%</span>
      </div>
    </div>
  )
}
