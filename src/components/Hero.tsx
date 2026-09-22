'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuMail, LuFileText } from 'react-icons/lu';

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='max-w-4xl mx-auto px-6 pt-20 pb-16 text-center md:text-left scroll-mt-10'
    >
      {/* Main Headline */}
      <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-(--text-primary) mb-6'>
        Construyo aplicaciones web y móviles de alto rendimiento.
      </h1>

      {/* Subtitle */}
      <p className='text-lg md:text-xl text-(--text-muted) leading-relaxed mb-8 max-w-2xl'>
        Fullstack & Mobile Engineer especializado en React/Next.js, Flutter y
        NestJS. Enfocado en código mantenible, escalabilidad y valor de negocio.
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <a
          href='mailto:lautaronasello@gmail.com'
          className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-(--accent) hover:opacity-90 transition shadow-sm'
        >
          <LuMail className='w-4 h-4' />
          <span>Enviar Mail</span>
        </a>

        <a
          href='/cv.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-(--border-color) text-(--text-primary) hover:bg-(--bg-card) hover:border-(--accent) transition'
        >
          <LuFileText className='w-4 h-4' />
          <span>Descargar CV</span>
        </a>
      </div>
    </motion.section>
  );
};
