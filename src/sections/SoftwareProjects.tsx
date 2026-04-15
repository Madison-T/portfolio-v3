import { useState } from 'react'
import allProjects from '../data/softwareProjects.json'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'

const projects = [allProjects[0], allProjects[1], allProjects[2], allProjects[4]]

const SoftwareProjects = () => {
    const [featuredIndex, setFeaturedIndex] = useState(0)

    const featured = projects[featuredIndex]
    const rest = projects.filter((_, i) => i !== featuredIndex)

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionLabel text="02. Software Projects" />
                <h2 className="text-4xl font-serif font-bold mb-16">Selected Digital Works</h2>

                {/* Featured card */}
                <div className="mb-8">
                    <ProjectCard project={featured} featured={true} />
                </div>

                {/* 3 smaller cards */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-brand-muted uppercase tracking-widest">Click a project to expand</p>
                    <p className="text-xs text-brand-muted flex items-center gap-1 md:hidden">
                        Swipe to see more
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 517 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </p>
                </div>
                <div className="flex md:grid md:grid-cols-3 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0" style={{ scrollbarWidth: 'none'}}>
                    {rest.map(project => {
                        const originalIndex = projects.indexOf(project)
                        return (
                            <div
                                key={project.title}
                                className="snap-start shrink-0 w-full md:w-auto pr-4 md:pr-0 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                                onClick={() => {
                                    setFeaturedIndex(originalIndex)
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SoftwareProjects
