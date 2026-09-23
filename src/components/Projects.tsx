'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { Project } from '@/types/project';
import { ProjectDrawer } from './ProjectDrawer';
import { OtherProjectsModal } from './OtherProjectsModal';
import { LuCpu, LuExternalLink, LuFolderGit2 } from 'react-icons/lu';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOtherProjectsOpen, setIsOtherProjectsOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id='proyectos'
      className='max-w-6xl mx-auto px-6 py-16 scroll-mt-10'
    >
      <div className='mb-12'>
        <h2 className='text-2xl font-bold tracking-tight text-(--text-primary)'>
          Proyectos Destacados
        </h2>
        <p className='text-sm text-(--text-muted) mt-1'>
          Productos diseñados para resolver problemas reales con arquitectura
          escalable.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className='cursor-pointer group flex flex-col justify-between p-6 bg-(--bg-card) rounded-2xl border border-(--border-color) hover:border-(--accent) transition-all duration-200 shadow-sm hover:shadow-md'
          >
            <div>
              {/* Category */}
              <span className='text-xs font-semibold uppercase tracking-wider text-(--accent)'>
                {project.category}
              </span>

              {/* Title */}
              <h3 className='text-xl font-bold mt-2 mb-3 text-(--text-primary)'>
                {project.title}
              </h3>

              {/* Client Value */}
              <p className='text-sm text-(--text-muted) leading-relaxed mb-4'>
                {project.clientView.solution}
              </p>

              {/* Badges */}
              <div className='flex flex-wrap gap-1.5 mb-6'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-2.5 py-1 text-xs font-medium rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className='pt-4 border-t border-(--border-color) flex items-center justify-between'>
              <button
                onClick={() => setSelectedProject(project)}
                className='inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:underline'
              >
                <LuCpu className='w-3.5 h-3.5' />
                <span>Ver arquitectura</span>
              </button>

              {(project.techView.demoUrl || project.techView.webUrl) && (
                <a
                  href={project.techView.demoUrl ?? project.techView.webUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-(--text-muted) hover:text-(--text-primary) transition'
                >
                  <LuExternalLink className='w-4 h-4' />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Button to view other projects */}
      <div className='mt-10 flex justify-center'>
        <button
          onClick={() => setIsOtherProjectsOpen(true)}
          className='inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-(--text-primary) bg-(--bg-card) border border-(--border-color) hover:border-(--accent) hover:text-(--accent) rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer'
        >
          <LuFolderGit2 className='w-4 h-4 text-(--accent)' />
          <span>Ver otros proyectos</span>
        </button>
      </div>

      {/* Tech Detail Modal/Drawer */}
      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Other Projects Modal */}
      <OtherProjectsModal
        isOpen={isOtherProjectsOpen}
        onClose={() => setIsOtherProjectsOpen(false)}
      />
    </motion.section>
  );
};

