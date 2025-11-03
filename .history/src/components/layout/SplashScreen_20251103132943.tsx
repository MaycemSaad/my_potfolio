'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; color: string; duration: number }[]
  >([])

  useEffect(() => {
    // 🌈 Génération aléatoire de particules multicolores
    const colors = [
      '#7c3aed', // violet
      '#06b6d4', // cyan
      '#f472b6', // rose
      '#facc15', // jaune
      '#22c55e', // vert
      '#60a5fa', // bleu clair
      '#e879f9', // magenta
    ]

    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 4 + 3, // durée de l'animation
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => setVisible(false), 2800)
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
            className="absolute rounded-full opacity-70 animate-float-orbit"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}`,
              animationDuration: `${p.duration}s`,
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
          className="rounded-full border-2 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        />
        <h1 className="text-3xl font-bold">Mayssem Saad</h1>
        <p className="text-gray-400">Building intelligent systems...</p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-3 animate-pulse" />
      </div>

      {/* === Animations CSS === */}
      <style jsx global>{`
        @keyframes float-orbit {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translate(-25px, 20px) scale(0.9);
            opacity: 0.9;
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
        }
        .animate-float-orbit {
          animation: float-orbit infinite ease-in-out;
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
          animation: fade-in 1.2s ease forwards;
        }
      `}</style>
    </div>
  )
}
