'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: "Application E-Commerce",
      description: "Plateforme e-commerce moderne avec Next.js et Stripe",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord avec visualisation de données en temps réel",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    },
    {
      title: "Application Mobile",
      description: "Application React Native avec fonctionnalités offline",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
    },
  ]

  const skills = [
    { name: 'React/Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white">VotreNom</div>
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'Projets', 'Compétences', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Bonjour, je suis{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Votre Nom
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Développeur front-end passionné par la création d&apos;expériences web modernes et performantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
              Voir mes projets
            </button>
            <button className="px-8 py-3 border border-slate-600 text-slate-300 rounded-full font-semibold hover:bg-slate-800 transition-all">
              Me contacter
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <Github className="text-slate-400 hover:text-white cursor-pointer" />
            <Linkedin className="text-slate-400 hover:text-white cursor-pointer" />
            <Mail className="text-slate-400 hover:text-white cursor-pointer" />
          </div>
          <ChevronDown className="mx-auto mt-16 text-slate-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Mes Projets</h2>
          <p className="text-slate-300 text-center mb-12">Découvrez mes réalisations récentes</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Mes Compétences</h2>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Travaillons ensemble</h2>
          <p className="text-slate-300 mb-8">
            Intéressé par une collaboration ? N&apos;hésitez pas à me contacter !
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
            Envoyer un message
          </button>
        </div>
      </section>
    </div>
  )
}