'use client';

import React, { useState } from 'react';
import { OtherProject } from '@/types/project';
import { otherProjectsData } from '@/data/otherProjects';
import {
  LuX,
  LuFolderGit2,
  LuExternalLink,
  LuImage,
  LuGithub,
  LuLayers,
} from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface OtherProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects?: OtherProject[];
}

export const OtherProjectsModal: React.FC<OtherProjectsModalProps> = ({
  isOpen,
  onClose,
  projects = otherProjectsData,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 md:p-6 overflow-y-auto'
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className='relative w-full max-w-4xl bg-(--bg-card) border border-(--border-color) rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]'
        >
          {/* Header */}
          <div className='p-6 border-b border-(--border-color) flex items-center justify-between bg-(--bg-card) sticky top-0 z-10'>
            <div className='flex items-center gap-3'>
              <div className='p-2.5 rounded-xl bg-(--accent-light) text-(--accent)'>
                <LuFolderGit2 className='w-6 h-6' />
              </div>
              <div>
                <h2 className='text-xl font-bold text-(--text-primary) tracking-tight'>
                  Otros Proyectos
                </h2>
                <p className='text-xs text-(--text-muted) mt-0.5'>
                  Desarrollos adicionales, herramientas, bots y experimentos.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className='p-2 rounded-xl text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-main) transition'
              aria-label='Cerrar modal'
            >
              <LuX className='w-5 h-5' />
            </button>
          </div>

          {/* Project List */}
          <div className='p-6 overflow-y-auto space-y-6 flex-1'>
            {projects.map((proj) => (
              <div
                key={proj.id}
                className='p-5 rounded-xl bg-(--bg-main) border border-(--border-color) hover:border-(--accent)/50 transition-all duration-200 flex flex-col justify-between gap-4'
              >
                <div>
                  <div className='flex items-start justify-between gap-4 mb-2'>
                    <div>
                      {proj.category && (
                        <span className='text-[10px] font-bold uppercase tracking-wider text-(--accent) bg-(--accent-light) px-2 py-0.5 rounded-md inline-block mb-1'>
                          {proj.category}
                        </span>
                      )}
                      <h3 className='text-lg font-bold text-(--text-primary) leading-snug'>
                        {proj.title}
                      </h3>
                    </div>

                    {/* External links */}
                    <div className='flex items-center gap-2 shrink-0'>
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-1.5 rounded-lg text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-card) border border-transparent hover:border-(--border-color) transition'
                          title='Ver código en GitHub'
                        >
                          <LuGithub className='w-4 h-4' />
                        </a>
                      )}
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-1.5 rounded-lg text-(--accent) hover:bg-(--accent-light) border border-transparent transition'
                          title='Ver proyecto live'
                        >
                          <LuExternalLink className='w-4 h-4' />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description: Qué hace */}
                  <p className='text-sm text-(--text-muted) leading-relaxed mt-1 mb-4'>
                    {proj.description}
                  </p>

                  {/* Technologies: Qué tecnologías */}
                  <div className='flex items-center gap-1.5 mb-2 text-xs font-semibold text-(--text-primary)'>
                    <LuLayers className='w-3.5 h-3.5 text-(--accent)' />
                    <span>Tecnologías:</span>
                  </div>
                  <div className='flex flex-wrap gap-1.5 mb-3'>
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2.5 py-1 text-xs font-medium rounded-md bg-(--bg-card) border border-(--border-color) text-(--text-muted)'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Screenshots: screenshots en caso de que existan */}
                  {proj.screenshots && proj.screenshots.length > 0 && (
                    <div className='mt-4 pt-3 border-t border-(--border-color)'>
                      <div className='flex items-center gap-1.5 text-xs font-semibold text-(--text-muted) mb-2.5'>
                        <LuImage className='w-3.5 h-3.5 text-(--accent)' />
                        <span>
                          Capturas de pantalla ({proj.screenshots.length}):
                        </span>
                      </div>
                      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2.5'>
                        {proj.screenshots.map((imgUrl, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(imgUrl)}
                            className='relative group aspect-video rounded-lg overflow-hidden border border-(--border-color) cursor-pointer bg-slate-900/50'
                          >
                            <Image
                              src={imgUrl}
                              alt={`${proj.title} screenshot ${idx + 1}`}
                              fill
                              unoptimized
                              className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
                            />
                            <div className='absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-medium gap-1'>
                              <LuImage className='w-4 h-4' />
                              <span>Ampliar</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className='p-4 border-t border-(--border-color) bg-(--bg-card) text-center text-xs text-(--text-muted)'>
            <p>
              ¿Quieres conocer más detalles sobre algún proyecto en específico?{' '}
              <a
                href='#contacto'
                onClick={onClose}
                className='text-(--accent) font-medium underline'
              >
                Contáctame
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for screenshots */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative max-w-5xl max-h-[90vh]'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 rounded-full transition'
            >
              <LuX className='w-6 h-6' />
            </button>
            <img
              src={selectedImage}
              alt='Screenshot ampliada'
              className='max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl border border-white/10'
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
