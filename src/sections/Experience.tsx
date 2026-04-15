import SectionLabel from '../components/SectionLabel'

const Experience = () => {
    return (
        <section id="experience" className="py-24 border-t border-gray-200 container mx-auto px-6">
            <SectionLabel text="01. Professional Experience"/>
            <div className="grid md:grid-cols-12 gap-8 mt-8">
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-serif font-bold">The Journey</h2>
                </div>
                <div className="md:col-span-8">
                    <div className="relative pl-8 border-1-2 border-gray-200">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand-accent rounded-full border-4 border-brand-bg"/>
                        <div className="mb-2 flex items-center gap-3">
                            <h3 className="font-bold text-brand-dark text-lg">Mitre 10</h3>
                            <span className="text-xs text-brand-muted border border-gray-200 rounded-full px-3 py-1">Nov 2025 - Present</span>
                        </div>
                        <p className="text-brand-accent font-medium mb-4">Software Development Associate - Auckland, New Zealand</p>
                        <ul className="space-y-2 text-brand-muted">
                            <li>Contribute to the design, development, and support of full-stack applications across retail, trade, and supplier digital platforms.</li>
                            <li>Build and maintain integrations using REST APIs and MuleSoft, supporting reliable data flow between internal systems and external services.</li>
                            <li>Support cloud-based solutions in AWS, including monitoring application behaviour and assisting with troubleshooting.</li>
                            <li>Contribute to CI/CD workflows using Git, Bitbucket/GitHub, and automated deployment pipelines within an Agile team.</li>
                        </ul>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Experience 