'use client';
import React from 'react';
import { LuActivity, LuCoffee, LuTerminal } from 'react-icons/lu';
import { motion } from 'framer-motion';

export const AboutMe = () => {
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
          Sobre Mí
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Professional Philosophy */}
          <div>
            <h3 className='text-lg font-semibold text-(--text-primary) mb-3'>
              Filosofía de Ingeniería
            </h3>
            <p className='text-sm text-(--text-muted) leading-relaxed mb-4'>
              Abordo el desarrollo de software como un sistema evolutivo donde las decisiones de arquitectura deben equilibrar mantenibilidad, tiempo de entrega y requerimientos del negocio. Priorizo la modularidad (Clean Architecture), el manejo explícito de errores y la documentación transparente de trade-offs mediante Architecture Decision Records (ADR).
            </p>
            <p className='text-sm text-(--text-muted) leading-relaxed'>
              Combino el rigor técnico con una sólida capacidad de comunicación y colaboración. Concibo el trabajo en equipo como un catalizador para mantener un ambiente de alta productividad, mitigar la deuda técnica y acelerar la entrega de productos de alto impacto.
            </p>
          </div>

          {/* Human Factor / Outside terminal */}
          <div>
            <h3 className='text-lg font-semibold text-(--text-primary) mb-3'>
              Fuera de la terminal
            </h3>
            <ul className='space-y-3 text-sm text-(--text-muted)'>
              <li className='flex items-center gap-3 p-3 rounded-xl bg-(--bg-main) border border-(--border-color)'>
                <LuCoffee className='w-4 h-4 text-(--accent) shrink-0' />
                <span>
                  <strong>Combustible:</strong> El mate es infaltable en cada
                  sesión de desarrollo.
                </span>
              </li>
              <li className='flex items-center gap-3 p-3 rounded-xl bg-(--bg-main) border border-(--border-color)'>
                <LuActivity className='w-4 h-4 text-(--accent) shrink-0' />
                <span>
                  <strong>En movimiento:</strong> Fuera de la computadora me vas
                  a encontrar jugando al pádel o entrenando.
                </span>
              </li>
              <li className='flex items-center gap-3 p-3 rounded-xl bg-(--bg-main) border border-(--border-color)'>
                <LuTerminal className='w-4 h-4 text-(--accent) shrink-0' />
                <span>
                  <strong>Curiosidad:</strong> Explorando nuevas herramientas,
                  automatizaciones e integraciones para simplificar procesos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
