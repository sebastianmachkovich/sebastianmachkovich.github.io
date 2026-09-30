import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education } from '../data/education';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section id="education" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>Education</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((entry, i) => (
            <motion.div
              key={entry.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration, delay: i * 0.15 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {entry.degree}
              </h3>
              <p className="text-sm font-medium text-accent">{entry.field}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {entry.school}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {entry.startDate} &ndash; {entry.endDate}
                {entry.gpa && ` · GPA: ${entry.gpa}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
