import { useState } from 'react'
import allDataProjects from '../data/dataProjects.json'
import SectionLabel from '../components/SectionLabel'
import ProjectCard from '../components/ProjectCard'

const dataProjects = [allDataProjects[0], allDataProjects[2], allDataProjects[6], allDataProjects[4]]

const DataProjects = () => {
    const [featuredIndex, setFeaturedIndex] = useState(0)

    const featured = dataProjects[featuredIndex]
    const rest = dataProjects.filter((_, i) => i !== featuredIndex)

    return (
        <section id="data-science" className="py-24 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <SectionLabel text="03. Data Science Insights" />
                <h2 className="text-4xl font-serif font-bold mb-4">Translating Data to Decisions</h2>
                <p className="text-brand-muted max-w-xl mb-16">
                </p>

                {/* Featured card */}
                <div className="mb-8">
                    <ProjectCard project={featured} featured={true} linkLabel="View" />
                </div>

                {/* 3 smaller cards in a row */}
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-4">Click a project to expand</p>
                <div className="grid grid-cols-3 gap-6">
                    {rest.map(project => {
                        const originalIndex = dataProjects.indexOf(project)
                        return (
                            <div
                                key={project.title}
                                className="cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                                onClick={() => {
                                    setFeaturedIndex(originalIndex)
                                    document.getElementById('data-science')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <ProjectCard project={project} linkLabel="View" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DataProjects
