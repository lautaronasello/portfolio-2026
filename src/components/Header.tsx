'use client';

import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Palette } from '@/types/project';
import { LuFileText, LuSparkles } from 'react-icons/lu';

export const Header = () => {
  const { palette, setPalette } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  const colors: { id: Palette; label: string; bg: string }[] = [
    { id: 'indigo', label: 'Índigo', bg: 'bg-[#4F46E5]' },
    { id: 'teal', label: 'Teal', bg: 'bg-[#0D9488]' },
    { id: 'amber', label: 'Amber', bg: 'bg-[#D97706]' },
  ];

  return (
    <header className='sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-(--border-color)'>
      <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo / Name */}
        <a
          href='#'
          className='font-bold text-lg tracking-tight hover:opacity-80 transition'
        >
          <span className='text-(--accent)'>&lt;</span>Lautaro Martin Nasello
          Vittar
          <span className='text-(--accent)'>/&gt;</span>
        </a>

        {/* Navigation */}
        <nav className='hidden md:flex items-center gap-8 text-sm font-medium text-(--text-muted)'>
          <a
            href='#proyectos'
            className='hover:text-(--text-primary) transition'
          >
            Proyectos
          </a>
          <a
            href='#capacidades'
            className='hover:text-(--text-primary) transition'
          >
            Capacidades
          </a>
          <a
            href='#sobre-mi'
            className='hover:text-(--text-primary) transition'
          >
            Sobre Mí
          </a>
          <a
            href='#contacto'
            className='hover:text-(--text-primary) transition'
          >
            Contacto
          </a>
        </nav>

        {/* Right Action Area */}
        <div className='flex items-center gap-4'>
          {/* Palette Switcher with Hover Tooltip */}
          <div
            className='relative flex items-center gap-1.5 p-1.5 rounded-full border border-(--border-color) bg-(--bg-main)'
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setPalette(c.id)}
                aria-label={c.label}
                className={`w-4 h-4 rounded-full ${c.bg} transition-transform ${
                  palette === c.id
                    ? 'ring-2 ring-offset-1 ring-slate-400 scale-110'
                    : 'opacity-70 hover:opacity-100'
                }`}
              />
            ))}

            {/* Easter Egg Tooltip */}
            {showTooltip && (
              <div className='absolute right-0 top-10 w-64 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-200'>
                <div className='flex items-start gap-2'>
                  <LuSparkles className='w-4 h-4 text-amber-400 shrink-0 mt-0.5' />
                  <p className='leading-relaxed'>
                    No me pude decidir que color de acento elegir para mis
                    componentes. Lo dejo a tu elección!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Download CV */}
          <a
            href='/cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-(--border-color) hover:border-(--accent) hover:text-(--accent) transition'
          >
            <LuFileText className='w-3.5 h-3.5' />
            <span>CV</span>
          </a>
        </div>
      </div>
    </header>
  );
};
