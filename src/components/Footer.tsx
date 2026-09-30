import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.links.find((l) => l.label === 'GitHub')?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.links.find((l) => l.label === 'LinkedIn')?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
