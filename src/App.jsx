import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import VanillaTilt from 'vanilla-tilt';
import Resume from './Resume';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [isDpModalOpen, setIsDpModalOpen] = useState(false);
  const [isDpAnimating, setIsDpAnimating] = useState(false);
  const [dpRect, setDpRect] = useState(null);
  const [targetRect, setTargetRect] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isLogoShaking, setIsLogoShaking] = useState(false);
  const isNavigating = useRef(false);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  const handleLogoClick = () => {
    if (isLogoShaking) return;
    setIsLogoShaking(true);
    setTimeout(() => {
      setIsLogoShaking(false);
    }, 500); // Shakes for 0.5 seconds
  };

  const profileImageRef = useRef(null);
  const typingTextRef = useRef(null);
  const tiltRef = useRef(null);
  const eduTilltRefs = useRef([]);
  const projectTiltRefs = useRef([]);

  // Three.js Background Animation
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      size: theme === 'light' ? 0.009 : 0.005,
      color: theme === 'light' ? 0x00a8d6 : 0x00f3ff, 
      transparent: true,
      opacity: theme === 'light' ? 1.0 : 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      if (mouseX > 0) {
        particlesMesh.rotation.x += (mouseY * 0.00005);
        particlesMesh.rotation.y += (mouseX * 0.00005);
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      particlesGeometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [theme]);

  function geometryDisposer(geom) { geom.dispose(); }
  function materialDisposer(mat) { mat.dispose(); }

  // Typing Text Effect
  useEffect(() => {
    const roles = ["Web Developer", "Tech Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeoutId;

    const type = () => {
      const currentRole = roles[roleIndex];
      const typingText = typingTextRef.current;
      if (!typingText) return;

      if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }
      timeoutId = setTimeout(type, typeSpeed);
    };
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  // GSAP animations and Vanilla Tilt
  useEffect(() => {
    // GSAP
    let ctx = gsap.context(() => {
      gsap.from(".logo", { opacity: 0, y: -20, duration: 1, delay: 0.5 });
      gsap.from(".nav-links li", { opacity: 0, y: -20, duration: 1, delay: 0.8, stagger: 0.2 });
      gsap.from(".hero-content h1", { opacity: 0, y: 50, duration: 1, delay: 1.5 });
      gsap.from(".hero-content h2", { opacity: 0, y: 50, duration: 1, delay: 1.8 });
      gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1, delay: 2.1 });
      gsap.from(".cta-buttons", { opacity: 0, y: 50, duration: 1, delay: 2.4 });
      gsap.from(".hero-3d-wrapper", { opacity: 0, x: 50, duration: 1, delay: 2.6 });
      gsap.from(".social-icon", { opacity: 0, y: 20, duration: 1, delay: 3, stagger: 0.2 });
    });

    // Vanilla Tilt - Only on desktop
    const handleTilt = () => {
      if (window.innerWidth > 768) {
        if (tiltRef.current) VanillaTilt.init(tiltRef.current, { max: 10, speed: 400, glare: true, 'max-glare': 0.5 });
        eduTilltRefs.current.forEach(el => el && VanillaTilt.init(el, { max: 10, speed: 400 }));
        projectTiltRefs.current.forEach(el => el && VanillaTilt.init(el, { max: 10, speed: 400 }));
      }
    };

    handleTilt();

    return () => {
      ctx.revert();
      if (tiltRef.current && tiltRef.current.vanillaTilt) tiltRef.current.vanillaTilt.destroy();
      eduTilltRefs.current.forEach(el => el && el.vanillaTilt && el.vanillaTilt.destroy());
      projectTiltRefs.current.forEach(el => el && el.vanillaTilt && el.vanillaTilt.destroy());
    };
  }, []);

  // High-Performance Scroll Spy (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navAnchorLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      // Only lock the observer on desktop to prevent the underline stutter.
      // On mobile, we want to see the color 'travel' through links during scroll.
      if (isNavigating.current && window.innerWidth > 900) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          // Update active links
          navAnchorLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });

          // Move indicator for desktop
          if (window.innerWidth > 900) {
            moveIndicator();
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // Dedicated function for Indicator Movement
  const moveIndicator = (targetElement = null) => {
    const activeLink = targetElement || document.querySelector('.nav-links a.active');
    const indicator = document.querySelector('.nav-indicator');
    if (activeLink && indicator) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.closest('.nav-links').getBoundingClientRect();
      gsap.to(indicator, {
        left: rect.left - parentRect.left,
        width: rect.width,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true
      });
    }
  };

  useEffect(() => {
    // Initial move and resize handling (Desktop only)
    if (window.innerWidth > 900) {
      setTimeout(moveIndicator, 100); 
    }
    window.addEventListener('resize', moveIndicator);
    return () => window.removeEventListener('resize', moveIndicator);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setNavActive(false);

    // Update URL hash without causing a rigid snap-jump
    history.pushState(null, null, targetId);
    setCurrentHash(targetId);

    if (targetId === '#resume') {
      window.scrollTo(0, 0);
      return;
    }

    // Move indicator instantly to target on click
    const targetLink = document.querySelector(`.nav-links a[href="${targetId}"]`);
    const allLinks = document.querySelectorAll('.nav-links a');
    
    if (targetLink) {
      // For desktop, jump the active class immediately for the indicator
      if (window.innerWidth > 900) {
        allLinks.forEach(l => l.classList.remove('active'));
        targetLink.classList.add('active');
        moveIndicator(targetLink);
      }
      isNavigating.current = true;
    }

    // If returning from another view, wait for DOM nodes to restore before scrolling
    setTimeout(() => {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Simple safety timeout to re-enable observer after scroll
        setTimeout(() => {
          isNavigating.current = false;
        }, 1000);
      } else {
        isNavigating.current = false;
      }
    }, 50);
  };

  const openDpModal = () => {
    if (profileImageRef.current) {
      const rect = profileImageRef.current.getBoundingClientRect();
      const targetW = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.9, 600);
      const targetH = targetW;
      const targetT = (window.innerHeight - targetH) / 2;
      const targetL = (window.innerWidth - targetW) / 2;

      setDpRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
      setTargetRect({
        top: targetT,
        left: targetL,
        width: targetW,
        height: targetH,
      });
      setIsDpModalOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsDpAnimating(true);
        });
      });
    }
  };

  const closeDpModal = () => {
    // Recalculate physical position before closing in case the user scrolled
    if (profileImageRef.current) {
      const rect = profileImageRef.current.getBoundingClientRect();
      setDpRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }

    setIsDpAnimating(false);
    setTimeout(() => {
      setIsDpModalOpen(false);
      setDpRect(null);
    }, 400); // Wait for transition
  };

  return (
    <>
      <canvas id="bg-canvas"></canvas>

      {currentHash === '#resume' ? (
        <Resume />
      ) : (
      <>
      {/* WhatsApp DP style Modal */}
      <div
        className={`dp-modal ${isDpAnimating ? 'active' : ''}`}
        style={{
          display: isDpModalOpen ? 'block' : 'none',
          pointerEvents: isDpModalOpen ? 'all' : 'none'
        }}
        onClick={closeDpModal}
      >
        <img
          src="/profile.jpg"
          alt="Full Profile"
          onClick={(e) => e.stopPropagation()}
          style={
            dpRect && targetRect ? (
              isDpAnimating ? {
                position: 'fixed',
                top: `${targetRect.top}px`,
                left: `${targetRect.left}px`,
                width: `${targetRect.width}px`,
                height: `${targetRect.height}px`,
                transform: 'none',
                borderRadius: '50%',
                objectFit: 'cover'
              } : {
                position: 'fixed',
                top: `${dpRect.top}px`,
                left: `${dpRect.left}px`,
                width: `${dpRect.width}px`,
                height: `${dpRect.height}px`,
                transform: 'none',
                borderRadius: '50%',
                objectFit: 'cover'
              }
            ) : {}
          }
          className="dp-modal-img"
        />
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-overlay ${navActive ? 'active' : ''}`}
        onClick={() => setNavActive(false)}
      ></div>

      <header>
        <nav className="glass-nav">
          <div className="logo" onClick={handleLogoClick}>
             <span className={isLogoShaking ? 'shake-text' : ''} style={{ display: 'inline-block', position: 'relative', zIndex: 2 }}>Nagesh L</span>
          </div>
          <ul className={`nav-links ${navActive ? 'active' : ''}`}>
            <div className="nav-indicator"></div>
            {[
              { id: '#hero', text: 'Home' },
              { id: '#skills', text: 'Skills' },
              { id: '#about', text: 'About' },
              { id: '#projects', text: 'Projects' },
              { id: '#experience', text: 'Experience' },
              { id: '#contact', text: 'Contact' }
            ].map((link, i) => (
              <li key={i} className={`nav-item-${link.id.substring(1)}`} style={navActive ? { animation: `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s` } : {}}>
                {link.id === '#resume' ? (
                  <a href={link.id} target="_blank" rel="noreferrer" onClick={() => setNavActive(false)}>{link.text}</a>
                ) : (
                  <a href={link.id} onClick={(e) => handleNavClick(e, link.id)}>{link.text}</a>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="theme-switch" onClick={toggleTheme}>
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <div className={`hamburger ${navActive ? 'toggle' : ''}`} onClick={() => setNavActive(!navActive)}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1>Hello, I'm <span className="neon-text">Nagesh L</span></h1>
              <h2 className="typewriter">I am a&nbsp;<span id="typing-text" ref={typingTextRef}></span><span className="cursor">|</span></h2>
              <p className="hero-desc">Building the future of the web with 3D interactives and premium aesthetics.</p>
              <div className="cta-buttons">
                <a href="#resume" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginRight: '15px', marginBottom: '15px' }}>View Resume</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn btn-secondary" style={{ marginLeft: '0px', marginBottom: '15px' }}>Hire Me</a>
              </div>
            </div>
            <div className="hero-3d-wrapper">
              <div
                className="hero-3d-card"
                ref={tiltRef}
              >
                <div className="card-content">
                  <div className="profile-img-placeholder" ref={profileImageRef} onClick={openDpModal}>
                    <img src="/profile.jpg" alt="Nagesh" className="profile-dp" />
                  </div>
                  <h3>Web Developer</h3>
                  <p>Creative & Tech Enthusiast</p>
                  <div className="card-socials">
                    <a href="https://www.instagram.com/nage.sh_.12?igsh=bzk3eTlubzBxYmMy" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/nageshl-12" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nagesh-l-842372273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.reddit.com/user/PixelNyx-12/?share_id=vYv0vWsmYowIpVvCKTWmQ&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/" target="_blank" rel="noreferrer"><i className="fab fa-reddit-alien"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-wrapper">
              
              <div className="skills-group">
                <h3 className="skills-group-title">Frontend</h3>
                <div className="skills-container">
                  <div className="skill-item floating"><i className="fab fa-html5" style={{ color: '#E34F26' }}></i><span>HTML</span></div>
                  <div className="skill-item floating" style={{ animationDelay: '0.2s' }}><i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i><span>CSS</span></div>
                  <div className="skill-item floating" style={{ animationDelay: '0.4s' }}><i className="fab fa-js" style={{ color: '#F7DF1E' }}></i><span>JavaScript</span></div>
                  <div className="skill-item floating" style={{ animationDelay: '0.6s' }}><i className="fab fa-react" style={{ color: '#61DAFB' }}></i><span>React (Learning)</span></div>
                </div>
              </div>

              <div className="skills-group">
                <h3 className="skills-group-title">Technologies</h3>
                <div className="skills-container">
                  <div className="skill-item floating" style={{ animationDelay: '0.8s' }}><i className="fab fa-git-alt" style={{ color: '#F05032' }}></i><span>Git</span></div>
                  <div className="skill-item floating" style={{ animationDelay: '1.0s' }}><i className="fab fa-aws" style={{ color: '#FF9900' }}></i><span>AWS (Basic)</span></div>
                  <div className="skill-item floating" style={{ animationDelay: '1.2s' }}><i className="fas fa-network-wired" style={{ color: '#00D1B2' }}></i><span>REST API</span></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="glass-card about-card">
              <p>
                I am a BCA student and Frontend Developer (Fresher) skilled in HTML, CSS, and JavaScript, currently learning React.js. I enjoy building responsive web applications and improving my skills through practical projects. I am eager to start my career and gain real-world experience.
              </p>
            </div>

            <div className="education-section">
              <h3 className="section-subtitle">Education</h3>
              <div className="edu-grid">
                <div className="edu-card glass-card" ref={el => eduTilltRefs.current[0] = el}>
                  <i className="fas fa-graduation-cap edu-icon"></i>
                  <h4>Bachelor of Computer Applications</h4>
                  <h5>Vidya Vikas First Grade College, Mysore</h5>
                  <span className="year">2023 - 2026</span>
                  <p>Computer Applications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {[
                { title: 'Online Code Compiler', desc: 'Integrated execution flow for running code in different languages', icon: 'fa-code', demoLink: 'https://compilex.co.in', codeLink: 'https://github.com/nageshl-12/Compile-X-Online-Code-compiler' },
                { title: 'Currency Converter', desc: 'A modern, responsive currency converter application with real-time exchange rates.', icon: 'fa-coins', demoLink: 'https://nageshl-12.github.io/-Currency-Converter-/', codeLink: 'https://github.com/nageshl-12/-Currency-Converter-' },
                { title: 'Auth UI', desc: 'A secure and responsive authentication UI with seamless sign-in and sign-up flows.', icon: 'fa-user-lock', demoLink: 'https://nageshl-12.github.io/auth-ui-signin-signup/', codeLink: 'https://github.com/nageshl-12/auth-ui-signin-signup' }
              ].map((proj, idx) => (
                <div 
                  className="project-card glass-card" 
                  ref={el => projectTiltRefs.current[idx] = el} 
                  key={idx}
                  onClick={() => proj.demoLink !== '#' && window.open(proj.demoLink, "_blank")}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-img">
                    <i className={`fas ${proj.icon}`}></i>
                  </div>
                  <div className="project-info">
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                    <div className="project-links">
                      <a href={proj.demoLink} target={proj.demoLink !== '#' ? "_blank" : "_self"} rel="noreferrer" className="btn-sm" onClick={(e) => e.stopPropagation()}><i className="fas fa-eye"></i> Demo</a>
                      <a href={proj.codeLink} target={proj.codeLink !== '#' ? "_blank" : "_self"} rel="noreferrer" className="btn-sm" onClick={(e) => e.stopPropagation()}><i className="fab fa-github"></i> Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              <div className="experience-card glass-card">
                <h3>Frontend Development (Academic Projects)</h3>
                <span className="exp-date">2025</span>
                <p>Worked on frontend projects focusing on clean UI, responsiveness, and basic interactivity.</p>
                <ul>
                  <li>Built responsive websites using HTML &amp; CSS</li>
                  <li>Created login &amp; signup UI with JavaScript validation</li>
                  <li>Designed animated loading screens using CSS</li>
                  <li>Used GitHub for version control and hosting</li>
                </ul>
              </div>

              <div className="experience-card glass-card">
                <h3>Web Design Practice</h3>
                <span className="exp-date">2023 &ndash; 2024</span>
                <p>Practiced modern web design techniques through hands-on UI experiments and layouts.</p>
                <ul>
                  <li>Designed landing pages and portfolio layouts</li>
                  <li>Worked with Flexbox and CSS Grid</li>
                  <li>Improved typography and color selection</li>
                </ul>
              </div>

              <div className="experience-card glass-card">
                <h3>Online Code Compiler (AI-assisted)</h3>
                <span className="exp-date">2026</span>
                <ul>
                  <li>Worked with an AI-generated full-stack codebase for an online compiler</li>
                  <li>Identified and fixed issues in both frontend and backend components</li>
                  <li>Assisted in deploying the application on AWS</li>
                  <li>Gained understanding of full-stack architecture and code execution flow</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-wrapper glass-card">
              <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
                {/* 1. Go to web3forms.com, enter your email to get a free key, and paste it below */}
                <input type="hidden" name="access_key" value="199b0f4f-cf58-452d-b4b2-07c76e2d0d88" />
                <input type="hidden" name="subject" value="New Submission from My Portfolio" />
                <div className="input-group">
                  <input type="text" name="name" id="name" required placeholder=" " />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-group">
                  <input type="email" name="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-group">
                  <textarea name="message" id="message" rows="5" required placeholder=" "></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
              <div className="social-links">
                <a href="https://github.com/nageshl-12" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/nagesh-l-842372273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/nage.sh_.12?igsh=bzk3eTlubzBxYmMy" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="https://www.reddit.com/user/PixelNyx-12/?share_id=vYv0vWsmYowIpVvCKTWmQ&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-reddit-alien"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Nagesh L. All Rights Reserved.</p>
      </footer>
      </>
      )}
    </>
  );
}

export default App;
