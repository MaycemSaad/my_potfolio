'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200) // durée 2.2s
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-grid dark:bg-grid-light text-white dark:text-gray-900 transition-all duration-1000 animate-fade-in">
      {/* Photo de profil */}
      <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
        <Image
          src="/Photo-de-profil.jpg"
          alt="Mayssem Saad"
          width={120}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nom */}
      <h1 className="text-4xl font-bold mb-2 tracking-wide">
        Mayssem Saad
      </h1>

      {/* Phrase */}
      <p className="text-gray-400 text-sm italic">
        Building intelligent systems...
      </p>

      {/* Barre animée */}
      <div className="w-48 h-1 bg-gray-700 mt-6 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-progress"></div>
      </div>
    </div>
  )
}
