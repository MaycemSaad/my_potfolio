'use client'

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-grid text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            Skills <span className="text-gradient">& Qualifications</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Compétences techniques couvrant la Data Science, l’IA, l’Actuariat, et le Développement Full-Stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* === Bloc 1 : Technical Stack === */}
          <div className="bg-gray-900/60 rounded-2xl p-8 border border-blue-500/10 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Technical Stack</h3>

            <div className="mb-6">
              <h4 className="font-semibold text-purple-300 mb-2">Langages & Programmation</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['Python', 'R', 'Java', 'C/C++', '.NET', 'JavaScript', 'PHP', 'HTML/CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-purple-300 mb-2">Data Science & AI</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'LLMs', 'Rasa'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-purple-300 mb-2">Big Data & Databases</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Firebase', 'Hadoop', 'Hive', 'Spark', 'HBase'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Frameworks & Développement Web</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['Streamlit', 'Flask', 'FastAPI', 'Symfony', 'Node.js', 'Next.js', 'NestJS', 'React', 'JavaFX'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* === Bloc 2 : Actuariat & Visualisation === */}
          <div className="bg-gray-900/60 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-purple-400 mb-6">Actuariat & Visualisation</h3>

            <div className="mb-6">
              <h4 className="font-semibold text-blue-300 mb-2">Actuariat & Finance</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['Modélisation Actuarielle', 'Solvabilité II', 'Monte Carlo', 'Modèle Lee-Carter', 'Analyse du risque'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-blue-300 mb-2">Web Scraping & Automatisation</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['Selenium', 'BeautifulSoup', 'Scrapy', 'Regex', 'PDFPlumber', 'PyTesseract'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Visualisation & BI</h4>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {['Power BI', 'Tableau', 'Excel', 'Dash', 'Plotly'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* === Bloc 3 : Éducation & Certifications === */}
          <div className="space-y-8">
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-blue-500/10 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Éducation</h3>
              <ul className="text-sm text-gray-300 space-y-3">
                <li>
                  🎓 <strong>Université du Mans</strong> – Master en Actuariat (2024 – Présent)
                </li>
                <li>
                  🎓 <strong>ESPRIT</strong> – Diplôme d’ingénieur en Data Science (2023 – Présent)
                </li>
                <li>
                  🎓 <strong>ISI Mahdia</strong> – Licence en Génie Logiciel (2020 – 2023)
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/60 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Certifications</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>NVIDIA – Fundamentals of Deep Learning</li>
                <li>NVIDIA – Transformer-Based NLP</li>
                <li>NVIDIA – Generative AI with Diffusion Models</li>
                <li>AWS Academy – Cloud Foundations</li>
                <li>365 Data Science – Power BI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
