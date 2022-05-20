import React from 'react'
import './project.css'
import IMG1 from '../../image/logo.png';
import IMG2 from '../../image/pha.png';
import IMG3 from '../../image/smd.png';

const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Study Helper Mobile Application',
    github:'https://github.com/geethmaka/StudyHelper-Android-Firebase'
  },
  {
    id: 2,
    image:IMG2,
    title: 'Online Drugs Store for Pharmacy',
    github:'https://github.com/geethmaka/online-drug-store'
  },
  {
    id: 3,
    image:IMG3,
    title: 'Web Application for SMD Distributed Company',
    github:'https://github.com/smdnipun/SMD-Distributors-Automated-System'
  }
]

const Project = () => {
  return (
    <section id = 'project'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className = "container portfolio_container">
          {
            data.map(({id, image, title, github,}) =>{
              return(
                <artical key={id} className = "portfolio_item">
                  <div className='portfolio_item-image'>
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio_item-cta'>
                    <a href={github} className='btn' target="_blank">GITHUB</a>
                  </div>
              </artical>
              )
            })
          }
      </div>
    </section>
  )
}

export default Project