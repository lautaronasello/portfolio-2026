'use client';
import React from 'react';
import { LuActivity, LuCoffee, LuTerminal } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id='sobre-mi'
      className='max-w-6xl mx-auto px-6 py-16 scroll-mt-10'
    >
      <div className='p-8 md:p-12 bg-(--bg-card) rounded-3xl border border-(--border-color)'>
        <h2 className='text-2xl font-bold tracking-tight text-(--text-primary) mb-6'>
          {t.about.title}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Professional Philosophy */}
          <div>
            <h3 className='text-lg font-semibold text-(--text-primary) mb-3'>
              {t.about.behindCodeTitle}
            </h3>
            <p className='text-sm text-(--text-muted) leading-relaxed mb-4'>
              {t.about.behindCodeText}
            </p>
          </div>

          {/* Human Factor / Outside terminal */}
          <div>
            <h3 className='text-lg font-semibold text-(--text-primary) mb-3'>
              {t.about.outsideTerminalTitle}
            </h3>
            <ul className='space-y-3 text-sm text-(--text-muted)'>
              <li className='flex items-center gap-3 p-3 rounded-xl bg-(--bg-main) border border-(--border-color)'>
                <LuCoffee className='w-4 h-4 text-(--accent) shrink-0' />
                <span>
                  <strong>{t.about.fuelLabel}</strong> {t.about.fuelText}
                </span>
              </li>
              <li className='flex items-center gap-3 p-3 rounded-xl bg-(--bg-main) border border-(--border-color)'>
                <LuActivity className='w-4 h-4 text-(--accent) shrink-0' />
                <span>
                  <strong>{t.about.movementLabel}</strong>{' '}
                  {t.about.movementText}
                </span>
              </li>
              <li className='flex items-center gap-3 p-3 rounded-xl bg-(--bg-main) border border-(--border-color)'>
                <LuTerminal className='w-4 h-4 text-(--accent) shrink-0' />
                <span>
                  <strong>{t.about.curiosityLabel}</strong>{' '}
                  {t.about.curiosityText}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

