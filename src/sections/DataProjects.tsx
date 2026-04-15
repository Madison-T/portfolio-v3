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
                        const originalIndex = dataProjects.indexOf(project)
                        return (
                            <div
                                key={project.title}
                                className="snap-start shrink-0 w-full md:w-auto pr-4 md:pr-0 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
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
