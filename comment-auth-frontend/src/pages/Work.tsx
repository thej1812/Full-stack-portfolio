import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './work.css';
import Particles from '@/assets/Particles/Particles';

interface Project {
  id: number;
  title: string;
  description: string;
  name: string;
  projectDescription: string;
  features: string[];
  techStack: string[];
  image: string;
  gradientClass: string;
}

export default function Work() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
      description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
      name: "Next Ventures",
      projectDescription: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
      features: [
        "Leveraged Partial Prerendering and After for faster loading.",
        "Simplified idea submission with a clean, intuitive design.",
        "Enhanced browsing with seamless performance optimization.",
      ],
      techStack: [
        "Next.js", "React", "Tailwind CSS", "TypeScript",
        "Motion.dev", "Sanity cms", "Sentry", "markdown",
        "GROQ", "Auth.js",
      ],
      image: "https://api.incode-systems.com/uploads/Shot3_1_1_89f32911cb.png",
      gradientClass: "gradient-purple",
    },
    {
      id: 2,
      title: "A comprehensive e-commerce platform with modern design, secure payments, and seamless user experience.",
      description: "Built for modern retailers who demand speed, security, and scalability. Features advanced inventory management, real-time analytics, and mobile-first design.",
      name: "ShopFlow Pro",
      projectDescription: "Built for modern retailers who demand speed, security, and scalability. Features advanced inventory management, real-time analytics, and mobile-first design.",
      features: [
        "Real-time inventory management with automated alerts.",
        "Secure payment processing with multiple gateway support.",
        "Advanced analytics dashboard with sales insights.",
      ],
      techStack: [
        "React", "Node.js", "MongoDB", "Stripe",
        "Redis", "Docker", "AWS", "TypeScript",
        "Material-UI", "Jest",
      ],
      image: "https://blog.tubikstudio.com/wp-content/uploads/2023/07/AR-social-network-design-tubik.jpg",
      gradientClass: "gradient-blue",
    },
    {
      id: 3,
      title: "An AI-powered content management system that helps creators build and scale their digital presence.",
      description: "Revolutionary CMS that combines artificial intelligence with intuitive design to help content creators, bloggers, and businesses manage their digital presence effortlessly.",
      name: "ContentAI Studio",
      projectDescription: "Revolutionary CMS that combines artificial intelligence with intuitive design to help content creators, bloggers, and businesses manage their digital presence effortlessly.",
      features: [
        "AI-powered content suggestions and optimization.",
        "Advanced SEO tools with real-time recommendations.",
        "Collaborative editing with version control system.",
      ],
      techStack: [
        "Vue.js", "Python", "PostgreSQL", "OpenAI",
        "FastAPI", "Nuxt.js", "Tailwind CSS", "Redis",
        "Docker", "Nginx",
      ],
      image: "/api/placeholder/600/400",
      gradientClass: "gradient-green",
    },
  ];

  return (
    <>
      {/* Background Particles */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      >
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

      {/* Glass cursor */}
      <div ref={cursorRef} className="glass-cursor" aria-hidden="true"></div>

      {/* Main Content */}
      <div className="about-me-container" style={{ position: 'relative', zIndex: 2 }}>
        <nav className="navbar">
          <div className="logo">TJ</div>
          <div className="nav-menu">
            <ul className="nav-links glass-card">
              <li className="nav-item"><Link to="/">Home</Link></li>
               <li className="nav-item active"><Link to="/work">Work</Link></li>
              <li className="nav-item "><Link to="/about">About</Link></li>
             
              <li className="nav-item"><Link to="/comments">Share your thoughts</Link></li>
              <li>
                <Link to="/login">
                  <button className="book-call-btn glass-card">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="work-container">
          {/* Header Section */}
          <div className="work-header">
            <div className="work-header-label">FEATURED CASE STUDIES</div>
            <h1 className="work-main-title">
              <span className="title-normal">Curated </span>
              <span className="title-accent">work</span>
            </h1>
          </div>

          {/* Projects List */}
          {projects.map((project) => (
            <div key={project.id} className="work-content">
              {/* Main Project Card */}
              <div className={`work-main-card ${project.gradientClass}`}>
                <div className="work-card-header">
                  <p className="work-card-title">{project.title}</p>
                  
                </div>

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.description}`}
                  className="work-project-image"
                />
              </div>

              {/* Sidebar */}
              <div className="work-sidebar">
                {/* Project Info */}
                <div className="work-project-info">
                  <h3 className="work-project-name">
                    <span className="work-project-accent"></span>
                    {project.name}
                  </h3>
                  <p className="work-project-description">
                    {project.projectDescription}
                  </p>

                  <ul className="work-features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="work-feature-item">
                        <span className="work-feature-icon">+</span>
                        <span className="work-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="work-tech-stack">
                    <h4 className="work-tech-title">Tech Stack</h4>
                    <div className="work-tech-grid">
                      {project.techStack.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className={`work-tech-item ${tech
                            .toLowerCase()
                            .replace(/\./g, '-')
                            .replace(/\s/g, '-')}`}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
