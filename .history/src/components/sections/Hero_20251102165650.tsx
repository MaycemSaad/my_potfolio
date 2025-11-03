'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-9 w-9 rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
            PRODUCT OWNER
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
            FULL-STACK ENGINEER
          </span>
        </div>

        {/* Main Description */}
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Building intelligent systems at the intersection of AI, security, and automation. 
          Currently supervising 2 major projects in cybersecurity.
        </p>

        {/* CTA Button */}
        <div>
          <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />

        {/* Name and Availability */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            Sarah Henia
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Product Owner & Full-Stack Engineer
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Available Early 2026</span>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-blue-800 dark:opacity-10" />
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-800 dark:opacity-10" />
          <div className="absolute top-40 left-32 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-800 dark:opacity-10" />
        </div>
      </div>
    </div>
  )
}