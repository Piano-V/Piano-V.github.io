import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Helmet>
        <title>Abhinav Airahica | Portfolio</title> {/* Set your desired title here */}
      </Helmet>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-8">
          <Navbar />
          <div className="h-20"></div> {/* Spacer element */}
        <section id="hero"  className="pt-2">
          <Hero />
        </section>
        <section id="about-me" className="pt-2">
          <About />
        </section>
        <section id="skills" className="pt-2">
          <Technologies />
        </section>
        <section className="pt-2">
          <Experience />
        </section>
        <section id="projects" className="pt-2">
          <Projects />
        </section>
        <section id="certifications" className="pt-2">
          <Certifications />
        </section>
        <section id="contact" className="pt-2">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
