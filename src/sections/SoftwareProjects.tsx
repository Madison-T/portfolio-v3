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
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-4">Click a project to expand</p>
                <div className="grid grid-cols-3 gap-6">
                    {rest.map(project => {
                        const originalIndex = projects.indexOf(project)
                        return (
                            <div
                                key={project.title}
                                className="cursor-pointer transition-transform duration-200 hover:-translate-y-1"
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
