import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { text } = useTypewriter({ words: profile.taglines });
  const duration = shouldReduceMotion ? 0 : 0.6;

  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6"
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-900" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.8fr)] md:gap-16">
        <div className="text-center md:text-left">
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
            className="mb-4 min-h-10 sm:min-h-12"
          >
            <span className="typewriter-cursor font-mono text-xl font-semibold text-accent sm:text-2xl lg:text-3xl">
              {text}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.35 }}
            className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-200"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.4 }}
            className="mb-6 flex items-center justify-center gap-1 text-sm text-slate-500 md:justify-start dark:text-slate-400"
          >
            <MapPin size={14} />
            {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.45 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mx-0 dark:text-slate-400"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-hover sm:px-6"
            >
              View my work
              <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-accent px-5 py-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white sm:px-6"
            >
              Get in touch
              <Mail size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition-colors hover:border-accent hover:text-accent sm:px-6 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
            >
              Resume
              <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration, delay: 0.25 }}
          className="mx-auto w-full max-w-xs md:max-w-sm"
        >
          <img
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            width={360}
            height={360}
            className="mx-auto aspect-square w-full rounded-2xl border-2 border-accent/30 object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
