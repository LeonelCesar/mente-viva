"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-300 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bem-vindo ao <span className="text-blue-600">Mente Viva</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Um simulador interativo para explorar como os pensamentos acelerados e
        desorganizados influenciam as emoções. Inspirado na teoria do Dr.
        Augusto Cury.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          href="/simulador"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Começar Simulação
        </Link>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Image
          src="/mind-png.jpg"
          alt="Ilustração da Mente Viva"
          width={320}
          height={320}
          className="mx-auto rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.blockquote
        className="mt-12 max-w-xl text-gray-700 dark:text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        “Você é o autor da sua própria história. Não entregue a caneta da sua
        vida nas mãos dos outros.”
        <br />
        <span className="text-sm not-italic font-semibold text-blue-700 dark:text-blue-400">
          – Augusto Cury
        </span>
      </motion.blockquote>
    </main>
  );
}

export default Home;
