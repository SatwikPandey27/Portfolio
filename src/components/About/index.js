import AnimatedLetters from '../Animated_Letters'
import './index.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Loader from 'react-loaders'

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
  
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              Highly motivated Python developer with a strong foundation in web
              development (Django, HTML/CSS) and machine learning (Scikit-learn,
              Keras). Proven ability to design, develop, and optimize backend
              systems. Experienced in utilizing Git/Github for collaborative
              development.
              Looking for a role in an established IT company with the opportunity
              to work with the latest technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p><h3 className='head'>Skills</h3>
              <b>Languages</b> : Python, SQL, HTML, CSS, JavaScript(familiar)<br/>
              <b>Libraries/Frameworks</b> : Numpy, Pandas, Scikit learn, Django, DRF, Keras, OpenCV, Bootstrap, React<br/>
              <b>Tools</b> : Git/Github, Postman, Google Colab<br/>
              <b>Databases</b> : MySQL, SQLite3
            </p>
          </div>
  
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#FFD43B" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
