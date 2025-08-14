'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  // const session = props?.session;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted-foreground/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl font-bold tracking-tight leading-tight"
          >
            <span className="gradient-text ">SuIA</span>
          </motion.h1>

          {/* Navegação - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como funciona
            </Link>
            <Link
              href="#exemplos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Exemplos
            </Link>
          </nav>

          {/* Botões de Ação */}
          <Link href="#form" className="flex items-center gap-4">
            <button
              // onClick={props?.onClick}
              className={`px-6 py-2 text-sm font-medium rounded-lg border border-muted-foreground/20 text-foreground hover:bg-muted/40 transition-all duration-300`}
            >
              {'Entrar em contato'}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
