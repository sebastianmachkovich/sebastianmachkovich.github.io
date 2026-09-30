import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certifications } from '../data/certifications';

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section
      id="certifications"
      className="bg-slate-100 px-4 py-20 sm:px-6 dark:bg-slate-800/50"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading>Certifications</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <ShieldCheck size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Issued {cert.issueDate}
                {cert.expiryDate && ` · Expires ${cert.expiryDate}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
