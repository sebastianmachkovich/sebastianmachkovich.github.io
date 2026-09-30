import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '../data/experience';

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-accent/20 sm:left-6" />

          <div className="space-y-12">
            {experience.map((entry, i) => (
              <motion.div
                key={entry.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent sm:left-4">
                  <Briefcase size={12} className="text-white" />
                </div>

                {/* Company header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {entry.company}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {entry.location} &middot; {entry.startDate} &ndash;{' '}
                    {entry.endDate}
                  </p>
                </div>

                {/* Roles */}
                <div className="space-y-6">
                  {entry.roles.map((role) => (
                    <div
                      key={role.title}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {role.title}
                      </h4>
                      <p className="mb-3 text-sm text-accent">
                        {role.startDate} &ndash; {role.endDate}
                      </p>
                      <ul className="space-y-2">
                        {role.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
