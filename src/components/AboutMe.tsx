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
              Detrás del código
            </h3>
            <p className='text-sm text-(--text-muted) leading-relaxed mb-4'>
              ¡Hola! Soy Lautaro Nasello y soy desarrollador Fullstack. Me
              apasiona resolver problemas complejos intentando aplicar
              soluciones sistematicas y prolijas, aunque tambien a veces invento
              soluciones mas creativas y resolutivas. Esto no solo lo aplico a
              mi desarrollo profesional sino tambien en mi ambito personal. Me
              preocupa mantener buenas relaciones interpersonales ya que
              considero que son importantes para el desarrollo profesional y
              personal.
            </p>
            <p className='text-sm text-(--text-muted) leading-relaxed'>
              Creo firmemente que el mejor valor agregado que le puedo ofrecer a
              cualquier ambito, mas alla de mi experiencia y habilidades
              tecnicas, es mi capacidad de mantener el buen ambiente y las
              buenas relaciones interpersonales.
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
