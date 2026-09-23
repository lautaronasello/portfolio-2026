'use client';
import React from 'react';
import {
  LuMail,
  LuFileText,
  LuGithub,
  LuLinkedin,
  LuArrowUpRight,
} from 'react-icons/lu';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id='contacto'
      className='max-w-6xl mx-auto px-6 py-20 scroll-mt-10'
    >
      <div className='p-8 md:p-12 bg-(--bg-card) rounded-3xl border border-(--border-color) text-center relative overflow-hidden'>
        {/* Glow sutil de fondo */}
        <div className='absolute -top-24 -left-24 w-48 h-48 bg-(--accent-light) rounded-full blur-3xl opacity-50 pointer-events-none' />

        {/* Encabezado */}
        <h2 className='text-2xl md:text-4xl font-bold tracking-tight text-(--text-primary) mb-4'>
          ¿Tenés una idea en mente o querés sumar fuerza a tu equipo?
        </h2>
        <p className='text-sm md:text-base text-(--text-muted) max-w-xl mx-auto mb-8 leading-relaxed'>
          Escribime y lo conversamos.
        </p>

        {/* Botón Principal (Mail Directo) */}
        <div className='flex justify-center mb-8'>
          <a
            href='mailto:lautaronasello@gmail.com'
            className='inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-xl bg-(--accent) hover:opacity-90 transition shadow-sm'
          >
            <LuMail className='w-4 h-4' />
            <span>lautaronasello@gmail.com</span>
          </a>
        </div>

        {/* Accesos Secundarios */}
        <div className='pt-8 border-t border-(--border-color) flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-(--text-muted)'>
          <a
            href='/cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-(--bg-main) border border-(--border-color) hover:border-(--accent) hover:text-(--text-primary) transition'
          >
            <LuFileText className='w-3.5 h-3.5' />
            <span>Descargar CV</span>
            <LuArrowUpRight className='w-3 h-3 opacity-60' />
          </a>

          <a
            href='https://github.com/lautaronasello'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-(--bg-main) border border-(--border-color) hover:border-(--accent) hover:text-(--text-primary) transition'
          >
            <LuGithub className='w-3.5 h-3.5' />
            <span>GitHub</span>
            <LuArrowUpRight className='w-3 h-3 opacity-60' />
          </a>

          <a
            href='https://linkedin.com/in/lautaronasello'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-(--bg-main) border border-(--border-color) hover:border-(--accent) hover:text-(--text-primary) transition'
          >
            <LuLinkedin className='w-3.5 h-3.5' />
            <span>LinkedIn</span>
            <LuArrowUpRight className='w-3 h-3 opacity-60' />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
