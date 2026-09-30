import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/skills';

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Skills</SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration, delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
