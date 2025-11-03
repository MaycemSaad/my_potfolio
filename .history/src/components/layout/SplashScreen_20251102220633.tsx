'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setFinished(true), 600) // disparition douce
          return 100
        }
        return p + 2
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  if (finished) return null // ✅ disparaît totalement

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center 
      bg-grid dark:bg-grid-light bg-black text-white 
      transition-opacity duration-700 ease-in-out
      ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Couche de fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-95" />

      {/* Contenu */}
      <div className="relative flex flex-col items-center space-y-5 animate-fade-in z-10">
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
        <p className="text-gray-400 text-sm italic">
          Building intelligent systems...
        </p>

        {/* Barre de progression */}
        <div className="w-48 h-1.5 bg-gray-800/60 rounded-full overflow-hidden mt-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
