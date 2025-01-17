import Navbar from "../Component/Navbar"
import About from "../Component/About"
import Proyects from "../Component/Proyects"
import Skills from "../Component/Skills"
import Contact from "../Component/Contact"
import Hero from "../Component/Hero"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Proyects />    
        <Skills />
        <Contact />
    </div>
  )
}

export default Home