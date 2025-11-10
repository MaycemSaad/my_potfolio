'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Sparkles, Zap , Image} from 'lucide-react'
import { useLanguageTheme } from '@/providers/LanguageThemeContext'

export function Projects() {
  const { language } = useLanguageTheme()
  const [index, setIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState('right')
  const ref = useRef<HTMLElement | null>(null)

const projects = [
  {
    id: 'esg',
    titleFR: 'Plateforme IA d\'Analyse ESG',
    titleEN: 'AI ESG Analytics Platform',
    subtitleFR: 'Automatisation complète de l\'analyse des rapports RSE',
    subtitleEN: 'Automated ESG report intelligence system',
    descriptionFR: "Conception et déploiement d'une plateforme d'analyse ESG automatisée utilisant du NLP et du Machine Learning. Extraction de données depuis des rapports PDF via Python (PDFPlumber, PyTesseract, Regex), réduisant le temps d'analyse de 60%. Développement d'un pipeline de données complet : web scraping, stockage SQL, analyse statistique et visualisation. Intégration d'un chatbot intelligent avec Ollama et gestion des données avec MongoDB.",
    descriptionEN: "Design and deployment of an automated ESG analysis platform using NLP and Machine Learning. Data extraction from PDF reports via Python (PDFPlumber, PyTesseract, Regex), reducing analysis time by 60%. Development of a complete data pipeline: web scraping, SQL storage, statistical analysis and visualization. Integration of an intelligent chatbot with Ollama and data management with MongoDB.",
    techs: ['Python', 'NLP', 'Machine Learning', 'PDFPlumber', 'PyTesseract', 'Regex', 'MongoDB', 'Ollama', 'Web Scraping'],
    demo: '#',
    source: '#',
    images: ['/projects/ESG.png', '/projects/esg8.jpg', '/projects/esg9.jpg'],
  },
  {
    id: 'due-diligence',
    titleFR: 'Due Diligence – Analyse de Documents',
    titleEN: 'Due Diligence – Document Analysis',
    subtitleFR: 'Application Web d\'Analyse de Documents Intelligente',
    subtitleEN: 'Intelligent Document Analysis Web Application',
    descriptionFR: "Développement d'une plateforme intelligente d'extraction et d'analyse automatique d'informations issues de documents complexes. Implémentation de fonctionnalités avancées : parsing sémantique via NLP et LangChain, génération automatique de rapports PowerPoint, classification, scoring de risque et chatbot RAG (LLMs + Human-in-the-Loop). Interface utilisateur interactive sous Streamlit, permettant la visualisation, la recherche et la consultation des rapports analysés.",
    descriptionEN: "Development of an intelligent platform for automatic extraction and analysis of information from complex documents. Implementation of advanced features: semantic parsing via NLP and LangChain, automatic PowerPoint report generation, classification, risk scoring and RAG chatbot (LLMs + Human-in-the-Loop). Interactive user interface with Streamlit, enabling visualization, search and consultation of analyzed reports.",
    techs: ['Python', 'Streamlit', 'NLP', 'LangChain', 'LLMs', 'MongoDB', 'Dash', 'Plotly'],
    demo: '#',
    source: '#',
    images: ['/projects/1.jpg', '/projects/2.jpg', '/projects/3.jpg'],
  },
  {
    id: 'actuarialmind',
    titleFR: 'ActuarialMind – Plateforme RAG',
    titleEN: 'ActuarialMind – RAG Platform',
    subtitleFR: 'Plateforme Intelligente pour l\'Analyse Financière et Actuarielle',
    subtitleEN: 'Intelligent Platform for Financial and Actuarial Analysis',
    descriptionFR: "Développement d'une solution de question-réponse intelligente pour l'analyse rapide de rapports actuariels et financiers. Conception d'un moteur de recherche hybride combinant FAISS, Sentence-BERT et Scikit-learn pour une recherche sémantique performante. Intégration d'un chatbot expert basé sur Ollama et Flask, capable de fournir des réponses contextualisées et fiables. Gestion des utilisateurs, historiques et documents via MongoDB.",
    descriptionEN: "Development of an intelligent Q&A solution for rapid analysis of actuarial and financial reports. Design of a hybrid search engine combining FAISS, Sentence-BERT and Scikit-learn for efficient semantic search. Integration of an expert chatbot based on Ollama and Flask, capable of providing contextualized and reliable answers. Management of users, history and documents via MongoDB.",
    techs: ['FAISS', 'Sentence-BERT', 'Flask', 'React', 'MongoDB', 'Ollama', 'Scikit-learn'],
    demo: '#',
    source: '#',
    images: ['/projects/ActuarialMind.png', '/projects/ActuarialMind2.png', '/projects/ActuarialMind4.png'],
  },
  {
    id: 'ai-doctor',
    titleFR: 'AI Doctor – Conseils Médicaux',
    titleEN: 'AI Doctor – Medical Advice',
    subtitleFR: 'Application Web de Conseils Médicaux Intelligents',
    subtitleEN: 'Intelligent Medical Advice Web Application',
    descriptionFR: "Développement d'une plateforme e-santé intelligente avec un chatbot médical utilisant Rasa et OpenAI pour analyser les symptômes et fournir des conseils personnalisés. Conception d'une interface interactive avec représentation du corps humain pour une localisation précise des douleurs et une analyse contextuelle. Architecture full-stack sécurisée avec Next.js, NestJS et MySQL garantissant la confidentialité des données patients.",
    descriptionEN: "Development of an intelligent e-health platform with a medical chatbot using Rasa and OpenAI to analyze symptoms and provide personalized advice. Design of an interactive interface with human body representation for precise pain location and contextual analysis. Secure full-stack architecture with Next.js, NestJS and MySQL ensuring patient data confidentiality.",
    techs: ['Next.js', 'NestJS', 'MySQL', 'Rasa', 'OpenAI', 'React'],
    demo: '#',
    source: '#',
    images: ['/projects/Home.jpg', '/projects/Inscription.jpg', '/projects/Articles.jpg', '/projects/Chatbot.jpg'],
  },
  {
    id: 'rente-viagere',
    titleFR: 'Modélisation Actuarielle - Rente Viagère',
    titleEN: 'Actuarial Modeling - Life Annuity',
    subtitleFR: 'Calcul de Réserves et VAP pour Solvabilité II',
    subtitleEN: 'Reserve Calculation and APV for Solvency II',
    descriptionFR: "Réalisation d'une modélisation actuarielle pour le calcul de réserves réglementaires sur une rente viagère dans le cadre de Solvabilité II. Mise en œuvre du modèle Lee-Carter pour projeter les taux de mortalité, calcul de la Valeur Actuarielle Présente (APV), et simulation Monte Carlo pour évaluer la distribution des réserves. Développement du pipeline sous R en s'appuyant sur les packages StMoMo et dplyr.",
    descriptionEN: "Implementation of actuarial modeling for regulatory reserve calculation on a life annuity under Solvency II. Implementation of the Lee-Carter model to project mortality rates, calculation of Actuarial Present Value (APV), and Monte Carlo simulation to assess reserve distribution. Pipeline development in R using StMoMo and dplyr packages.",
    techs: ['R', 'StMoMo', 'dplyr', 'Lee-Carter', 'Monte Carlo', 'Solvabilité II'],
    demo: '#',
    source: '#',
    images: ['/projects/actuariat/distribution.jpg', '/projects/actuariat/evolution-de-prob-de-survie.jpg', '/projects/actuariat/Flux.jpg', '/projects/actuariat/projection-des-taux-de-mortalité.jpg','/projects/actuariat/table-de-mortalité.jpg','/projects/actuariat/taux-de-survie.jpg'],
  },
  {
    id: 'audio-diffusion',
    titleFR: 'Augmentation de Données Audio',
    titleEN: 'Audio Data Augmentation',
    subtitleFR: 'Génération Audio par Modèles de Diffusion',
    subtitleEN: 'Audio Generation with Diffusion Models',
    descriptionFR: "Génération de données audio émotionnelles pour améliorer la reconnaissance d'émotions. Prétraitement avec Python, Librosa, entraînement d'un modèle de diffusion conditionnelle (DDPM, VAE) sur EmoDB et RAVDESS. Évaluation des échantillons via ResNet-50 selon la méthodologie CRISP-DM.",
    descriptionEN: "Generation of emotional audio data to improve emotion recognition. Preprocessing with Python, Librosa, training of a conditional diffusion model (DDPM, VAE) on EmoDB and RAVDESS. Sample evaluation via ResNet-50 following CRISP-DM methodology.",
    techs: ['Python', 'Librosa', 'Deep Learning', 'Diffusion Models', 'DDPM', 'VAE', 'ResNet-50', 'CRISP-DM'],
    demo: '#',
    source: '#',
    images: [],
  },
  {
    id: 'churn-prediction',
    titleFR: 'Prédiction de Désabonnement',
    titleEN: 'Churn Prediction',
    subtitleFR: 'Machine Learning pour les Télécommunications',
    subtitleEN: 'Machine Learning for Telecommunications',
    descriptionFR: "Conception d'un modèle prédictif en Scikit-learn atteignant 92% de précision pour détecter les clients à risque de churn. Analyse et transformation des données avec Pandas et NumPy, optimisation des algorithmes et déploiement d'un outil interactif sous Flask.",
    descriptionEN: "Design of a predictive model in Scikit-learn achieving 92% accuracy to detect at-risk churn customers. Data analysis and transformation with Pandas and NumPy, algorithm optimization and deployment of an interactive tool with Flask.",
    techs: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Machine Learning'],
    demo: '#',
    source: '#',
    images: [],
  },
  {
    id: 'nftun',
    titleFR: 'NFTUN - Plateforme NFTs',
    titleEN: 'NFTUN - NFT Platform',
    subtitleFR: 'Plateforme Intégrée de NFTs',
    subtitleEN: 'Integrated NFT Platform',
    descriptionFR: "Réalisation d'une plateforme complète pour la création, l'achat et la vente de NFTs. Fonctionnalités : gestion des utilisateurs et interface intuitive pour les transactions. Technologies : Symfony, JavaFX, FlutterFlow, MySQL.",
    descriptionEN: "Development of a complete platform for creating, buying and selling NFTs. Features: user management and intuitive interface for transactions. Technologies: Symfony, JavaFX, FlutterFlow, MySQL.",
    techs: ['Symfony', 'JavaFX', 'FlutterFlow', 'MySQL', 'Blockchain'],
    demo: '#',
    source: '#',
    images: [],
  },
  {
    id: 'ecoinsight',
    titleFR: 'EcoInsight - Analytics Énergétique',
    titleEN: 'EcoInsight - Energy Analytics',
    subtitleFR: 'Tableaux de Bord Power BI pour l\'Énergie',
    subtitleEN: 'Power BI Dashboards for Energy',
    descriptionFR: "Rapport interactif Power BI pour le secteur de l'énergie. Fonctionnalités : Tableaux de bord, KPIs énergétiques, prédictions en temps réel. Technologies : Power BI, Data Visualization, Analytics.",
    descriptionEN: "Interactive Power BI report for the energy sector. Features: Dashboards, energy KPIs, real-time predictions. Technologies: Power BI, Data Visualization, Analytics.",
    techs: ['Power BI', 'Data Visualization', 'KPIs', 'Dashboard', 'Analytics'],
    demo: '#',
    source: '#',
    images: [],
  },
  {
    id: 'task-management',
    titleFR: 'Application de Gestion de Tâches',
    titleEN: 'Task Management Application',
    subtitleFR: 'Application Web Collaborative Full Stack',
    subtitleEN: 'Collaborative Full Stack Web Application',
    descriptionFR: "Développement complet d'une application web collaborative (architecture microservices) avec Next.js (front-end) et NestJS (back-end). Conception d'une base de données PostgreSQL robuste et normalisée, avec gestion des rôles, des accès et du chiffrement des données. Amélioration de l'expérience utilisateur via une interface dynamique et réactive, entraînant une réduction de 40% du temps moyen de gestion des tâches.",
    descriptionEN: "Complete development of a collaborative web application (microservices architecture) with Next.js (front-end) and NestJS (back-end). Design of a robust and normalized PostgreSQL database, with role management, access control and data encryption. Improved user experience through a dynamic and responsive interface, resulting in a 40% reduction in average task management time.",
    techs: ['Next.js', 'NestJS', 'PostgreSQL', 'Microservices', 'TypeScript'],
    demo: '#',
    source: '#',
    images: [],
  }
]

  const active = projects[index]

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => setIsVisible(e.isIntersecting)),
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleNext = () => {
    setDirection('right')
    setIndex((i) => (i + 1) % projects.length)
    setImgIndex(0)
  }

  const handlePrev = () => {
    setDirection('left')
    setIndex((i) => (i - 1 + projects.length) % projects.length)
    setImgIndex(0)
  }

  const hasImages = (project: any) => {
  return project.images && Array.isArray(project.images) && project.images.length > 0
}

  const nextImage = () => {
    setImgIndex((p) => (p + 1) % active.images.length)
  }

  const prevImage = () => {
    setImgIndex((p) => (p - 1 + active.images.length) % active.images.length)
  }

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 px-6 lg:px-12 bg-grid dark:bg-grid-light text-white dark:text-gray-900 overflow-hidden transition-all duration-700"
    >
      {/* === BACKGROUND ANIMATIONS === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === HEADER === */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-500/30">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language === 'FR' ? 'Projets Innovants' : 'Innovative Projects'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white dark:text-gray-900">
            {language === 'FR' ? (
              <>
                Mes <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projets</span>
              </>
            ) : (
              <>
                My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </>
            )}
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'FR'
              ? "Découvrez mes projets alliant IA, Data Science et Actuariat — conçus avec passion et précision."
              : "Discover my projects combining AI, Data Science, and Actuarial Science — crafted with passion and precision."}
          </p>
        </div>

        {/* === PROJECT CONTENT === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* === TEXT SIDE === */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible 
                ? direction === 'right' 
                  ? 'animate-slide-in-left' 
                  : 'animate-slide-in-left-reverse'
                : 'opacity-0 translate-x-[-100px]'
            }`}
          >
            <div className="space-y-6">
              {/* Project Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-medium text-purple-400">
                  {language === 'FR' ? 'Projet IA Avancé' : 'Advanced AI Project'}
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-900">
                {language === 'FR' ? active.titleFR : active.titleEN}
              </h3>
              
              <p className="text-lg font-medium text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                {language === 'FR' ? active.subtitleFR : active.subtitleEN}
              </p>
              
              <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-justify text-lg">
                {language === 'FR' ? active.descriptionFR : active.descriptionEN}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {active.techs.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-800/50 dark:bg-gray-200/50 rounded-xl text-sm text-white dark:text-gray-900 border border-gray-700/50 dark:border-gray-400/50 hover:bg-gray-700/50 dark:hover:bg-gray-300/50 transition-all duration-300 hover:scale-105"
                    style={{ 
                      animationDelay: `${techIndex * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

         
            </div>
          </div>

          {/* === IMAGE SIDE === */}
          <div
            className={`transition-all duration-1000 ${
              isVisible 
                ? direction === 'right' 
                  ? 'animate-slide-in-right' 
                  : 'animate-slide-in-right-reverse'
                : 'opacity-0 translate-x-[100px]'
            }`}
          >
            {hasImages(active) ? (
              <div className="relative group rounded-2xl overflow-hidden border border-purple-500/30 
                             shadow-2xl bg-gray-900/80 dark:bg-gray-100/80 backdrop-blur-xl 
                             hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                
                {/* Main Image */}
<img
  src={active.images[imgIndex]}
  alt={language === 'FR' ? active.titleFR : active.titleEN}
  className="w-full h-[320px] object-contain transition-all duration-700 ease-out group-hover:scale-105 brightness-110"
/>

                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {active.images.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setImgIndex(dotIndex)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dotIndex === imgIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevImage}
                    className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-3 shadow-2xl transform hover:scale-110 transition-all duration-300"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full p-3 shadow-2xl transform hover:scale-110 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              // Fallback quand il n'y a pas d'images
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 
                             shadow-2xl bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-xl 
                             flex flex-col items-center justify-center h-[400px]">
                <Image className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4" />
                <p className="text-gray-400 dark:text-gray-500 text-lg font-medium">
                  {language === 'FR' ? 'Aucune image disponible' : 'No images available'}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {language === 'FR' ? 'Visualisation en cours de développement' : 'Visualization in development'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* === PROJECT NAVIGATION === */}
        <div className={`flex justify-center gap-4 mt-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <button
            onClick={handlePrev}
            className="group bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Project Indicators */}
          <div className="flex items-center gap-3 mx-8">
            {projects.map((project, projectIndex) => (
              <button
                key={project.id}
                onClick={() => {
                  setDirection(projectIndex > index ? 'right' : 'left')
                  setIndex(projectIndex)
                  setImgIndex(0)
                }}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  projectIndex === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 dark:bg-gray-200/50 text-gray-400 dark:text-gray-600 hover:bg-gray-700/50 dark:hover:bg-gray-300/50'
                }`}
              >
                {projectIndex + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group bg-gray-900/70 dark:bg-gray-200/70 hover:bg-gray-800 dark:hover:bg-gray-300 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeftReverse {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRightReverse {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-left-reverse {
          animation: slideInLeftReverse 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide-in-right-reverse {
          animation: slideInRightReverse 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}