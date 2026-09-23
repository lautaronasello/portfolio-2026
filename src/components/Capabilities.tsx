'use client';
import React from 'react';
import {
  LuCompass,
  LuCode,
  LuRocket,
  LuLayers,
  LuServer,
  LuWrench,
} from 'react-icons/lu';
import { motion } from 'framer-motion';

export const Capabilities = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Entender & Diseñar',
      description:
        'Definición de la lógica de negocio, flujos de usuario y arquitectura inicial antes de escribir la primera línea de código.',
      icon: LuCompass,
    },
    {
      number: '02',
      title: 'Construir & Iterar',
      description:
        'Desarrollo modular y limpio para Web, Mobile y Backend con entregas continuas para validar avances en tiempo real.',
      icon: LuCode,
    },
    {
      number: '03',
      title: 'Lanzar & Optimizar',
      description:
        'Despliegue del producto asegurando alta velocidad de carga, seguridad, experiencia fluida y buena mantenibilidad.',
      icon: LuRocket,
    },
  ];

  const techCategories = [
    {
      title: 'Frontend & Mobile',
      icon: LuLayers,
      skills: [
        'Next.js',
        'React',
        'Flutter',
        'TypeScript',
        'Tailwind CSS',
        'Material UI',
      ],
    },
    {
      title: 'Backend & Bases de Datos',
      icon: LuServer,
      skills: [
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'Supabase',
        'TypeORM',
        'WebSockets',
        'MySQL',
      ],
    },
    {
      title: 'Herramientas & Ecosistema',
      icon: LuWrench,
      skills: [
        'Git',
        'Docker',
        'Firebase',
        'n8n',
        'Figma (UI/UX)',
        'Antigravity',
      ],
    },
  ];

  return (
    <section
      id='capacidades'
      className='max-w-6xl mx-auto px-6 py-16 scroll-mt-10'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mb-12'
      >
        <h2 className='text-2xl font-bold tracking-tight text-(--text-primary)'>
          Capacidades & Ecosistema
        </h2>
        <p className='text-sm text-(--text-muted) mt-1'>
          Cómo transformo ideas en software funcional de extremo a extremo.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Lado Cliente: Proceso de Trabajo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h3 className='text-lg font-bold text-(--text-primary) mb-6 flex items-center gap-2'>
            <span>Proceso de Trabajo</span>
          </h3>

          <div className='space-y-4'>
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className='p-5 bg-(--bg-card) rounded-2xl border border-(--border-color) flex items-start gap-4'
                >
                  <div className='p-2.5 rounded-xl bg-(--bg-main) border border-(--border-color) text-(--accent) shrink-0'>
                    <Icon className='w-5 h-5' />
                  </div>
                  <div>
                    <div className='flex items-center gap-2'>
                      <span className='text-xs font-bold text-(--accent)'>
                        {step.number}
                      </span>
                      <h4 className='text-base font-semibold text-(--text-primary)'>
                        {step.title}
                      </h4>
                    </div>
                    <p className='text-xs text-(--text-muted) mt-1.5 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Lado Recruiter: Badges por Categoría */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h3 className='text-lg font-bold text-(--text-primary) mb-6 flex items-center gap-2'>
            <span>Stack & Herramientas</span>
          </h3>

          <div className='space-y-6'>
            {techCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className='p-5 bg-(--bg-card) rounded-2xl border border-(--border-color)'
                >
                  <div className='flex items-center gap-2 mb-3'>
                    <Icon className='w-4 h-4 text-(--accent)' />
                    <h4 className='text-sm font-semibold text-(--text-primary)'>
                      {cat.title}
                    </h4>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className='px-3 py-1 text-xs font-medium rounded-lg bg-(--bg-main) border border-(--border-color) text-(--text-primary)'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
