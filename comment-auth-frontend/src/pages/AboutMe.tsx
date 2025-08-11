import React from 'react';
import { Link } from 'react-router-dom';
import CardSwap, { Card } from '@/assets/CardSwap/CardSwap';
import Particles from '@/assets/Particles/Particles';
import './aboutme.css';
import './home.css';

export default function AboutMe() {
  return (
    <>
   {/* Background Particles */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={100}
            particleSpread={10}
            speed={0.05}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
  
<div className="about-me-container">
             <nav className="navbar">
               <div className="logo">TJ</div>
               <div className="nav-menu">
                 <ul className="nav-links glass-card">
                   <li className="nav-item"><Link to="/">Home</Link></li>
                   <li className="nav-item  "><Link to="/work">Work</Link></li>
                   <li className="nav-item active "><Link to="/about">About</Link></li>
                   
                   <li className="nav-item "><Link to="/comments">Share your thoughts</Link></li>
                   <li>
                     <Link to="/login">
                       <button className="book-call-btn glass-card">Login</button>
                     </Link>
                   </li>
                 </ul>
               </div>
             </nav>

   
        <div className="about-content">
          {/* Left Side */}
          <div className="about-left">
           <h1 class="stellar-gradient-heading ">
  <span >About Me</span>
</h1>

            <p className="about-description">
  Hi! I’m Thej Ashwini, a dedicated Full Stack Developer with a passion for building
  powerful, user-friendly, and visually engaging digital experiences. From crafting
  responsive front-end designs to developing efficient back-end systems, I enjoy bringing
  ideas to life through code. My journey in technology is driven by curiosity, problem-solving,
  and a love for creating solutions that make a real impact.
</p>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                {/* LinkedIn SVG */}
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
                {/* GitHub SVG */}
                GitHub
              </a>
            </div>

            <button className="contact-btn glass-card">Contact Me</button>
          </div>

          {/* Right Side */}
          <div className="about-right">
            <div className="card-container">
             <CardSwap cardDistance={10} verticalDistance={70} delay={5000} pauseOnHover={false}>
  <Card>
    <div className="card-content">
      <div className="card-image">
        <div className="image-placeholder">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8N6vM3edB7qkvN3wWDQoTmIY7g13LP_PC8Q&s"
            alt="Frontend Development"
            width="520"
            height="320"
           
          />
        </div>
      </div>
      <div className="card-text">
        <h3>Frontend Development</h3>
        <p>React, TypeScript, and modern web technologies</p>
      </div>
    </div>
  </Card>

  <Card>
    <div className="card-content">
      <div className="card-image">
        <div className="image-placeholder">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/e617f1229089533.Y3JvcCwxNDk5LDExNzMsMCww.png"
            alt="Freelancer"
            width="520"
            height="320"
           
          />
        </div>
      </div>
      <div className="card-text">
        <h3>Freelancer</h3>
        <p>React, TypeScript, and modern web technologies</p>
      </div>
    </div>
  </Card>

  <Card>
    <div className="card-content">
      <div className="card-image">
        <div className="image-placeholder">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/07e0b4227273343.Y3JvcCwxNjE2LDEyNjQsMCww.jpg"
            alt="Full Stack Development"
            width="520"
            height="320"
          
          />
        </div>
      </div>
      <div className="card-text">
        <h3>Full Stack Developer</h3>
        <p>React, TypeScript, and modern web technologies</p>
      </div>
    </div>
  </Card>
</CardSwap>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
