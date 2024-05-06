import React from 'react'
import './index.scss'
import AnimatedLetters from '../Animated_Letters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import mnist from '../../assets/images/MNIST.jpg'
import animal from '../../assets/images/animal.png'
import asl from '../../assets/images/ASL.png'
import django from '../../assets/images/Django.png'
import react from '../../assets/images/React.png'
import HB from '../../assets/images/HBSimpson.jpg'
import logo from '../../assets/images/portfolio.png'
import { Link } from 'react-router-dom'


export default function Projects() {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    return (
        <div className='container projects-page'>
            <div className="text-zone">
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="container projects-grid">
            <div className="up-row">
              <div className="left box">
                <p>
                  <Link to='https://github.com/SatwikPandey27/MNIST-Recognition'>
                  <img
                    className="project-image"
                    src={mnist}
                    alt="MNIST" />
                    <div className='project-text'>MNIST RECOGNITION</div>
                    </Link>
                  </p>
              </div>
              <div className="middle box">
                <p>
                  <Link to='https://github.com/SatwikPandey27/AnimalDetection'>
                  <img
                    className="project-image"
                    src={animal}
                    alt="MNIST" />
                    <div className='project-text'>ANIMAL DETECTION</div>
                    </Link>
                  </p>
              </div>
              <div className="right box">
                <p>
                  <Link to='https://github.com/RonitBakshi/ASL-Classification-with-Deep-learning'>
                  <img
                    className="project-image"
                    src={asl}
                    alt="MNIST" />
                    <div className='project-text'>ASL CLASSIFICATION</div>
                    </Link>
                </p>
              </div>
            </div>
            <div className="down-row">
              <div className="left box">
                <p>
                  <Link to='https://github.com/SatwikPandey27/Django-Web-Framework-TextUtils'>
                  <img
                    className="project-image"
                    src={django}
                    alt="MNIST" />
                    <div className='project-text'>DJANGO Web Framework - TEXTUTILS</div>
                    </Link>
                  </p>
              </div>
              <div className="middle box">
                <p>
                  <Link to='https://github.com/SatwikPandey27/TextUtils-ReactApp'>
                  <img
                    className="project-image"
                    src={react}
                    alt="MNIST" />
                    <div className='project-text'>REACT - TEXTUTILS</div>
                    </Link>
                  </p>
              </div>
              <div className="right box">
                <p>
                  <Link to='https://github.com/SatwikPandey27/Homer-Bart-Classification'>
                  <img
                    className="project-image"
                    src={HB}
                    alt="MNIST" />
                    <div className='project-text'>Homer-Bart Classification</div>
                    </Link>
                  </p>
              </div>
            </div>
            <div className='right-row'>
              <div className="left box">
                  <p>
                    <Link to='https://github.com/SatwikPandey27/MNIST-Recognition'>
                    <img
                      className="project-image"
                      src={logo}
                      alt="MNIST" />
                      <div className='project-text'>PORTFOLIO WEBSITE</div>
                      </Link>
                    </p>
                </div>
            </div>
          </div>
        </div>
          <Loader type="pacman" />
        </div>
    )
}
