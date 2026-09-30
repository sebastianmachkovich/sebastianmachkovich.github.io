import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white"
    >
      {children}
      <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-accent" />
    </motion.h2>
  );
}
