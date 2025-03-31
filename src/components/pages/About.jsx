import React from 'react';
import '../../css/About.css'
import Photo from '../../images/photo.jpg';
import Skills from '../Skills';
import SkillsCarousel from '../SkillsCarousel';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container-fluid about-container">
    <div className="row mb-30">
      <div className="col-sm-6">
        <h4 className='about-title'>Hi! I'm Talita Alves</h4>

        <h5 className='about-subtitle'>Front-end developer, based in Barcelona</h5>
        
        <p className='personal-info'>
          I'm  a Student certified by SheCodes and currentelly doing the Front-end developer Bootcamp at Upgrade Hub. 👩‍💻
        </p>
        <p className='personal-info'>
          I have great adaptability to new situations, a great sense of time management and organization. I'm also an avid learner.
          </p>
          <p className='personal-info'>
          During my coding journey I developed experience with HTML, CSS, Bootstrap, JavaScript, Git, GitHub and React. 
          </p>
          <Link to='/projects'><button className="main-button">View all projects</button></Link></div>

      <div className="col-sm-6 text-center">
        <img
          src={Photo}
          alt="Talita Alves"
          className="img-fluid shadow-sm p-2 photo"/>
      </div>
      </div>

      <div className="row mb-30">
      <h1 className="skill-title">💪 Skills</h1>
      <div className="col-sm-6">
        <Skills/>
      </div>
      <div className="col-sm-6">
        <SkillsCarousel/>
      </div>
      </div>
      </div>


  )
}

export default About
