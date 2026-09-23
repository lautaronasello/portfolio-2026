'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aiProjectsData } from '@/data/aiProjects';
import { AIProject } from '@/types/project';
import { LuBot, LuWorkflow, LuPlus } from 'react-icons/lu';
import { ProjectListDrawer } from './ProjectListDrawer';

/* ─── Single project card ──────────────────────────────────────────────── */
const AIProjectCard: React.FC<{
  project: AIProject;
  index: number;
  onToggle: () => void;
}> = ({ project, index, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      onClick={onToggle}
      className='flex flex-col bg-(--bg-card) rounded-2xl border border-(--border-color) hover:border-(--accent) transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden cursor-pointer select-none'
    >
      {/* Top stripe accent */}
      <div className='h-1 w-full bg-linear-to-r from-(--accent) to-(--accent)/40' />

      <div className='p-6 flex flex-col gap-4 flex-1'>
        {/* Header row */}
        <div className='flex items-start justify-between gap-4'>
          <div className='flex-1 min-w-0'>
            <span className='inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) uppercase tracking-wider mb-1.5'>
              <LuBot className='w-3.5 h-3.5' />
              {project.sector}
            </span>
            <h3 className='text-lg font-bold text-(--text-primary) leading-snug'>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Problem → Solution */}
        <div className='space-y-3'>
          <div className='rounded-xl bg-(--bg-main) border border-(--border-color) p-4 min-h-60'>
            <p className='text-xs font-semibold text-(--text-muted) uppercase tracking-wider mb-1 '>
              Problema del cliente
            </p>
            <p className='text-sm text-(--text-muted) leading-relaxed'>
              {project.problem}
            </p>
          </div>
          <div className='rounded-xl bg-(--accent-light) border border-(--border-color) p-4 min-h-64'>
            <p className='text-xs font-semibold text-(--accent) uppercase tracking-wider mb-1'>
              Solución implementada
            </p>
            <p className='text-sm text-(--text-primary) leading-relaxed'>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Expandable: role highlights */}
        <div className='border-t border-(--border-color) pt-4'>
          <div className='w-full flex items-center justify-between text-xs font-semibold text-(--text-primary) hover:text-(--accent) transition'>
            <span className='flex items-center gap-1.5'>
              <LuWorkflow className='w-3.5 h-3.5 text-(--accent)' />
              Mi rol en la configuración ({project.roleHighlights.length}{' '}
              puntos)
            </span>

            <LuPlus className='w-4 h-4 text-(--text-muted) transition' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Section ──────────────────────────────────────────────────────────── */
export const AIProjects = () => {
  const [selectedProject, setSelectedProject] = useState<AIProject | null>(
    null,
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id='proyectos'
      className='max-w-6xl mx-auto px-6 py-16 '
    >
      {/* Section header */}
      <div className='mb-10'>
        <h2 className='text-2xl font-bold tracking-tight text-(--text-primary)'>
          Últimos Proyectos
        </h2>
        <p className='text-sm text-(--text-muted) mt-1.5 max-w-2xl leading-relaxed'>
          Proyectos para clientes reales donde, trabajando con la plataforma de{' '}
          <a
            href='https://atendium.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--accent) underline underline-offset-2 hover:text-(--accent-hover) transition'
          >
            atendium
          </a>
          , integré agentes de IA a sus canales de comunicación. Mi rol:
          relevamiento de necesidades, redacción de instrucciones, carga de
          contexto, diseño de flujos en n8n e integración con plataformas
          externas.
        </p>
      </div>

      {/* Projects grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {aiProjectsData.map((project, index) => (
          <AIProjectCard
            key={project.id}
            project={project}
            index={index}
            onToggle={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {/* Tech Detail Modal/Drawer */}
      {selectedProject && (
        <ProjectListDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
};
