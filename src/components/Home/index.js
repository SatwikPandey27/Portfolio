import React, { useEffect } from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../Animated_Letters'
import Logo from './Logo'
import Loader from 'react-loaders'

export default function Home() {

  const[letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['a', 't', 'w' ,'i', 'k']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <>
    <div className='container home-page'>
      <div className="text-zone">
        <h1><span className={letterClass}>H</span> 
        <span className={`${letterClass} _12`}>i</span> 
        <span className={`${letterClass} _12`}>,</span> 
        <br/>
        <span className={`${letterClass} _12`}>I</span> 
        <span className={`${letterClass} _12`}>'</span>
        <span className={`${letterClass} _12`}>m</span>
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
        </h1>
        <h2>Frontend Developer/ Django Developer/ Machine Learning Enthusiast</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}
