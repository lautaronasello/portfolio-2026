'use client';

import React from 'react';
import { AIProject } from '@/types/project';
import { LuCheck, LuX } from 'react-icons/lu';

interface ProjectListDrawerProps {
  project: AIProject;
  onClose: () => void;
}

export const ProjectListDrawer: React.FC<ProjectListDrawerProps> = ({
  project,
  onClose,
}) => {
  return (
    <>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        className='fixed inset-0 z-50 flex justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-500 items-center'
      >
        <div className='w-full max-w-xl bg-(--bg-card) h-fit overflow-y-auto p-8 shadow-2xl border-l border-(--border-color) flex flex-col justify-between items-center'>
          <div>
            {/* Header */}
            <div className='flex items-center justify-between border-b border-(--border-color) pb-4 mb-6'>
              <div>
                <span className='text-xs font-semibold text-(--accent) uppercase tracking-wider'>
                  Mi rol en la configuración
                </span>
                <h3 className='text-2xl font-bold text-(--text-primary) mt-1'>
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className='p-2 rounded-lg text-(--text-muted) hover:bg-(--bg-main) transition'
              >
                <LuX className='w-5 h-5' />
              </button>
            </div>

            <div className='pt-3 space-y-2'>
              {project.roleHighlights.map((item, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-2.5 text-sm text-(--text-muted)'
                >
                  <LuCheck className='w-4 h-4 text-(--accent) shrink-0 mt-0.5' />
                  <span>{item}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
