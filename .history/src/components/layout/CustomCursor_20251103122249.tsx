'use client'

import { motion } from 'framer-motion'

export function CustomCursor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Halo central animé */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-transparent blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: 'translate(-50%, -50%)',
          filter: 'blur(120px)',
        }}
      />
    </div>
  )
}
