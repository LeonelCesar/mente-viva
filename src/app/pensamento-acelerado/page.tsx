'use client'

import { motion } from 'framer-motion'
import { Brain, AlertTriangle, Timer, CloudDrizzle } from 'lucide-react'

function PensamentoAceleradoPage() {
  return (
    <main className="max-w-3xl mx-auto mt-10 px-6 space-y-10">
     
      <motion.h1
        className="text-4xl font-extrabold text-blue-800 dark:text-blue-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🧠 Síndrome do Pensamento Acelerado (SPA)
      </motion.h1>

    
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A SPA é um estado mental descrito por <strong>Augusto Cury</strong> que afeta milhões de pessoas,
        resultando em <span className="text-red-500 font-semibold">ansiedade, exaustão emocional</span> e perda de foco.
      </motion.p>

    
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow"
          whileHover={{ scale: 1.02 }}
        >
          <Timer className="text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">Aceleração do pensamento</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Dificuldade de parar a mente, mesmo ao descansar.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow"
          whileHover={{ scale: 1.02 }}
        >
          <AlertTriangle className="text-yellow-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">Ansiedade constante</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Expectativas excessivas sobre o futuro e sensação de urgência permanente.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow"
          whileHover={{ scale: 1.02 }}
        >
          <Brain className="text-purple-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">Dificuldade de foco</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A mente salta de pensamento em pensamento, prejudicando a concentração.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow"
          whileHover={{ scale: 1.02 }}
        >
          <CloudDrizzle className="text-gray-500 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">Fadiga mental</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Cansaço mental crônico, mesmo após dormir ou relaxar.
            </p>
          </div>
        </motion.div>
      </section>

    
      <motion.blockquote
        className="text-center italic text-blue-700 dark:text-blue-400 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        “Mentes brilhantes produzem ideias, mas mentes saudáveis produzem equilíbrio.” <br />
        <span className="text-sm font-bold">– Augusto Cury</span>
      </motion.blockquote>

    
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Em breve: uma simulação visual sobre como o excesso de pensamentos interfere na sua paz mental.
        </p>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-red-500 animate-pulse"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Nível de atividade mental: Alto</p>
      </motion.div>
    </main>
  )
}

export default PensamentoAceleradoPage;
