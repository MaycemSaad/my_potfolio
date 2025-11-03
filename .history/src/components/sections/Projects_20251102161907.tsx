'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Plateforme E-Commerce',
    description: 'Solution e-commerce moderne avec paiement sécurisé et gestion de stock avancée',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Application de Gestion de Projets',
    description: 'Outil de collaboration en temps réel pour les équipes de développement',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord de données avec visualisations interactives et rapports',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Application Mobile Fitness',
    description: 'Application de suivi fitness avec planification et statistiques détaillées',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'SaaS de Marketing',
    description: 'Plateforme SaaS complète pour l\'automatisation du marketing digital',
    image: '/api/placeholder/600/400',
    technologies: ['Angular', 'NestJS', 'Redis', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Template',
    description: 'Template open-source pour développeurs et designers',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    Projet phare
                  </div>
                )}
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
          >
            Voir plus sur GitHub
            <Github size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;