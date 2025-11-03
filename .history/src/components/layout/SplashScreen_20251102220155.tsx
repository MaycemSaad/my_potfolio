'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 800) // fade out delay
          return 100
        }
        return p + 2
      })
    }, 45)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center 
      bg-grid dark:bg-grid-light bg-black/95 text-white transition-all duration-700 ease-in-out
      ${progress >= 100 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}
    >
      <div className="flex flex-col items-center space-y-5 animate-fade-in">
        {/* Photo avec halo */}
        <div className="relative">
          <Image
            src="/Photo-de-profil.jpg"
            alt="Mayssem Saad"
            width={110}
            height={110}
            className="rounded-full border-2 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl" />
        </div>

        <h1 className="text-3xl font-bold tracking-wide">Mayssem Saad</h1>
        <p className="text-gray-400 text-sm italic">
          Building intelligent systems...
        </p>

        {/* Barre de progression */}
        <div className="w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden mt-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
