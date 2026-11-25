'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { Project } from '@/types/project';
import { ProjectDrawer } from './ProjectDrawer';
import { useLanguage } from './LanguageProvider';
import {
  LuCpu,
  LuExternalLink,
  LuFolderGit2,
  LuGlobe,
  LuGithub,
} from 'react-icons/lu';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

type TabType = 'featured' | 'systems' | 'all';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('featured');
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const tabs: { id: TabType; label: string; count: number }[] = [
    {
      id: 'featured',
      label: t.projects.tabs.featured,
      count: projectsData.filter((p) => p.tier === 'featured').length,
    },
    {
      id: 'systems',
      label: t.projects.tabs.systems,
      count: projectsData.filter((p) => p.tier === 'systems').length,
    },
    {
      id: 'all',
      label: t.projects.tabs.all,
      count: projectsData.length,
    },
  ];

  const filteredProjects =
    activeTab === 'all'
      ? projectsData
      : projectsData.filter((p) => p.tier === activeTab);

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      id='proyectos'
      className='max-w-6xl mx-auto px-6 py-16 scroll-mt-10'
    >
      {/* Section Header */}
      <div className='mb-8'>
        <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-(--text-primary)'>
          {t.projects.title}
        </h2>
        <p className='text-sm text-(--text-muted) mt-1.5 max-w-2xl'>
          {t.projects.subtitle}
        </p>
      </div>

      {/* Filter Tabs (Alternativa A: Inline Segmentation) */}
      <div
        className='flex flex-wrap items-center gap-2 mb-8'
        role='tablist'
        aria-label={
          language === 'en' ? 'Project categories' : 'Categorías de proyectos'
        }
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role='tab'
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 ring-offset-(--bg-main) ${
                isActive
                  ? 'bg-(--accent) text-white shadow-xs'
                  : 'bg-(--bg-card) border border-(--border-color) text-(--text-muted) hover:text-(--text-primary) hover:border-(--accent)'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`ml-2 px-1.5 py-0.5 text-[10px] rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-(--bg-main) text-(--text-muted)'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => {
            const itemTrans =
              t.projects.items[project.id as keyof typeof t.projects.items];
            const category = itemTrans?.category ?? project.category;
            const title = itemTrans?.title ?? project.title;
            const solution =
              itemTrans?.clientView?.solution ?? project.clientView.solution;

            const visibleTags = project.tags.slice(0, 4);
            const remainingTagsCount = project.tags.length - visibleTags.length;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                tabIndex={0}
                role='button'
                aria-haspopup='dialog'
                aria-label={
                  language === 'en'
                    ? `Open architecture details for ${title}`
                    : `Abrir detalles de arquitectura de ${title}`
                }
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className='group relative flex flex-col justify-between p-6 sm:p-7 bg-(--bg-card) rounded-2xl border border-(--border-color) hover:border-(--accent) transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 ring-offset-(--bg-main)'
              >
                <div>
                  {/* Header: Category & Platform Indicators */}
                  <div className='flex items-center justify-between gap-3 mb-2.5'>
                    <span className='text-xs font-semibold uppercase tracking-wider text-(--accent)'>
                      {category}
                    </span>

                    {/* Platform / Ecosystem Badges */}
                    <div
                      className='flex items-center gap-1.5'
                      aria-label={
                        language === 'en'
                          ? 'Available platforms'
                          : 'Plataformas disponibles'
                      }
                    >
                      {project.techView.appStoreUrl && (
                        <span
                          title='App Store (iOS)'
                          className='p-1 rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                        >
                          <FaAppStore
                            className='w-3.5 h-3.5'
                            aria-hidden='true'
                          />
                        </span>
                      )}
                      {project.techView.playStoreUrl && (
                        <span
                          title='Google Play (Android)'
                          className='p-1 rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                        >
                          <BiLogoPlayStore
                            className='w-3.5 h-3.5'
                            aria-hidden='true'
                          />
                        </span>
                      )}
                      {project.techView.githubUrl && (
                        <span
                          title='Código público en GitHub'
                          className='p-1 rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                        >
                          <LuGithub
                            className='w-3.5 h-3.5'
                            aria-hidden='true'
                          />
                        </span>
                      )}
                      {(project.techView.webUrl ||
                        project.techView.demoUrl) &&
                        !project.techView.appStoreUrl && (
                          <span
                            title='Plataforma Web'
                            className='p-1 rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                          >
                            <LuGlobe
                              className='w-3.5 h-3.5'
                              aria-hidden='true'
                            />
                          </span>
                        )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold mb-3 text-(--text-primary) group-hover:text-(--accent) transition-colors'>
                    {title}
                  </h3>

                  {/* Solution / Business Value */}
                  <p className='text-sm text-(--text-muted) leading-relaxed mb-6 text-pretty'>
                    {solution}
                  </p>

                  {/* Hierarchical Technology Tags */}
                  <div
                    className='flex flex-wrap gap-1.5 mb-6'
                    role='list'
                    aria-label={
                      language === 'en'
                        ? 'Core technologies'
                        : 'Tecnologías principales'
                    }
                  >
                    {visibleTags.map((tag, idx) => {
                      const isArchitectureHighlight =
                        idx === 0 ||
                        tag.toLowerCase().includes('clean') ||
                        tag.toLowerCase().includes('nest') ||
                        tag.toLowerCase().includes('.net');

                      return (
                        <span
                          key={tag}
                          role='listitem'
                          className={
                            isArchitectureHighlight
                              ? 'px-2.5 py-1 text-xs font-semibold rounded-md bg-(--accent-light) text-(--accent) border border-(--accent)/20'
                              : 'px-2.5 py-1 text-xs font-medium rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                          }
                        >
                          {tag}
                        </span>
                      );
                    })}
                    {remainingTagsCount > 0 && (
                      <span
                        role='listitem'
                        className='px-2 py-1 text-xs font-medium rounded-md bg-(--bg-main) border border-(--border-color) text-(--text-muted)'
                        title={project.tags.slice(4).join(', ')}
                      >
                        +{remainingTagsCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className='pt-4 border-t border-(--border-color) flex items-center justify-between'>
                  {/* Visual Architecture Trigger (delegated to article button) */}
                  <div className='inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) group-hover:underline'>
                    <LuCpu className='w-3.5 h-3.5' aria-hidden='true' />
                    <span>{t.projects.viewArchitecture}</span>
                  </div>

                  {/* External Link with StopPropagation & Accessible Hit Target */}
                  {(project.techView.demoUrl || project.techView.webUrl) && (
                    <a
                      href={project.techView.demoUrl ?? project.techView.webUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={
                        language === 'en'
                          ? `Visit live demo of ${title} (opens in new tab)`
                          : `Visitar demo de ${title} (abre en nueva pestaña)`
                      }
                      onClick={(e) => e.stopPropagation()}
                      className='p-2.5 -m-2.5 rounded-lg text-(--text-muted) hover:text-(--accent) hover:bg-(--bg-main) transition inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)'
                    >
                      <LuExternalLink
                        className='w-4 h-4'
                        aria-hidden='true'
                      />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Inline Switch to All Projects (Optional helper when on Featured) */}
      {activeTab === 'featured' && (
        <div className='mt-12 flex justify-center'>
          <button
            onClick={() => setActiveTab('all')}
            className='inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-(--text-primary) bg-(--bg-card) border border-(--border-color) hover:border-(--accent) hover:text-(--accent) active:scale-[0.98] rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 ring-offset-(--bg-main)'
          >
            <LuFolderGit2
              className='w-4 h-4 text-(--accent)'
              aria-hidden='true'
            />
            <span>
              {language === 'en'
                ? `Explore all projects (${projectsData.length})`
                : `Explorar todos los proyectos (${projectsData.length})`}
            </span>
          </button>
        </div>
      )}

      {/* Tech Detail Modal/Drawer (unificado para todos los proyectos) */}
      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
};
