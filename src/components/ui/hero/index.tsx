'use client';

import { motion } from 'framer-motion';
import Navbar from '../../appbar';
import { PropsHero } from '@/interfaces';

export default function Hero(props: PropsHero) {
  return (
    <>
      <Navbar {...props.navbar} />
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent/20 blur-3xl rounded-full animate-pulse animation-delay-3000" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full mb-6 border border-muted-foreground/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium">
              Transformando ideias em soluções com IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            <span className="gradient-text">Serviços inteligentes</span>
            <br />
            para o seu negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Impulsione o lucro e o desempenho do seu negócio com inteligência
            artificial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <a
              href="#form"
              className="px-8 py-3.5 text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:glow flex items-center gap-2"
            >
              <span>Solicitar Agora</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#exemplos"
              className="px-8 py-3.5 text-lg font-semibold rounded-lg border border-muted-foreground/20 text-foreground hover:bg-muted/40 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <span>Ver Exemplos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
