'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LuArrowDown, LuFileText } from 'react-icons/lu';
import { useLanguage } from './LanguageProvider';

const TECH_CORE = [
  'Next.js',
  'React',
  'Flutter',
  'TypeScript',
  'NestJS',
  'Clean Architecture',
] as const;

export const Hero = () => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id='hero'
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center md:text-left scroll-mt-10'
    >
      {/* Main Headline */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-(--text-primary) mb-6 max-w-4xl text-balance'>
        {t.hero.title}
      </h1>

      {/* Subtitle */}
      <p className='text-lg md:text-xl text-(--text-muted) leading-relaxed mb-10 max-w-2xl text-pretty'>
        {t.hero.subtitle}
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mb-14'>
        <a
          href='#proyectos'
          className='group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-(--accent) hover:bg-(--accent-hover) active:scale-[0.98] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 ring-offset-(--bg-main)'
        >
          <span>{t.hero.viewProjects}</span>
          <LuArrowDown
            className='w-4 h-4 group-hover:translate-y-0.5 transition-transform'
            aria-hidden='true'
          />
        </a>

        <a
          href={language === 'en' ? '/docs/en_cv.pdf' : '/docs/cv.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={
            language === 'en'
              ? `${t.hero.downloadCv} (opens PDF document in new tab)`
              : `${t.hero.downloadCv} (abre archivo PDF en una nueva pestaña)`
          }
          className='group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border border-(--border-color) text-(--text-primary) hover:bg-(--bg-card) hover:border-(--accent) active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 ring-offset-(--bg-main)'
        >
          <LuFileText
            className='w-4 h-4 group-hover:scale-105 transition-transform'
            aria-hidden='true'
          />
          <span>{t.hero.downloadCv}</span>
        </a>
      </div>

      {/* Technical Core Pills */}
      <div
        role='list'
        aria-label={
          language === 'en' ? 'Core technologies' : 'Tecnologías principales'
        }
        className='pt-8 border-t border-(--border-color) flex flex-wrap items-center justify-center md:justify-start gap-2.5'
      >
        {TECH_CORE.map((tech) => (
          <span
            key={tech}
            role='listitem'
            className='px-3 py-1.5 text-xs font-medium rounded-lg bg-(--bg-card) border border-(--border-color) text-(--text-primary) shadow-2xs hover:border-(--accent) cursor-default select-none transition-colors'
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
};
