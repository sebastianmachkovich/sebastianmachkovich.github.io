import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section
      id="about"
      className="bg-slate-100 px-4 py-20 sm:px-6 dark:bg-slate-800/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading>About Me</SectionHeading>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration }}
            className="shrink-0"
          >
            <img
              src={profile.headshot}
              alt={`Portrait of ${profile.name}`}
              width={280}
              height={280}
              className="rounded-2xl border-2 border-accent/30 object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay: 0.2 }}
          >
            <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
              {profile.title}
            </h3>
            <p className="mb-4 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={14} />
              {profile.location}
            </p>
            <p className="max-w-xl leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
