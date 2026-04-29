'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Quote } from 'lucide-react';
import { portfolio, categories, type PortfolioProject, type ProjectCategory } from '@/public/data/portfolio';

const categoryColors: Record<string, string> = {
  'web-dev': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'app-dev': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'seo': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'digital-marketing': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'graphic-design': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'video-editing': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'ai-video': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'ai-automation': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
};

function ProjectModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto" onClick={onClose}>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-4xl mx-4 my-8 sm:my-16 rounded-2xl border shadow-2xl overflow-hidden bg-dark-900 border-zinc-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer border-none bg-white/10 text-white hover:bg-white/20"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Gallery */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <Image src={project.gallery[activeImage]} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 896px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-sm ${categoryColors[project.category] || ''}`}>
              {project.categoryLabel}
            </span>
          </div>
          {project.gallery.length > 1 && (
            <>
              <button onClick={() => setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors cursor-pointer border-none" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => setActiveImage((prev) => (prev + 1) % project.gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors cursor-pointer border-none" aria-label="Next">
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {project.gallery.map((_, i) => (
                  <button key={i} onClick={() => setActiveImage(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer border-none ${i === activeImage ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'}`}
                    aria-label={`Image ${i + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">{project.client}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-zinc-100">
            {project.title}
          </h2>
          <p className="text-[15px] leading-relaxed mb-8 text-zinc-300">
            {project.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-zinc-400">The Challenge</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-zinc-400">Our Solution</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl p-5 mb-8 bg-white/[0.03] border border-zinc-800">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-zinc-400">Key Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.results.map((r) => (
                <div key={r} className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-zinc-300">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="rounded-xl p-5 mb-8 bg-violet-500/5 border border-violet-500/10">
              <Quote size={20} className="text-violet-400/40 mb-3" />
              <p className="text-sm italic leading-relaxed mb-3 text-zinc-300">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <p className="text-xs font-bold text-violet-500">{project.testimonial.name} · {project.testimonial.role}</p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 text-zinc-400">
                {tag}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors">
              Visit Live Site <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filtered = activeCategory === 'all' ? portfolio : portfolio.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer border-none ${isActive
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="group rounded-2xl overflow-hidden border text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-transparent border-zinc-700 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
          >
            <div className="relative h-52 overflow-hidden">
              <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-sm ${categoryColors[p.category] || ''}`}>
                  {p.categoryLabel}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm">
                <span className="text-lg font-display font-extrabold text-violet-400">{p.stat.value}</span>
                <span className="text-[9px] text-white/70 block leading-tight">{p.stat.label}</span>
              </div>
            </div>

            <div className="p-5 bg-dark-800">
              <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">{p.client}</p>
              <h3 className="text-base font-bold mb-2 text-zinc-100">{p.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-white/5 text-zinc-400">
                    {tag}
                  </span>
                ))}
                {p.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md text-zinc-400">+{p.tags.length - 3}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-400 text-lg">No projects in this category yet. Check back soon!</p>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
