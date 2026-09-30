import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section
      id="projects"
      className="bg-slate-100 px-4 py-20 sm:px-6 dark:bg-slate-800/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration, delay: i * 0.1 }}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-accent/50"
            >
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
              </div>

              {/* Architecture placeholder — hidden when no image */}
              {project.architectureImage && (
                <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                  <img
                    src={project.architectureImage}
                    alt={`${project.title} architecture diagram`}
                    className="w-full"
                  />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
