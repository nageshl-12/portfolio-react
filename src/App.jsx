import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";
import Resume from "./Resume";
import Certificates from "./Certificates";

function App() {
  const [navActive, setNavActive] = useState(false);
  const [isDpModalOpen, setIsDpModalOpen] = useState(false);
  const [isDpAnimating, setIsDpAnimating] = useState(false);
  const [dpRect, setDpRect] = useState(null);
  const [targetRect, setTargetRect] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isLogoShaking, setIsLogoShaking] = useState(false);
  const isNavigating = useRef(false);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

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
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const material = new THREE.PointsMaterial({
      size: theme === "light" ? 0.009 : 0.005,
      color: theme === "light" ? 0x00a8d6 : 0x00f3ff,
      transparent: true,
      opacity: theme === "light" ? 1.0 : 0.8,
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
    document.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      if (mouseX > 0) {
        particlesMesh.rotation.x += mouseY * 0.00005;
        particlesMesh.rotation.y += mouseX * 0.00005;
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
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      particlesGeometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [theme]);

  function geometryDisposer(geom) {
    geom.dispose();
  }
  function materialDisposer(mat) {
    mat.dispose();
  }

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
      gsap.from(".nav-links li", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
      });
      gsap.from(".hero-content h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
      });
      gsap.from(".hero-content h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.8,
      });
      gsap.from(".hero-content p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2.1,
      });
      gsap.from(".cta-buttons", { opacity: 0, y: 50, duration: 1, delay: 2.4 });
      gsap.from(".hero-3d-wrapper", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 2.6,
      });
      gsap.from(".social-icon", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 3,
        stagger: 0.2,
      });
    });

    // Vanilla Tilt - Only on desktop
    const handleTilt = () => {
      if (window.innerWidth > 768) {
        if (tiltRef.current)
          VanillaTilt.init(tiltRef.current, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
          });
        eduTilltRefs.current.forEach(
          (el) => el && VanillaTilt.init(el, { max: 10, speed: 400 }),
        );
        projectTiltRefs.current.forEach(
          (el) => el && VanillaTilt.init(el, { max: 10, speed: 400 }),
        );
      }
    };

    handleTilt();

    return () => {
      ctx.revert();
      if (tiltRef.current && tiltRef.current.vanillaTilt)
        tiltRef.current.vanillaTilt.destroy();
      eduTilltRefs.current.forEach(
        (el) => el && el.vanillaTilt && el.vanillaTilt.destroy(),
      );
      projectTiltRefs.current.forEach(
        (el) => el && el.vanillaTilt && el.vanillaTilt.destroy(),
      );
    };
  }, []);

  // High-Performance Scroll Spy (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navAnchorLinks = document.querySelectorAll(".nav-links a");

    const observerOptions = {
      root: null,
      rootMargin: "-150px 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // Only lock the observer on desktop to prevent the underline stutter.
      // On mobile, we want to see the color 'travel' through links during scroll.
      if (isNavigating.current && window.innerWidth > 900) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          // Update active links
          navAnchorLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });

          // Move indicator for desktop
          if (window.innerWidth > 900) {
            moveIndicator();
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // Dedicated function for Indicator Movement
  const moveIndicator = (targetElement = null) => {
    const activeLink =
      targetElement || document.querySelector(".nav-links a.active");
    const indicator = document.querySelector(".nav-indicator");
    if (activeLink && indicator) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink
        .closest(".nav-links")
        .getBoundingClientRect();
      gsap.to(indicator, {
        left: rect.left - parentRect.left,
        width: rect.width,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  useEffect(() => {
    // Initial move and resize handling (Desktop only)
    if (window.innerWidth > 900) {
      setTimeout(moveIndicator, 100);
    }
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setNavActive(false);

    // Update URL hash without causing a rigid snap-jump
    history.pushState(null, null, targetId);
    setCurrentHash(targetId);

    if (
      targetId === "#resume" ||
      targetId === "#certificates" ||
      targetId === "#certificate"
    ) {
      window.scrollTo(0, 0);
      return;
    }

    // Move indicator instantly to target on click
    const targetLink = document.querySelector(
      `.nav-links a[href="${targetId}"]`,
    );
    const allLinks = document.querySelectorAll(".nav-links a");

    if (targetLink) {
      // For desktop, jump the active class immediately for the indicator
      if (window.innerWidth > 900) {
        allLinks.forEach((l) => l.classList.remove("active"));
        targetLink.classList.add("active");
        moveIndicator(targetLink);
      }
      isNavigating.current = true;
    }

    // If returning from another view, wait for DOM nodes to restore before scrolling
    setTimeout(() => {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

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
      const targetW = Math.min(
        window.innerWidth * 0.9,
        window.innerHeight * 0.9,
        600,
      );
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

      {currentHash === "#resume" ? (
        <Resume />
      ) : currentHash === "#certificates" || currentHash === "#certificate" ? (
        <Certificates />
      ) : (
        <>
          {/* WhatsApp DP style Modal */}
          <div
            className={`dp-modal ${isDpAnimating ? "active" : ""}`}
            style={{
              display: isDpModalOpen ? "block" : "none",
              pointerEvents: isDpModalOpen ? "all" : "none",
            }}
            onClick={closeDpModal}
          >
            <img
              src="/profile.jpg"
              alt="Full Profile"
              onClick={(e) => e.stopPropagation()}
              style={
                dpRect && targetRect
                  ? isDpAnimating
                    ? {
                        position: "fixed",
                        top: `${targetRect.top}px`,
                        left: `${targetRect.left}px`,
                        width: `${targetRect.width}px`,
                        height: `${targetRect.height}px`,
                        transform: "none",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }
                    : {
                        position: "fixed",
                        top: `${dpRect.top}px`,
                        left: `${dpRect.left}px`,
                        width: `${dpRect.width}px`,
                        height: `${dpRect.height}px`,
                        transform: "none",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }
                  : {}
              }
              className="dp-modal-img"
            />
          </div>

          {/* Mobile Menu Backdrop */}
          <div
            className={`mobile-overlay ${navActive ? "active" : ""}`}
            onClick={() => setNavActive(false)}
          ></div>

          <header>
            <nav className="glass-nav">
              <div className="logo" onClick={handleLogoClick}>
                <span
                  className={isLogoShaking ? "shake-text" : ""}
                  style={{
                    display: "inline-block",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Nagesh L
                </span>
              </div>
              <ul className={`nav-links ${navActive ? "active" : ""}`}>
                <div className="nav-indicator"></div>
                {[
                  { id: "#hero", text: "Home" },
                  { id: "#skills", text: "Skills" },
                  { id: "#about", text: "About" },
                  { id: "#projects", text: "Projects" },
                  { id: "#experience", text: "Experience" },
                  { id: "#contact", text: "Contact" },
                ].map((link, i) => (
                  <li
                    key={i}
                    className={`nav-item-${link.id.substring(1)}`}
                    style={
                      navActive
                        ? {
                            animation: `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`,
                          }
                        : {}
                    }
                  >
                    {link.id === "#resume" ? (
                      <a
                        href={link.id}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setNavActive(false)}
                      >
                        {link.text}
                      </a>
                    ) : (
                      <a
                        href={link.id}
                        onClick={(e) => handleNavClick(e, link.id)}
                      >
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="nav-actions">
                <button className="theme-switch" onClick={toggleTheme}>
                  <i
                    className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
                  ></i>
                </button>
                <div
                  className={`hamburger ${navActive ? "toggle" : ""}`}
                  onClick={() => setNavActive(!navActive)}
                >
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
                  <h1>
                    Hello, I'm <span className="neon-text">Nagesh L</span>
                  </h1>
                  <h2 className="typewriter">
                    I am a&nbsp;
                    <span id="typing-text" ref={typingTextRef}></span>
                    <span className="cursor">|</span>
                  </h2>
                  <p className="hero-desc">
                    Building the future of the web with 3D interactives and
                    premium aesthetics.
                  </p>
                  <div className="cta-buttons">
                    <a
                      href="#resume"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ marginRight: "15px", marginBottom: "15px" }}
                    >
                      View Resume
                    </a>
                    <a
                      href="#certificates"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ marginRight: "15px", marginBottom: "15px" }}
                    >
                      Certificates
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="btn btn-secondary"
                      style={{ marginLeft: "0px", marginBottom: "15px" }}
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
                <div className="hero-3d-wrapper">
                  <div className="hero-3d-card" ref={tiltRef}>
                    <div className="card-content">
                      <div
                        className="profile-img-placeholder"
                        ref={profileImageRef}
                        onClick={openDpModal}
                      >
                        <img
                          src="/profile.jpg"
                          alt="Nagesh"
                          className="profile-dp"
                        />
                      </div>
                      <h3>Web Developer</h3>
                      <p>Creative & Tech Enthusiast</p>
                      <div className="card-socials">
                        <a
                          href="https://www.instagram.com/nage.sh_.12?igsh=bzk3eTlubzBxYmMy"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="https://github.com/nageshl-12"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nagesh-l-842372273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="https://www.reddit.com/user/PixelNyx-12/?share_id=vYv0vWsmYowIpVvCKTWmQ&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-reddit-alien"></i>
                        </a>
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
                  {/* 1. Frontend */}
                  <div className="skills-group">
                    <h3 className="skills-group-title">Frontend</h3>
                    <div className="skills-container">
                      <div className="skill-item floating">
                        <i
                          className="fab fa-html5"
                          style={{ color: "#E34F26" }}
                        ></i>
                        <span>HTML5</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <i
                          className="fab fa-css3-alt"
                          style={{ color: "#1572B6" }}
                        ></i>
                        <span>CSS3</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <i
                          className="fab fa-js"
                          style={{ color: "#F7DF1E" }}
                        ></i>
                        <span>JavaScript (ES6+)</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <i
                          className="fab fa-react"
                          style={{ color: "#61DAFB" }}
                        ></i>
                        <span>React.js</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path d="M18.665 21.978C16.808 23.255 14.512 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.584-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.599h1.6V9.521l9.865 12.457ZM15.2 7.2h1.6v6.4h-1.6V7.2Z" />
                        </svg>
                        <span>Next.js</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "1.0s" }}
                      >
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                          alt="Tailwind CSS"
                        />
                        <span>Tailwind CSS</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. React Ecosystem */}
                  <div className="skills-group">
                    <h3 className="skills-group-title">React Ecosystem</h3>
                    <div className="skills-container">
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <svg
                          viewBox="0 0 128 128"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path
                            fill="#764ABC"
                            d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
                          />
                        </svg>
                        <span>Redux Toolkit</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <svg
                          viewBox="0 0 128 128"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path
                            d="M99.04 50.315c-3.646-1.148-5.528-.761-9.351-1.18-5.91-.645-8.265-2.959-9.264-8.913-.559-3.324.101-8.191-1.326-11.204-2.729-5.746-9.115-8.323-15.53-6.852-5.417 1.244-9.924 6.666-10.174 12.232-.285 6.355 3.33 11.778 9.537 13.65 2.95.89 6.083 1.338 9.163 1.565 5.649.413 6.083 3.558 7.61 6.147.964 1.632 1.897 3.24 1.897 8.107s-.939 6.474-1.896 8.106c-1.528 2.583-3.413 4.275-9.062 4.693-3.08.228-6.22.676-9.162 1.567-6.208 1.877-9.823 7.293-9.538 13.649.25 5.566 4.757 10.988 10.174 12.232 6.415 1.476 12.801-1.106 15.53-6.852 1.433-3.013 2.218-6.427 2.777-9.75 1.005-5.955 3.36-8.269 9.264-8.915 3.823-.418 7.78 0 11.363-2.038 3.785-2.77 7.168-6.93 7.168-12.692 0-5.764-3.645-11.806-9.18-13.552z"
                            fill="#F44250"
                          />
                          <path
                            d="M38.4 77.373c-7.45 0-13.528-6.098-13.528-13.575 0-7.476 6.077-13.574 13.527-13.574 7.45 0 13.528 6.098 13.528 13.574 0 7.47-6.083 13.575-13.528 13.575zM13.48 104.96C6.04 104.942-.018 98.82 0 91.337c.018-7.47 6.119-13.55 13.575-13.526 7.444.018 13.503 6.14 13.48 13.622-.018 7.464-6.12 13.545-13.575 13.527zm100.512 0c-7.462.041-13.586-6.015-13.629-13.473-.041-7.488 5.994-13.634 13.426-13.676 7.462-.042 13.587 6.014 13.629 13.472.041 7.482-5.994 13.635-13.426 13.677z"
                            fill="#F44250"
                          />
                        </svg>
                        <span>React Router</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path
                            fill="#FF4154"
                            d="M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z"
                          />
                        </svg>
                        <span>TanStack React Query</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.7s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path
                            d="M19 10C19 6.686 16.314 4 13 4H11C7.686 4 5 6.686 5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9z"
                            fill="#F59E0B"
                          />
                          <path
                            d="M17 10.5c0-1.933-1.567-3.5-3.5-3.5h-3C8.567 7 7 8.567 7 10.5V18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7.5z"
                            fill="#FDE68A"
                          />
                          <path
                            d="M12 1.5c.8 1.3 1.8 2.2 1.8 3.5a1.8 1.8 0 1 1-3.6 0c0-1.3 1-2.2 1.8-3.5z"
                            fill="#EF4444"
                          />
                          <circle cx="10" cy="11.5" r="0.9" fill="#D97706" />
                          <circle cx="14" cy="13.5" r="0.9" fill="#D97706" />
                          <circle cx="11" cy="15.5" r="0.9" fill="#D97706" />
                        </svg>
                        <span>React Hot Toast</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.9s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#F43F5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M19 17v4" />
                          <path d="M3 5h4" />
                          <path d="M17 19h4" />
                        </svg>
                        <span>Lucide React</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "1.1s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ height: "2.5rem", width: "auto" }}
                          fill="#EC5990"
                        >
                          <path d="M10.7754 17.3477H5.8065a.2815.2815 0 1 0 0 .563h4.9689a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9688a.2815.2815 0 1 0 0 .563h4.9688a.2815.2815 0 0 0 0-.563zm-7.3336-6.475H5.8065a.2815.2815 0 1 0 0 .563h4.9548a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9547a.2815.2815 0 1 0 0 .563h4.9547a.2815.2815 0 0 0 0-.563zm.5518-9.2001h-4.341a2.4042 2.4042 0 0 0-4.5804 0H5.3674c-1.7103 0-3.0968 1.3864-3.0968 3.0967v16.134C2.2706 22.6135 3.6571 24 5.3674 24h13.2652c1.7103 0 3.0968-1.3865 3.0968-3.0967V4.7693c0-1.7103-1.3865-3.0967-3.0968-3.0967zm-8.7046.563a.2815.2815 0 0 0 .2815-.2224 1.8411 1.8411 0 0 1 3.5979 0 .2815.2815 0 0 0 .2815.2224h1.5146v1.844a.8446.8446 0 0 1-.8446.8446H9.2552a.8446.8446 0 0 1-.8446-.8446v-1.844Zm11.2383 18.6677c0 1.3993-1.1344 2.5337-2.5337 2.5337H5.3674c-1.3993 0-2.5337-1.1344-2.5337-2.5337V4.7693c0-1.3993 1.1344-2.5337 2.5337-2.5337h2.4802v1.844c0 .7774.6302 1.4076 1.4076 1.4076h5.4896c.7774 0 1.4076-.6302 1.4076-1.4076v-1.844h2.4802c1.3993 0 2.5337 1.1344 2.5337 2.5337z" />
                        </svg>
                        <span>React Hook Form</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Backend & APIs */}
                  <div className="skills-group">
                    <h3 className="skills-group-title">Backend & APIs</h3>
                    <div className="skills-container">
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <i
                          className="fab fa-node-js"
                          style={{ color: "#339933" }}
                        ></i>
                        <span>Node.js</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <svg
                          viewBox="0 0 210 232"
                          style={{ height: "2.5rem", width: "auto" }}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="authjs_a"
                              x1="19.57"
                              x2="97.527"
                              y1="96.564"
                              y2="15.078"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#45FFC8" />
                              <stop offset="1" stopColor="#1DBBF1" />
                            </linearGradient>
                            <linearGradient
                              id="authjs_b"
                              x1="73.786"
                              x2="170.671"
                              y1="143.724"
                              y2="190.884"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#D14AE8" />
                              <stop offset="0.552" stopColor="#B628E3" />
                              <stop offset="1" stopColor="#8315FD" />
                            </linearGradient>
                            <linearGradient
                              id="authjs_c"
                              x1="155.914"
                              x2="155.914"
                              y1="21.815"
                              y2="182.542"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#20ABF5" />
                              <stop offset="0.398" stopColor="#2A8CC3" />
                              <stop offset="1" stopColor="#A104DC" />
                            </linearGradient>
                            <linearGradient
                              id="authjs_d"
                              x1="90.148"
                              x2="129.287"
                              y1="99.452"
                              y2="138.912"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FE5B01" />
                              <stop offset="1" stopColor="#FFB200" />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#authjs_a)"
                            fillRule="evenodd"
                            d="M208.687 31.859 30.095 167.73C8.164 127.966.568 79.998 0 51.228v-17.61c0-2.561 2.779-4.055 4.169-4.482C33.562 20.278 93.247 2.306 96.838 1.28 100.429.256 103.464 0 104.534 0h.097c1.069 0 4.104.256 7.696 1.28 3.591 1.025 63.276 18.998 92.669 27.856 1.034.317 2.836 1.225 3.691 2.723Z"
                            clipRule="evenodd"
                          />
                          <path
                            fill="url(#authjs_b)"
                            fillRule="evenodd"
                            d="m30.094 167.952 178.592-135.87c.295.516.478 1.102.478 1.759V51.45c-.962 48.773-22.126 152.722-99.083 178.336-1.068.427-3.591 1.281-5.13 1.281h-.739c-1.539 0-4.062-.854-5.13-1.281-31.563-10.505-53.74-34.186-68.988-61.834Z"
                            clipRule="evenodd"
                          />
                          <path
                            fill="url(#authjs_c)"
                            fillOpacity=".21"
                            d="M111.74 1.283C108.147.257 105.11 0 104.04 0l-.321 231.305h.642c1.54 0 4.064-.855 5.133-1.283 76.995-25.665 98.169-129.822 99.131-178.692V33.685c0-2.566-2.78-4.063-4.171-4.491-29.407-8.876-89.121-26.884-92.714-27.91Z"
                          />
                          <ellipse
                            cx="104.905"
                            cy="114.209"
                            fill="#E3E2FA"
                            rx="47.801"
                            ry="47.48"
                          />
                          <path
                            fill="url(#authjs_d)"
                            d="M104.905 84.729c-16.275 0-29.47 13.195-29.47 29.47 0 12.206 7.423 22.68 18.012 27.12v13.568c0 2.457 2.012 4.469 4.469 4.469h13.978c2.457 0 4.469-2.012 4.469-4.469V141.32c10.589-4.44 18.012-14.914 18.012-27.121 0-16.275-13.195-29.47-29.47-29.47Zm0 13.978c8.556 0 15.492 6.936 15.492 15.492 0 6.678-4.225 12.368-10.158 14.536v18.093h-10.668v-18.093c-5.933-2.168-10.158-7.858-10.158-14.536 0-8.556 6.936-15.492 15.492-15.492Z"
                          />
                        </svg>
                        <span>Auth.js</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <i
                          className="fas fa-network-wired"
                          style={{ color: "#00D1B2" }}
                        ></i>
                        <span>REST API Integration</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <svg
                          viewBox="0 0 128 128"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <defs>
                            <linearGradient
                              id="supabaseGradA"
                              x1="53.974"
                              x2="94.163"
                              y1="54.974"
                              y2="71.829"
                              gradientTransform="translate(29.387 60.096) scale(1.1436)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#249361" />
                              <stop offset="1" stopColor="#3ecf8e" />
                            </linearGradient>
                            <linearGradient
                              id="supabaseGradB"
                              x1="36.156"
                              x2="54.484"
                              y1="30.578"
                              y2="65.081"
                              gradientTransform="translate(29.387 60.096) scale(1.1436)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" />
                              <stop offset="1" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#supabaseGradA)"
                            d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                            transform="translate(-27.722 -60.338)"
                          />
                          <path
                            fill="url(#supabaseGradB)"
                            fillOpacity=".2"
                            d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                            transform="translate(-27.722 -60.338)"
                          />
                          <path
                            fill="#3ecf8e"
                            d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
                          />
                        </svg>
                        <span>Supabase</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "1.0s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <rect x="2" y="3" width="20" height="7" rx="2" />
                          <rect x="2" y="14" width="20" height="7" rx="2" />
                          <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="2.5" />
                          <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="2.5" />
                          <path d="M14 6l-2.5 5h3L12 16" stroke="#FBBF24" strokeWidth="2" />
                        </svg>
                        <span>Server Actions</span>
                      </div>
                    </div>
                  </div>

                  {/* 4. Cloud & Deployments */}
                  <div className="skills-group">
                    <h3 className="skills-group-title">Cloud & Deployments</h3>
                    <div className="skills-container">
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ height: "2.5rem", width: "auto" }}
                          fill="none"
                        >
                          <path
                            d="M12.24 3.75 3.03 19.5h4.63l4.58-7.9 2.29 3.95H11.5l-1.37 2.37h6.63L20.97 19.5H23L13.88 3.75h-1.64Z"
                            fill="#FF9900"
                          />
                          <path
                            d="m14.53 7.7-4.58 7.9h2.03l3.56-6.14 3.43 6.14h2.24L15.65 7.7h-1.12Z"
                            fill="#FFB800"
                          />
                        </svg>
                        <span>AWS Amplify</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <i
                          className="fas fa-route"
                          style={{ color: "#FF9900" }}
                        ></i>
                        <span>Amazon Route 53</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <i
                          className="fas fa-cloud"
                          style={{ color: "#FF9900" }}
                        ></i>
                        <span>Amazon CloudFront</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
                        </svg>
                        <span>Vercel</span>
                      </div>
                    </div>
                  </div>

                  {/* 5. Tools */}
                  <div className="skills-group">
                    <h3 className="skills-group-title">Tools</h3>
                    <div className="skills-container">
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <i
                          className="fab fa-git-alt"
                          style={{ color: "#F05032" }}
                        ></i>
                        <span>Git</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <i
                          className="fab fa-github"
                          style={{ color: "#FFFFFF" }}
                        ></i>
                        <span>GitHub</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ height: "2.5rem", width: "auto" }}
                          fill="none"
                        >
                          <path
                            d="M17.58 2.04a1.47 1.47 0 0 0-1.04.42l-9.1 8.35-4.49-3.4a.98.98 0 0 0-1.39.23L.36 9.42a.98.98 0 0 0 .23 1.39l3.87 2.94-3.87 2.94a.98.98 0 0 0-.23 1.39l1.2 1.78a.98.98 0 0 0 1.39.23l4.49-3.4 9.1 8.35a1.47 1.47 0 0 0 2.47-1.09V3.13a1.47 1.47 0 0 0-1.46-1.09z"
                            fill="#007ACC"
                          />
                          <path
                            d="M19.01 20.87 7.44 10.81l9.1-8.35a1.47 1.47 0 0 1 2.47 1.09v16.23a1.47 1.47 0 0 1-2.47 1.09z"
                            fill="#1F9CF0"
                          />
                          <path
                            d="m7.44 10.81 10.14-7.93a1.47 1.47 0 0 1 1.43 2.53L8.87 13.34 7.44 10.81z"
                            fill="#0065A9"
                          />
                        </svg>
                        <span>VS Code</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <svg
                          viewBox="0 0 32 32"
                          style={{ height: "2.5rem", width: "auto" }}
                        >
                          <defs>
                            <linearGradient
                              id="viteA"
                              x1="10.87%"
                              x2="90.13%"
                              y1="1.79%"
                              y2="87.05%"
                            >
                              <stop offset="0%" stopColor="#41D1FF" />
                              <stop offset="100%" stopColor="#BD34FE" />
                            </linearGradient>
                            <linearGradient
                              id="viteB"
                              x1="28.97%"
                              x2="73.83%"
                              y1="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#FFEA83" />
                              <stop offset="8.33%" stopColor="#FFDD35" />
                              <stop offset="100%" stopColor="#FFA800" />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#viteA)"
                            d="M29.58 5.79 16.89 28.91a1.05 1.05 0 0 1-1.84 0L2.36 5.79a1.05 1.05 0 0 1 .92-1.55h8.49a1.05 1.05 0 0 1 .94.58l3.29 6.57 3.29-6.57a1.05 1.05 0 0 1 .94-.58h8.43a1.05 1.05 0 0 1 .92 1.55Z"
                          />
                          <path
                            fill="url(#viteB)"
                            d="M20.25 1.57 11.2 3.19a.52.52 0 0 0-.41.43L9.67 10.7a.53.53 0 0 0 .73.57l3.27-1.41-1.92 9.07a.53.53 0 0 0 .84.51l8.72-7.58a.53.53 0 0 0-.25-.9l-3.52-.77 2.99-7.98a.53.53 0 0 0-.28-.64Z"
                          />
                        </svg>
                        <span>Vite</span>
                      </div>
                      <div
                        className="skill-item floating"
                        style={{ animationDelay: "1.0s" }}
                      >
                        <i
                          className="fab fa-npm"
                          style={{ color: "#CB3837" }}
                        ></i>
                        <span>npm</span>
                      </div>
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
                    I am a BCA Graduate and Frontend Developer (Fresher) skilled
                    in HTML, CSS, JavaScript, and React.js. I enjoy building
                    responsive web applications and improving my skills through
                    practical projects. I am eager to start my career and gain
                    real-world experience.
                  </p>
                </div>

                <div className="education-section">
                  <h3 className="section-subtitle">Education</h3>
                  <div className="edu-grid">
                    <div
                      className="edu-card glass-card"
                      ref={(el) => (eduTilltRefs.current[0] = el)}
                    >
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
                    {
                      title: "The Wild Oasis",
                      desc: "A cabin management application with booking management, cabin listings, guest management, and real-time booking operations for hotel staff.",
                      icon: "fa-hotel",
                      demoLink: "https://the-wild-oasis-hms.vercel.app/",
                      codeLink:
                        "https://github.com/nageshl-12/the-wild-oasis",
                    },
                    {
                      title: "The Wild Oasis (Customer Booking Site)",
                      desc: "A customer-facing cabin booking platform with cabin browsing, reservation management, Google OAuth authentication, and real-time availability tracking.",
                      icon: "fa-mountain",
                      demoLink: "https://the-wild-oasis.online/",
                      codeLink:
                        "https://github.com/nageshl-12/wild-oasis-cabin-booking",
                    },
                    {
                      title: "Online Code Compiler",
                      desc: "Integrated execution flow for running code in different languages",
                      icon: "fa-code",
                      demoLink: "https://compilex.co.in",
                      codeLink:
                        "https://github.com/nageshl-12/Compile-X-Online-Code-compiler",
                    },
                    {
                      title: "Weather Forecast",
                      desc: "A modern, responsive weather application with real-time weather data, location search, and a 5-day forecast.",
                      icon: "fa-cloud-sun",
                      demoLink:
                        "https://weather-forecast-app-one-gold.vercel.app/",
                      codeLink:
                        "https://github.com/nageshl-12/weather-forecast-app",
                    },
                    {
                      title: "Fast React Pizza Co",
                      desc: "A full-stack pizza ordering app with menu browsing, cart management, order placement, priority delivery, and order tracking",
                      icon: "fa-pizza-slice",
                      demoLink:
                        "https://fast-react-pizza-co-app-six.vercel.app//",
                      codeLink:
                        "https://github.com/nageshl-12/fast-react-pizza-app",
                    },
                  ].map((proj, idx) => (
                    <div
                      className="project-card glass-card"
                      ref={(el) => (projectTiltRefs.current[idx] = el)}
                      key={idx}
                      onClick={() =>
                        proj.demoLink !== "#" &&
                        window.open(proj.demoLink, "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <div className="project-img">
                        <i className={`fas ${proj.icon}`}></i>
                      </div>
                      <div className="project-info">
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <div className="project-links">
                          <a
                            href={proj.demoLink}
                            target={proj.demoLink !== "#" ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="btn-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fas fa-eye"></i> Demo
                          </a>
                          <a
                            href={proj.codeLink}
                            target={proj.codeLink !== "#" ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="btn-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fab fa-github"></i> Code
                          </a>
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
                    <p>
                      Worked on frontend projects focusing on clean UI,
                      responsiveness, and basic interactivity.
                    </p>
                    <ul>
                      <li>Built responsive websites using HTML &amp; CSS</li>
                      <li>
                        Created login &amp; signup UI with JavaScript validation
                      </li>
                      <li>Designed animated loading screens using CSS</li>
                      <li>Used GitHub for version control and hosting</li>
                    </ul>
                  </div>

                  <div className="experience-card glass-card">
                    <h3>Web Design Practice</h3>
                    <span className="exp-date">2023 &ndash; 2024</span>
                    <p>
                      Practiced modern web design techniques through hands-on UI
                      experiments and layouts.
                    </p>
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
                      <li>
                        Worked with an AI-generated full-stack codebase for an
                        online compiler
                      </li>
                      <li>
                        Identified and fixed issues in both frontend and backend
                        components
                      </li>
                      <li>Assisted in deploying the application on AWS</li>
                      <li>
                        Gained understanding of full-stack architecture and code
                        execution flow
                      </li>
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
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    id="contact-form"
                  >
                    {/* 1. Go to web3forms.com, enter your email to get a free key, and paste it below */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="199b0f4f-cf58-452d-b4b2-07c76e2d0d88"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Submission from My Portfolio"
                    />
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder=" "
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder=" "
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-group">
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        placeholder=" "
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Send Message
                    </button>
                  </form>
                  <div className="social-links">
                    <a
                      href="https://github.com/nageshl-12"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nagesh-l-842372273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/nage.sh_.12?igsh=bzk3eTlubzBxYmMy"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.reddit.com/user/PixelNyx-12/?share_id=vYv0vWsmYowIpVvCKTWmQ&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i className="fab fa-reddit-alien"></i>
                    </a>
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
