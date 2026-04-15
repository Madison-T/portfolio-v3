const Hero = () => {
  return (
    <section id="hero" className="pt-40 pb-24 md:pt-56 md:pb-40 container mx-auto px-6">
      <div className="max-w-4xl">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8"
          style={{ lineHeight:'1.1', letterSpacing: '-0.02em'}}
        >
          Building at the intersection of{' '}
          <span className="text-brand-accent italic">code</span> &{' '}
          <span className="text-brand-accent">data</span>.
        </h1>
        <p className="text-xl md:text-2xl text-brand-muted max-w-2xl font-light leading-relaxed">
          I'm a full-stack developer and data scientist who likes to use code the way others use paint to create.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-brand-dark text-white font-semibold rounded-sm hover:-translate-y-0.5 transition-all duration-300">View My Work</a>
          <a href="#contact" className="px-8 py-4 border-2 border-brand-dark text-brand-dark font-semibold rounded-sm hover:bg-brand-dark hover:text-white transition-all duration-300">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
