'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; color: string }[]>([])

  useEffect(() => {
    // Génération aléatoire des points
    const newParticles = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      color: Math.random() > 0.5 ? '#7c3aed' : '#06b6d4', // violet / cyan
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* === Points animés === */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70 animate-float"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* === Contenu central === */}
      <div className="flex flex-col items-center space-y-4 text-center animate-fade-in z-10">
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

      {/* === Animations CSS === */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
    </div>
  )
}
