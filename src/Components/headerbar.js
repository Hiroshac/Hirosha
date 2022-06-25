import React from "react";
import './nav.css'
import { useState } from "react";

const Headerbar = () =>{
   const [activeNav,setActiveNav] = useState('#');
    return(
      <nav>
         <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }>Home</a>
         <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'avtive' : ''}>Experience</a>
         <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav==='#project' ? 'avtive' : ''}>Project</a>
         <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'avtive' : ''}>Contact</a>
      </nav>

    )
}
export default Headerbar;
