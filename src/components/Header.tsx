'use client';

import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { LuMenu, LuX, LuSun, LuMoon } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 w-full backdrop-blur-md bg-(--bg-card)/75 border-b border-(--border-color)'>
      <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4'>
        {/* Confident Identity / Logo */}
        <a
          href='#hero'
          aria-label={
            language === 'en'
              ? 'Lautaro Nasello - Go to top'
              : 'Lautaro Nasello - Ir al inicio'
          }
          className='font-bold text-lg tracking-tight hover:opacity-85 transition inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) rounded-lg shrink-0'
        >
          <span className='text-(--text-primary)'>Lautaro Nasello</span>
          <span className='text-xs font-semibold text-(--accent) hidden sm:inline tracking-wider'>
            / Fullstack
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className='hidden md:flex items-center gap-8 text-sm font-medium text-(--text-muted)'
          aria-label={
            language === 'en' ? 'Main navigation' : 'Navegación principal'
          }
        >
          <a
            href='#proyectos'
            className='hover:text-(--text-primary) hover:underline underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) rounded-md'
          >
            {t.header.nav.projects}
          </a>
          <a
            href='#capacidades'
            className='hover:text-(--text-primary) hover:underline underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) rounded-md'
          >
            {t.header.nav.capabilities}
          </a>
          <a
            href='#sobre-mi'
            className='hover:text-(--text-primary) hover:underline underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) rounded-md'
          >
            {t.header.nav.about}
          </a>
          <a
            href='#contacto'
            className='hover:text-(--text-primary) hover:underline underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) rounded-md'
          >
            {t.header.nav.contact}
          </a>
        </nav>

        {/* Right Action Controls: Language & Theme Toggle */}
        <div className='flex items-center gap-3 shrink-0'>
          {/* Language Switcher */}
          <div
            role='group'
            aria-label={
              language === 'en' ? 'Select language' : 'Seleccionar idioma'
            }
            className='flex items-center p-0.5 rounded-full border border-(--border-color) bg-(--bg-main) text-xs font-semibold'
          >
            <button
              type='button'
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
              className={`min-h-[28px] px-2.5 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) ${
                language === 'es'
                  ? 'bg-(--accent) text-white shadow-xs'
                  : 'text-(--text-muted) hover:text-(--text-primary)'
              }`}
            >
              ES
            </button>
            <button
              type='button'
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`min-h-[28px] px-2.5 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) ${
                language === 'en'
                  ? 'bg-(--accent) text-white shadow-xs'
                  : 'text-(--text-muted) hover:text-(--text-primary)'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button (Light / Dark) */}
          <button
            type='button'
            onClick={toggleTheme}
            aria-label={
              language === 'en'
                ? theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
                : theme === 'dark'
                  ? 'Cambiar a modo claro'
                  : 'Cambiar a modo oscuro'
            }
            title={
              language === 'en'
                ? theme === 'dark'
                  ? 'Light mode'
                  : 'Dark mode'
                : theme === 'dark'
                  ? 'Modo claro'
                  : 'Modo oscuro'
            }
            className='w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border border-(--border-color) bg-(--bg-main) text-(--text-muted) hover:text-(--accent) hover:border-(--accent) active:scale-[0.95] transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)'
          >
            {theme === 'dark' ? (
              <LuSun className='w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45' aria-hidden='true' />
            ) : (
              <LuMoon className='w-4 h-4 text-(--text-primary) transition-transform duration-300 hover:-rotate-12' aria-hidden='true' />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type='button'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-navigation'
            aria-label={
              isMobileMenuOpen
                ? language === 'en'
                  ? 'Close menu'
                  : 'Cerrar menú'
                : language === 'en'
                  ? 'Open navigation menu'
                  : 'Abrir menú de navegación'
            }
            className='md:hidden p-2 rounded-xl border border-(--border-color) bg-(--bg-card) text-(--text-primary) hover:border-(--accent) hover:text-(--accent) active:scale-[0.96] transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)'
          >
            {isMobileMenuOpen ? (
              <LuX className='w-5 h-5' aria-hidden='true' />
            ) : (
              <LuMenu className='w-5 h-5' aria-hidden='true' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id='mobile-navigation'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='md:hidden border-b border-(--border-color) bg-(--bg-card)/95 backdrop-blur-xl overflow-hidden'
          >
            <nav
              className='px-6 py-6 flex flex-col gap-4 text-base font-semibold'
              aria-label={
                language === 'en'
                  ? 'Mobile navigation'
                  : 'Navegación móvil'
              }
            >
              <a
                href='#proyectos'
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-(--text-muted) hover:text-(--accent) transition-colors py-1'
              >
                {t.header.nav.projects}
              </a>
              <a
                href='#capacidades'
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-(--text-muted) hover:text-(--accent) transition-colors py-1'
              >
                {t.header.nav.capabilities}
              </a>
              <a
                href='#sobre-mi'
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-(--text-muted) hover:text-(--accent) transition-colors py-1'
              >
                {t.header.nav.about}
              </a>
              <a
                href='#contacto'
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-(--text-muted) hover:text-(--accent) transition-colors py-1'
              >
                {t.header.nav.contact}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
