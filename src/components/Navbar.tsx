import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-gray-200">
            <nav className="w-full px-12 h-20 flex justify-between items-center">
                <a href="#" className="font-serif font-bold text-xl tracking-tight text-brand-dark">
                    Madison.
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#experience" className="text-sm text-brand-dark hover:text-brand-accent transition-colors duration-300">Experience</a>
                    <a href="#projects" className="text-sm text-brand-dark hover:text-brand-accent transition-colors duration-300">Software Projects</a>
                    <a href='#data-science' className="text-sm text-brand-dark hover:text-brand-accent transition-colors duration-300">Data Projects</a>
                    <a href="#about" className="text-sm text-brand-dark hover:text-brand-accent transition-colors duration-300">About</a>
                    <a href='#contact' className="px-4 py-2 border border-brand-dark text-sm font-semibold rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300">
                        Contact
                    </a>
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                </button>
            </nav>
            {isOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
                    <a href="#experience" className="text-sm text-brand-dark hover:text-brand-accent">Experience</a>
                    <a href="#projects" className="text-sm text-brand-dark hover:text-brand-accent">Software Projects</a>
                    <a href="#data-science" className="text-sm text-brand-dark hover:text-brand-accent">Data Projects</a>
                    <a href="#about" className="text-sm text-brand-dark hover:text-brand-accent">About</a>
                    <a href="#contact" className="text-sm text-brand-dark hover:text-brand-accent">Contact</a>
                </div>
            )}
        </header>
    )
}

export default Navbar
