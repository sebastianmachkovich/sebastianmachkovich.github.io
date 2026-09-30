import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const wordIndex = useRef(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
  }, []);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex.current % words.length] ?? '';

    if (prefersReducedMotion.current) {
      setText(currentWord);
      return;
    }

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }
  }, [words, text, isDeleting]);

  useEffect(() => {
    if (prefersReducedMotion.current) {
      const interval = setInterval(() => {
        wordIndex.current = (wordIndex.current + 1) % words.length;
        setText(words[wordIndex.current] ?? '');
      }, pauseDuration + 1000);
      return () => clearInterval(interval);
    }

    const currentWord = words[wordIndex.current % words.length] ?? '';

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && text === currentWord) {
      delay = pauseDuration;
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      wordIndex.current = (wordIndex.current + 1) % words.length;
      delay = 300;
    }

    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, tick, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { text, isDeleting };
}
