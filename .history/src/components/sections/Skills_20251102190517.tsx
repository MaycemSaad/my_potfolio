'use client'

import { Brain, Database, BarChart3, GraduationCap, Award, Code, TerminalSquare } from 'lucide-react'

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-grid text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* === Titre principal === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            Skills <span className="text-gradient">& Qualifications</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Expertise technique couvrant la Data Science, l’IA, l’Actuariat et le Développement Full-Stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* === Bloc unique : Skills & Tools === */}
          <div className="bg-gray-900/60 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-purple-400">Skills & Tools</h3>
            </div>

            {/* Data Science & AI */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Brain className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">Data Science & AI</h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {[
                  'Machine Learning', 'Deep Learning', 'NLP', 'Generative AI',
                  'LLMs', 'Computer Vision', 'Rasa', 'TensorFlow', 'PyTorch', 'Scikit-learn'
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            {/* Développement */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <TerminalSquare className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">Développement & Frameworks</h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {[
                  'Python', 'R', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'NestJS',
                  'Symfony', 'FastAPI', 'Streamlit', 'Dash', 'Flask', 'React', 'Docker', 'Git'
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            {/* Databases & Big Data */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">Databases & Big Data</h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {[
                  'PostgreSQL', 'MySQL', 'SQL', 'MongoDB', 'Neo4j', 'Firebase', 'Hadoop', 'Spark'
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>

            {/* Actuariat */}
            <div>
              <div className="flex items-center mb-2">
                <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-blue-300">Actuariat & Modélisation</h4>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {[
                  'Modélisation Actuarielle', 'Solvabilité II', 'Monte Carlo',
                  'Analyse du Risque', 'Tables de mortalité', 'Finance Durable'
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* === Bloc Éducation & Certifications === */}
          <div className="space-y-8">
            
            {/* Éducation */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-blue-500/10 shadow-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-400">Éducation</h3>
              </div>
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

            {/* Certifications classées */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-purple-400">Certifications</h3>
              </div>

              <div className="space-y-5 text-sm text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">IA & Machine Learning</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>NVIDIA – Fundamentals of Deep Learning</li>
                    <li>NVIDIA – Transformer-Based NLP</li>
                    <li>NVIDIA – Generative AI with Diffusion Models</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Cloud & Data</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>AWS Academy – Cloud Foundations</li>
                    <li>365 Data Science – Power BI</li>
                  </ul>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
