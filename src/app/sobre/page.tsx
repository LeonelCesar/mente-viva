"use client";

import { motion } from "framer-motion";
import { Info, Code, Users, BrainCog } from "lucide-react";

function SobrePage() {
  return (
    <main className="max-w-3xl mx-auto mt-12 px-6 space-y-10">
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre o Projeto 🧠
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Um mergulho visual e interativo na mente humana, inspirado pela{" "}
        <strong>Inteligência Multifocal</strong> de Augusto Cury.
      </motion.p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow flex items-start gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <BrainCog className="text-purple-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">
              Base Teórica
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Inspirado na teoria de Augusto Cury, que analisa como os
              pensamentos constroem a consciência e a emoção.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow flex items-start gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <Code className="text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">
              Tecnologias Utilizadas
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              React, Next.js e Tailwind CSS — para criar uma experiência web
              moderna, rápida e acessível.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow flex items-start gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <Users className="text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">
              Aplicações Reais
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Pode ser utilizado por terapeutas, estudantes, coaches ou qualquer
              curioso sobre o funcionamento da mente.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl shadow flex items-start gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <Info className="text-indigo-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-400">
              Objetivo do Projeto
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Facilitar o entendimento visual de como pensamentos positivos,
              negativos e neutros se conectam e influenciam as emoções.
            </p>
          </div>
        </motion.div>
      </section>

      <motion.blockquote
        className="text-center italic text-blue-800 dark:text-blue-400 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        “Os pensamentos constroem pontes para o futuro ou muros para a prisão
        emocional.” <br />
        <span className="text-sm font-bold">– Augusto Cury</span>
      </motion.blockquote>
    </main>
  );
}

export default SobrePage;
