'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2500) // ⏳ durée avant disparition (2,5s)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        <Image
          src="/Photo-de-profil.jpg"
          alt="Mayssem Saad"
          width={100}
          height={100}
          className="rounded-full border-2 border-purple-400 shadow-lg"
        />
        <h1 className="text-3xl font-bold">Mayssem Saad</h1>
        <p className="text-gray-400">Building intelligent systems...</p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 animate-pulse" />
      </div>
    </div>
  )
}
