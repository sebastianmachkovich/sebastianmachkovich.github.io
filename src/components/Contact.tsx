import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section
      id="contact"
      className="bg-slate-100 px-4 py-20 sm:px-6 dark:bg-slate-800/50"
    >
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading>Get In Touch</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration }}
          className="mb-8 text-slate-600 dark:text-slate-300"
        >
          I&apos;m always open to new opportunities and conversations. Feel free
          to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href={profile.links.find((l) => l.label === 'LinkedIn')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-accent px-8 py-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white sm:w-auto"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href={profile.links.find((l) => l.label === 'GitHub')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-3 font-medium text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-600 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent sm:w-auto"
          >
            <Github size={20} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
