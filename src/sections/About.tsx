import SectionLabel from '../components/SectionLabel'

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-5 gap-16 items-center">

                    {/* Text — second on mobile, first on desktop */}
                    <div className="order-2 md:order-1 md:col-span-3">
                        <SectionLabel text="04. About Me" />
                        <h2 className="text-4xl font-serif font-bold mb-6">A bit about me</h2>

                        <div className="space-y-4 text-brand-muted leading-relaxed mb-8">
                            <p>
                                I'm a recent Computer Science graduate with a double major in Software Development and Data Science, currently working as a Software Development Associate. My path here wasn't straight — I started in chemistry, spent two years teaching English in Japan, and came back to New Zealand ready to go all-in on tech.
                            </p>
                            <p>
                                I've since built full stack apps, worked with data, and explored everything from machine learning to real-time mobile apps, often in Agile settings. I've also mentored other CS students, which sharpened my communication and leadership skills.
                            </p>
                            <p>
                                I'm curious by nature and enjoy combining creativity and logic to solve problems. Outside of tech I enjoy reading, scrapbooking, and playing board and trading card games.
                            </p>
                        </div>
                    </div>

                    {/* Portrait — first on mobile, second on desktop */}
                    <div className="order-1 md:order-2 md:col-span-2 flex justify-center">
                        <div className="relative w-full max-w-sm">
                            {/* Geometric accent border */}
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-accent rounded-2xl -z-10" />
                            {/* Portrait */}
                            <img
                                src="/portfolio-v3/assets/portrait.png"
                                alt="Madison"
                                className="w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Glow blob */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-accent rounded-full -z-10 blur-2xl opacity-20" />
                        </div>
                    </div>

                </div>

                {/* Skills — full width below */}
                <div className="pt-8 mt-8 border-t border-gray-200">
                    <div className="flex flex-wrap justify-between gap-y-3">
                        {['Python', 'R', 'SQL', 'PowerBI', 'TypeScript', 'React', 'Java', 'API Integrations'].map(s => (
                            <span key={s} className="px-4 py-2 bg-blue-50 text-brand-accent text-sm rounded-full">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
