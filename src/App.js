import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef,  projectsRef, skillsRef,experienceRef, contactRef }}
      />
      <div ref={homeRef}><Header /></div>
      <div ref={aboutRef}><About /></div>
      
      <div ref={projectsRef}><Projects /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={contactRef}><Contact /></div>
      <div ><Footer /></div>
    </>
  );
}

export default App;
