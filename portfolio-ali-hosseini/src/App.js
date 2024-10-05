import React from 'react';
import { useRef } from 'react';
import Hero from './pages/Hero';
import Projects from './pages/Projects';


function App() {
  const projectsRef = useRef(null);
  const handleClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Hero handleClick={handleClick}/>
      {/*<div ref={projectsRef}>
        <Projects />
      </div>*/}
      
    </div>
  );
}

export default App;
