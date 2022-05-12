import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What I can do</h5>
      <h2>My Skills</h2>

      <div className = "container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className = "experiece_content">
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>JavaScripts</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>  
              <h4>Bootstrap</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>React</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className = "experiece_content">
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>Node JS</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>MongoDB</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>PHP</h4>
              <small className = "text-light">Basic</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>JAVA</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
            <article className = "experience_details">
              <BsPatchCheckFill/>
              <div>
              <h4>MYSQL</h4>
              <small className = "text-light">Expert</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience