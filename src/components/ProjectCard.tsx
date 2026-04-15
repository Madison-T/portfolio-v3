import { useState, useEffect } from 'react'

interface Project {
    title: string
    type: string
    range: string
    url?: string
    images?: string[]
    description: string[]
    tech: string[]
}

interface ProjectCardProps {
    project: Project
    featured?: boolean
    linkLabel?: string
}

interface LightboxProps {
    images: string[]
    title: string
    startIndex: number
    onClose: () => void
}

const Lightbox = ({ images, title, startIndex, onClose }: LightboxProps) => {
    const [current, setCurrent] = useState(startIndex)

    const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
    const next = () => setCurrent(i => (i + 1) % images.length)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Close */}
            <button
                aria-label="Close lightbox"
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                onClick={onClose}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>

            {/* Counter */}
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {current + 1} / {images.length}
            </span>

            {/* Image — stops click propagation so clicking image doesn't close */}
            <img
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={e => e.stopPropagation()}
            />

            {images.length > 1 && (
                <>
                    <button
                        aria-label="Previous image"
                        onClick={e => { e.stopPropagation(); prev() }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        aria-label="Next image"
                        onClick={e => { e.stopPropagation(); next() }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to image ${i + 1}`}
                                onClick={e => { e.stopPropagation(); setCurrent(i) }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    i === current ? 'bg-white scale-125' : 'bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

interface ImageGalleryProps {
    images: string[]
    title: string
    className?: string
}

const ImageGallery = ({ images, title, className = '' }: ImageGalleryProps) => {
    const [current, setCurrent] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrent(i => (i - 1 + images.length) % images.length)
    }
    const next = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrent(i => (i + 1) % images.length)
    }

    if (images.length === 0) return null

    return (
        <>
            <div className={`relative overflow-hidden group/gallery ${className}`}>
                <img
                    src={images[current]}
                    alt={`${title} screenshot ${current + 1}`}
                    loading="lazy"
                    onClick={() => setLightboxOpen(true)}
                    className="w-full h-full object-contain transition-opacity duration-300 cursor-zoom-in"
                />

                {images.length > 1 && (
                    <>
                        <button onClick={prev} aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200 hover:bg-black/70">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button onClick={next} aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200 hover:bg-black/70">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <span className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                            {current + 1} / {images.length}
                        </span>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {images.map((_, i) => (
                                <button key={i} aria-label={`Go to image ${i + 1}`}
                                    onClick={e => { e.stopPropagation(); setCurrent(i) }}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                        i === current ? 'bg-white scale-125' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Expand hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full">Click to expand</span>
                </div>
            </div>

            {lightboxOpen && (
                <Lightbox
                    images={images}
                    title={title}
                    startIndex={current}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    )
}

const ProjectCard = ({ project, featured = false, linkLabel = 'View on GitHub' }: ProjectCardProps) => {
    const images = project.images ?? []

    if (featured) {
        return (
            <div className="grid md:grid-cols-2 gap-0 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <ImageGallery images={images} title={project.title} className="aspect-video md:aspect-auto min-h-64" />
                <div className="p-8 flex flex-col justify-between">
                    <div>
                        <span className="uppercase tracking-widest font-bold text-xs text-brand-accent mb-3 block">
                            Featured Project
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">{project.title}</h3>
                        <p className="text-xs text-brand-muted mb-4">{project.type} · {project.range}</p>
                        <ul className="space-y-2 text-brand-muted text-sm mb-6">
                            {project.description.map((line, i) => (
                                <li key={i}>{line}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-dark">
                                    {t}
                                </span>
                            ))}
                        </div>
                        {project.url && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline">
                                {linkLabel}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <ImageGallery images={images} title={project.title} className="aspect-video" />
            <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                    <p className="text-xs text-brand-muted mb-1">{project.type} · {project.range}</p>
                    <h3 className="text-xl font-serif font-bold text-brand-dark mb-3">{project.title}</h3>
                    <p className="text-sm text-brand-muted mb-4">{project.description[0]}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1">
                        {project.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-gray-100 rounded text-xs font-mono uppercase text-brand-dark">
                                {t}
                            </span>
                        ))}
                    </div>
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:underline">
                            {linkLabel}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
