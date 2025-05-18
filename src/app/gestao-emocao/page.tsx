"use client";

import { motion } from "framer-motion";
import { Smile, Frown, Meh } from "lucide-react";

function GestaoEmoçãoPage() {
  return (
    <main className="max-w-3xl mx-auto mt-12 px-6 space-y-10">
      <motion.h1
        className="text-4xl font-extrabold text-pink-700 dark:text-pink-300 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💓 Emoções e Pensamentos
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Pensamentos são sementes. Plantados com consciência, florescem em
        emoções saudáveis. Negligenciados, tornam-se ervas daninhas emocionais.
      </motion.p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl shadow flex flex-col items-center"
          whileHover={{ scale: 1.03 }}
        >
          <Smile className="text-green-600 w-8 h-8 mb-2" />
          <h3 className="font-semibold text-green-600 dark:text-green-200">
            Pensamentos Positivos
          </h3>
          <p className="text-sm text-center text-gray-700 dark:text-gray-400">
            Geram emoções como <strong>gratidão</strong>,{" "}
            <strong>tranquilidade</strong> e <strong>entusiasmo</strong>.
          </p>
        </motion.div>

        <motion.div
          className="bg-red-100 dark:bg-red-900/30 p-4 rounded-xl shadow flex flex-col items-center"
          whileHover={{ scale: 1.03 }}
        >
          <Frown className="text-red-600 w-8 h-8 mb-2" />
          <h3 className="font-semibold text-red-800 dark:text-red-400">
            Pensamentos Negativos
          </h3>
          <p className="text-sm text-center text-gray-700 dark:text-gray-400">
            Estimulam <strong>medo</strong>, <strong>raiva</strong>,{" "}
            <strong>tristeza</strong> e <strong>ansiedade</strong>.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-xl shadow flex flex-col items-center"
          whileHover={{ scale: 1.03 }}
        >
          <Meh className="text-gray-600 w-8 h-8 mb-2" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">
            Pensamentos Neutros
          </h3>
          <p className="text-sm text-center text-gray-700 dark:text-gray-300">
            Não afetam fortemente as emoções. São <em>funcionais</em> ou{" "}
            <em>rotineiros</em>.
          </p>
        </motion.div>
      </section>

      <motion.blockquote
        className="text-center italic text-pink-800 dark:text-pink-300 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        “A mente humana é um jardim. Cada pensamento é uma semente. Você escolhe
        o que cultivar.” <br />
        <span className="text-sm font-bold">– Augusto Cury</span>
      </motion.blockquote>

      <motion.p
        className="text-md text-gray-700 dark:text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        O nosso simulador ajuda a visualizar essas relações em tempo real. Sinta
        como cada tipo de pensamento altera o solo emocional.
      </motion.p>
    </main>
  );
}

export default GestaoEmoçãoPage;
