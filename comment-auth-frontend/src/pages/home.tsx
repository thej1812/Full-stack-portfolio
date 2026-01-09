import React, { useEffect, useRef } from "react"; // ADD this (if React already in scope, just add useEffect/useRef)
import './home.css';
import Particles from "./assets/Particles/Particles";
import ShinyText from "./assets/ShinyText/ShinyText";
import TrueFocus from "./assets/TrueFocus/TrueFocus";
import { Link } from "react-router-dom";

import { FaRegCopy } from 'react-icons/fa';

const Home = () => {
  // --- NEW: refs & lerp state for smooth "fluid" movement
  const cursorRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide native cursor inside the home container (keeps system cursor for inputs)
    const container = document.querySelector('.home-container');
    if (container) container.style.cursor = 'none';

    // Mouse position handler
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // small scale on pointerdown for click feedback
      if (e.type === 'pointerdown') {
        cursor.classList.add('glass-cursor--down');
      }
    };
    const onDown = () => cursor.classList.add('glass-cursor--down');
    const onUp = () => cursor.classList.remove('glass-cursor--down');

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('resize', () => {
      pos.current.x = window.innerWidth / 2;
      pos.current.y = window.innerHeight / 2;
    });

    // Smooth lerp animation
    const ease = 0.16;
    const tick = () => {
      // lerp towards mouse
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      // apply transform (centered)
      cursor.style.transform = `translate3d(${pos.current.x - cursor.offsetWidth / 2}px, ${pos.current.y - cursor.offsetHeight / 2}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      cancelAnimationFrame(rafRef.current);
      if (container) container.style.cursor = ''; // restore
    };
  }, []);

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

      {/* --- NEW: Glass cursor element (only addition) */}
      <div ref={cursorRef} className="glass-cursor" aria-hidden="true"></div>

      {/* Main Content */}
      <div className="home-container" style={{ position: 'relative', zIndex: 2 }}>
<nav className="navbar">
  <div className="logo">TJ</div>
  <div className="nav-menu">
    <ul className="nav-links glass-card">
      <li className="nav-item active"><a href="/">Home</a></li>
       <li className="nav-item "><Link to="/work">Work</Link></li>
      <li><a href="./about" className="nav-item">About</a></li>
      
       <li className="nav-item"><Link to="/comments">Share your thoughts</Link></li>
     
      <li>
        <a href="./login">
          <button className="book-call-btn glass-card">Login</button>
        </a>
      </li>
    </ul>
  </div>
</nav>


        <div className="main-content">
          <div className="announcement"> 
            <span className="new-tag">New</span>
            <span className="announcement-text">
              <ShinyText text="Hire Me" disabled={false} speed={1} className='custom-class' />
            </span>
            <span className="arrow">›</span>
          </div>

          <main className="hero-section">
            <h1 className="hero-title">
              I help founders turn ideas
              <br />
              into seamless <span className="italic-text">
                <ShinyText text="digital experiences" disabled={false} speed={2} className='custom-class' />
              </span>
            </h1>

            <div className="intro-section">
              <span className="intro-text">Hello, I'm </span>
              <h4>
                <TrueFocus 
                  sentence="Thej Ashwini"
                  manualMode={false}
                  blurAmount={5}
                  borderColor=""
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </h4>
              <img
                className="profile-img"
                src="https://avatars.githubusercontent.com/u/167193306?s=400&u=98bdd2b76fffd2b49a16ccfbed19ad1e873f37a0&v=4"
                alt="Aayush Bharti"
              />
              <span className="role"> a Full Stack Developer</span>
            </div>

            <div className="cta-section">
              <button className="connect-btn">
                <ShinyText text="Connect me" disabled={false} speed={3} className='custom-class' /> 
                <span className="btn-arrow">→</span>
              </button>
              <div className="email-section glass-card">
                <span className="email">thejashwini1800@gmail.com</span>
                <FaRegCopy 
                  className="copy-icon"
                  onClick={() => {
                    navigator.clipboard.writeText("thejashwini1800@gmail.com");
                    alert("Email copied to clipboard!");
                  }}
                  title="Copy Email"
                  style={{ cursor: 'pointer', marginLeft: '10px' }}
                />
              </div>
            </div>

            
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
