'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800) // ⏳ durée ajustée
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center 
      bg-grid dark:bg-grid-light bg-gradient-to-br from-gray-950 via-gray-900 to-black
      text-white transition-opacity duration-700 ease-in-out`}
    >
      <div className="relative flex flex-col items-center space-y-5 animate-fade-in">
        {/* === Photo avec halo === */}
        <div className="relative">
          <Image
            src="/Photo-de-profil.jpg"
            alt="Mayssem Saad"
            width={120}
            height={120}
            className="rounded-full border-2 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.4)] object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-2xl animate-pulse" />
        </div>

        {/* === Texte === */}
        <h1 className="text-3xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Mayssem Saad
        </h1>
        <p className="text-gray-400 text-sm italic tracking-wide">
          Building intelligent systems...
        </p>

        {/* === Barre animée subtile === */}
        <div className="relative w-36 h-1 mt-4 overflow-hidden rounded-full bg-gray-800/70 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-progress" />
        </div>
      </div>
    </div>
  )
}
