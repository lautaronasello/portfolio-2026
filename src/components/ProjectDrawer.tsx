'use client';

import React, { useEffect, useState } from 'react';
import { Project } from '@/types/project';
import {
  LuX,
  LuGithub,
  LuExternalLink,
  LuCheck,
  LuLayers,
  LuImages,
  LuChevronLeft,
  LuChevronRight,
  LuMaximize2,
  LuInfo,
  LuTrendingUp,
  LuGitBranch,
  LuCpu,
} from 'react-icons/lu';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore, FaChrome } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectDrawerProps {
  project: Project;
  onClose: () => void;
}

type TabType = 'caseStudy' | 'adr';

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('caseStudy');
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const screenshots = project.screenshots || project.techView.screenshots || [];

  const handlePrev = () => {
    setActiveImageIdx((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveImageIdx((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isCarouselOpen) {
          setIsCarouselOpen(false);
        } else {
          onClose();
        }
      } else if (isCarouselOpen && e.key === 'ArrowLeft') {
        handlePrev();
      } else if (isCarouselOpen && e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isCarouselOpen, screenshots.length]);

  return (
    <>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        className='fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200'
      >
        <div className='w-full max-w-2xl bg-(--bg-card) h-full overflow-y-auto p-6 sm:p-8 shadow-2xl border-l border-(--border-color) flex flex-col justify-between'>
          <div>
            {/* Header */}
            <div className='flex items-center justify-between border-b border-(--border-color) pb-4 mb-5'>
              <div>
                <span className='text-xs font-semibold text-(--accent) uppercase tracking-wider flex items-center gap-1.5'>
                  <LuCpu className='w-3.5 h-3.5' />
                  <span>Especificación Técnica Senior</span>
                </span>
                <h3 className='text-2xl font-bold text-(--text-primary) mt-1'>
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className='p-2 rounded-lg text-(--text-muted) hover:bg-(--bg-main) transition cursor-pointer'
              >
                <LuX className='w-5 h-5' />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className='flex items-center gap-2 mb-6 border-b border-(--border-color) pb-2 overflow-x-auto'>
              <button
                onClick={() => setActiveTab('caseStudy')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-2 shrink-0 ${
                  activeTab === 'caseStudy'
                    ? 'bg-(--accent) text-white shadow-sm'
                    : 'text-(--text-muted) hover:bg-(--bg-main) hover:text-(--text-primary)'
                }`}
              >
                <LuLayers className='w-4 h-4' />
                <span>Case Study (4 Bloques)</span>
              </button>

              <button
                onClick={() => setActiveTab('adr')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-2 shrink-0 ${
                  activeTab === 'adr'
                    ? 'bg-(--accent) text-white shadow-sm'
                    : 'text-(--text-muted) hover:bg-(--bg-main) hover:text-(--text-primary)'
                }`}
              >
                <LuGitBranch className='w-4 h-4' />
                <span>ADR & Trigger</span>
              </button>
            </div>

            {/* TAB 1: Case Study (4 Bloques) */}
            {activeTab === 'caseStudy' && (
              <div className='space-y-6 animate-in fade-in duration-200'>
                {/* 1. Problema */}
                <div className='p-4 rounded-2xl bg-(--bg-main) border border-(--border-color)'>
                  <h4 className='text-xs font-bold text-(--accent) uppercase tracking-wider mb-1'>
                    1. Problema (Definición Quirúrgica)
                  </h4>
                  <p className='text-sm text-(--text-primary) leading-relaxed font-medium'>
                    {project.caseStudy?.problem || project.clientView.problem}
                  </p>
                </div>

                {/* 2. Rol */}
                <div className='p-4 rounded-2xl bg-(--bg-main) border border-(--border-color)'>
                  <h4 className='text-xs font-bold text-(--accent) uppercase tracking-wider mb-1'>
                    2. Rol & Propiedad Técnica
                  </h4>
                  <p className='text-sm text-(--text-primary) leading-relaxed'>
                    {project.caseStudy?.role || 'Lead Software Engineer.'}
                  </p>
                </div>

                {/* 3. Método (Verbos Imperativos) */}
                <div>
                  <h4 className='text-xs font-bold text-(--accent) uppercase tracking-wider mb-3'>
                    3. Método & Acciones Técnicas
                  </h4>
                  <ul className='space-y-2.5'>
                    {(project.caseStudy?.method || project.techView.highlights).map(
                      (action, idx) => (
                        <li
                          key={idx}
                          className='flex items-start gap-2.5 text-sm text-(--text-muted)'
                        >
                          <LuCheck className='w-4 h-4 text-(--accent) shrink-0 mt-0.5' />
                          <span>{action}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* 4. Resultado */}
                <div className='p-4 rounded-2xl bg-(--accent-light) border border-(--border-color)'>
                  <h4 className='text-xs font-bold text-(--accent) uppercase tracking-wider mb-1 flex items-center gap-1.5'>
                    <LuTrendingUp className='w-4 h-4' />
                    <span>4. Resultado & Impacto Cuantificable</span>
                  </h4>
                  <p className='text-sm font-semibold text-(--text-primary) leading-relaxed'>
                    {project.caseStudy?.result || project.clientView.businessValue}
                  </p>
                </div>

                {/* Stack Tags */}
                <div>
                  <h4 className='text-xs font-bold text-(--text-muted) uppercase tracking-wider mb-2.5'>
                    Stack Implementado
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.techView.stack.map((tech) => (
                      <span
                        key={tech}
                        className='px-2.5 py-1 text-xs font-medium rounded-lg bg-(--bg-main) border border-(--border-color) text-(--text-primary)'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Architecture Decision Record (ADR) */}
            {activeTab === 'adr' && (
              <div className='space-y-6 animate-in fade-in duration-200'>
                {project.adr ? (
                  <>
                    <div className='p-5 rounded-2xl bg-(--bg-main) border border-(--border-color) space-y-4'>
                      <div>
                        <span className='text-[10px] font-bold text-(--accent) uppercase tracking-widest px-2 py-0.5 rounded-full bg-(--accent-light)'>
                          ADR Document
                        </span>
                        <h4 className='text-base font-bold text-(--text-primary) mt-2'>
                          {project.adr.title}
                        </h4>
                      </div>

                      <div>
                        <h5 className='text-xs font-semibold text-(--text-muted) uppercase tracking-wider mb-1'>
                          Contexto del Desafío
                        </h5>
                        <p className='text-sm text-(--text-primary) leading-relaxed'>
                          {project.adr.context}
                        </p>
                      </div>

                      <div>
                        <h5 className='text-xs font-semibold text-(--text-muted) uppercase tracking-wider mb-1'>
                          Decisión Adoptada
                        </h5>
                        <p className='text-sm text-(--text-primary) leading-relaxed font-medium'>
                          {project.adr.decision}
                        </p>
                      </div>
                    </div>

                    {/* Revisit Trigger (Critical Senior Pattern) */}
                    <div className='p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2'>
                      <div className='flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider'>
                        <LuInfo className='w-4 h-4 shrink-0' />
                        <span>Revisit Trigger (Disparador de Revisión)</span>
                      </div>
                      <p className='text-sm text-(--text-primary) leading-relaxed font-medium'>
                        {project.adr.revisitTrigger}
                      </p>
                      <p className='text-[11px] text-(--text-muted) italic mt-1'>
                        * Las decisiones de arquitectura son reversibles por diseño. Este disparador define las premisas de volumen o latencia que obligan a reevaluar la solución.
                      </p>
                    </div>
                  </>
                ) : (
                  <p className='text-sm text-(--text-muted)'>
                    No hay registros ADR documentados para este proyecto.
                  </p>
                )}
              </div>
            )}

            {/* Screenshots Gallery Section (Always accessible) */}
            {screenshots.length > 0 && (
              <div className='mt-8 pt-6 border-t border-(--border-color)'>
                <h4 className='text-xs font-semibold text-(--text-primary) mb-3 flex items-center justify-between'>
                  <span className='flex items-center gap-2'>
                    <LuImages className='w-4 h-4 text-(--accent)' />
                    <span>Capturas de Pantalla</span>
                  </span>
                  <span className='text-xs font-normal text-(--text-muted)'>
                    {screenshots.length}{' '}
                    {screenshots.length === 1 ? 'captura' : 'capturas'}
                  </span>
                </h4>

                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-2'>
                    {screenshots.slice(0, 3).map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveImageIdx(idx);
                          setIsCarouselOpen(true);
                        }}
                        className='relative group aspect-video rounded-xl overflow-hidden border border-(--border-color) bg-(--bg-main) hover:border-(--accent) transition shadow-xs cursor-pointer'
                      >
                        <Image
                          src={imgUrl}
                          alt={`${project.title} preview ${idx + 1}`}
                          fill
                          unoptimized
                          className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity'>
                          <LuMaximize2 className='w-5 h-5 text-white drop-shadow-md' />
                        </div>
                        {idx === 2 && screenshots.length > 3 && (
                          <div className='absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-bold'>
                            +{screenshots.length - 3} más
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActiveImageIdx(0);
                      setIsCarouselOpen(true);
                    }}
                    className='w-full py-2.5 px-4 rounded-xl border border-(--border-color) bg-(--bg-main) hover:border-(--accent) hover:bg-(--accent-light) text-xs font-semibold text-(--text-primary) flex items-center justify-center gap-2 transition cursor-pointer'
                  >
                    <LuImages className='w-4 h-4 text-(--accent)' />
                    <span>Ver galería completa ({screenshots.length})</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div className='pt-6 border-t border-(--border-color) flex items-center gap-3 flex-wrap mt-6'>
            {project.techView.githubUrl && (
              <a
                href={project.techView.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-(--border-color) text-(--text-primary) hover:bg-(--bg-main) transition min-w-32'
              >
                <LuGithub className='w-4 h-4' />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.techView.demoUrl && (
              <a
                href={project.techView.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-(--accent) text-white hover:opacity-90 transition min-w-32'
              >
                <LuExternalLink className='w-4 h-4' />
                <span>Probar Demo</span>
              </a>
            )}

            {project.techView.webUrl && (
              <a
                href={project.techView.webUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-(--accent) text-white hover:opacity-90 transition min-w-32'
              >
                <FaChrome className='w-4 h-4' />
                <span>Sitio Web</span>
              </a>
            )}

            {project.techView.appStoreUrl && (
              <a
                href={project.techView.appStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-black text-white hover:opacity-90 transition min-w-32'
              >
                <FaAppStore className='w-4 h-4' />
                <span>App Store</span>
              </a>
            )}

            {project.techView.playStoreUrl && (
              <a
                href={project.techView.playStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-green-800 text-white hover:opacity-90 transition min-w-32'
              >
                <BiLogoPlayStore className='w-4 h-4' />
                <span>Google Play</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Carousel Modal */}
      {isCarouselOpen && screenshots.length > 0 && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCarouselOpen(false);
            }
          }}
          className='fixed inset-0 z-60 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none'
        >
          {/* Top Bar */}
          <div className='flex items-center justify-between text-white w-full max-w-6xl mx-auto pt-2 px-2'>
            <div>
              <h3 className='text-lg font-bold text-white'>{project.title}</h3>
              <p className='text-xs text-slate-400 mt-0.5'>
                Captura {activeImageIdx + 1} de {screenshots.length}
              </p>
            </div>
            <button
              onClick={() => setIsCarouselOpen(false)}
              className='p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer'
              title='Cerrar (Esc)'
            >
              <LuX className='w-6 h-6' />
            </button>
          </div>

          {/* Central Image Viewer */}
          <div className='relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full'>
            {screenshots.length > 1 && (
              <button
                onClick={handlePrev}
                className='absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-xs border border-white/20 transition hover:scale-110 shadow-lg cursor-pointer'
                title='Anterior (Flecha izquierda)'
              >
                <LuChevronLeft className='w-6 h-6' />
              </button>
            )}

            <div className='relative max-h-[72vh] flex items-center justify-center overflow-hidden rounded-2xl'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshots[activeImageIdx]}
                alt={`${project.title} captura ${activeImageIdx + 1}`}
                className='max-h-[72vh] max-w-[85vw] sm:max-w-[80vw] object-contain rounded-xl shadow-2xl transition-all duration-300'
              />
            </div>

            {screenshots.length > 1 && (
              <button
                onClick={handleNext}
                className='absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-xs border border-white/20 transition hover:scale-110 shadow-lg cursor-pointer'
                title='Siguiente (Flecha derecha)'
              >
                <LuChevronRight className='w-6 h-6' />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Navigation */}
          {screenshots.length > 1 && (
            <div className='flex items-center justify-center gap-3 overflow-x-auto py-3 max-w-full mx-auto px-4'>
              {screenshots.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition shrink-0 cursor-pointer ${
                    idx === activeImageIdx
                      ? 'border-(--accent) scale-105 shadow-xl ring-2 ring-(--accent)/50'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    unoptimized
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
