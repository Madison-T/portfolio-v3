import Hero from './sections/Hero'
import Experience from './sections/Experience'
import SoftwareProjects from './sections/SoftwareProjects'
import DataProjects from './sections/DataProjects'
import About from './sections/About'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Experience />
        <SoftwareProjects />
        <DataProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
