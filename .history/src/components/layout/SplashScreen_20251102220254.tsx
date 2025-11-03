'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 800) // ⏳ délai avant disparition
          return 100
        }
        return prev + 2
      })
    }, 45)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center 
      bg-grid dark:bg-grid-light bg-black text-white transition-all duration-700 ease-in-out
      ${!isVisible ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-95" />

      <div className="relative flex flex-col items-center space-y-5 animate-fade-in z-10">
        {/* Photo avec effet lumineux */}
        <div className="relative">
          <Image
            src="/Photo-de-profil.jpg"
            alt="Mayssem Saad"
            width={120}
            height={120}
            className="rounded-full border-2 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.4)] object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-2xl" />
        </div>

        <h1 className="text-3xl font-bold tracking-wide">Mayssem Saad</h1>
        <p className="text-gray-400 text-sm italic">Building intelligent systems...</p>

        {/* Barre de progression animée */}
        <div className="w-56 h-1.5 bg-gray-800/70 rounded-full overflow-hidden mt-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
