import React from 'react';
import './work.css';

export default function Work() {
  return (
    <div className="work-container">
      {/* Header Section */}
      <div className="work-header">
        <div className="work-header-label">FEATURED CASE STUDIES</div>
        <h1 className="work-main-title">
          <span className="title-normal">Curated </span>
          <span className="title-accent">work</span>
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="work-content">
        {/* Main Project Card */}
        <div className="work-main-card">
          <div className="work-card-header">
            <p className="work-card-title">
              A online space for entrepreneurs to pitch ideas, 
              explore others, and gain exposure with clean design.
            </p>
            <div className="work-card-arrow">→</div>
          </div>
          
          {/* Project Image */}
          <img 
            src="" 
            alt="Next Ventures - Startup pitch platform showing mobile and desktop interfaces"
            className="work-project-image"
          />
        </div>

        {/* Sidebar */}
        <div className="work-sidebar">
          {/* Project Info */}
          <div className="work-project-info">
            <h3 className="work-project-name">
              <span className="work-project-accent"></span>
              Next Ventures
            </h3>
            <p className="work-project-description">
              A platform designed for early-stage entrepreneurs to 
              pitch, browse, and engage with startup ideas. It's built to 
              impress both users and investors with blazing speed, 
              compelling visuals, and a modern tech stack.
            </p>
            
            <ul className="work-features-list">
              <li className="work-feature-item">
                <span className="work-feature-icon">+</span>
                <span className="work-feature-text">
                  Leveraged Partial Prerendering and After for faster loading.
                </span>
              </li>
              <li className="work-feature-item">
                <span className="work-feature-icon">+</span>
                <span className="work-feature-text">
                  Simplified idea submission with a clean, intuitive design.
                </span>
              </li>
              <li className="work-feature-item">
                <span className="work-feature-icon">+</span>
                <span className="work-feature-text">
                  Enhanced browsing with seamless performance optimization.
                </span>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="work-tech-stack">
            <h4 className="work-tech-title">Tech Stack</h4>
            <div className="work-tech-grid">
              <div className="work-tech-item next-js">Next.js</div>
              <div className="work-tech-item react">React</div>
              <div className="work-tech-item tailwind">Tailwind CSS</div>
              <div className="work-tech-item typescript">TypeScript</div>
              <div className="work-tech-item motion">Motion.dev</div>
              <div className="work-tech-item sanity">Sanity cms</div>
              <div className="work-tech-item sentry">Sentry</div>
              <div className="work-tech-item markdown">markdown</div>
              <div className="work-tech-item groq">GROQ</div>
              <div className="work-tech-item auth">Auth.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}