'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-200 dark:bg-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Título */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          <span className="font-bold text-lg text-blue-900 dark:text-white">Mente Viva</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-blue-900 dark:text-white">
          <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300">Início</Link></li>
          <li><Link href="/simulador" className="hover:text-blue-600 dark:hover:text-blue-300">Simulador</Link></li>
          <li><Link href="/pensamento-acelerado" className="hover:text-blue-600 dark:hover:text-blue-300">SPA</Link></li>
          <li><Link href="/gestao-emocao" className="hover:text-blue-600 dark:hover:text-blue-300">Gestão Emoção</Link></li>
          <li><Link href="/sobre" className="hover:text-blue-600 dark:hover:text-blue-300">Sobre</Link></li>
        </ul>

        {/* Botão Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-900 dark:text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 text-blue-900 dark:text-white text-base">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
          <li><Link href="/simulador" onClick={() => setMenuOpen(false)}>Simulador</Link></li>
          <li><Link href="/pensamento-acelerado" onClick={() => setMenuOpen(false)}>Pensamento Acelerado</Link></li>
          <li><Link href="/gestao-emocao" onClick={() => setMenuOpen(false)}>Gestão da Emoção</Link></li>
          <li><Link href="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar;
