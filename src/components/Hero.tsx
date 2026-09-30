import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { text } = useTypewriter({ words: profile.taglines });
  const duration = shouldReduceMotion ? 0 : 0.6;

  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6"
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-900" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.1 }}
          className="mb-4 text-sm font-medium tracking-wider text-accent sm:text-base"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.2 }}
          className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.3 }}
          className="mb-6 h-10 sm:h-12"
        >
          <span className="typewriter-cursor font-mono text-xl font-semibold text-accent sm:text-2xl lg:text-3xl">
            {text}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View my work
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-accent px-6 py-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Get in touch
            <Mail size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
          >
            Download r\u00e9sum\u00e9
            <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
