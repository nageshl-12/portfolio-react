import React from 'react';

export default function Resume() {
  const contactLinkStyle = {
    color: '#111111',
    textDecoration: 'none',
  };

  return (
    <div
      className="resume-page-wrapper"
      style={{
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
        padding: '35px 20px 50px 20px',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Navigation Bar (Hidden when printing) */}
      <div
        className="no-print"
        style={{
          width: '100%',
          maxWidth: '820px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '18px',
          padding: '0 4px',
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.opener) {
              window.close();
            } else {
              window.location.hash = '';
              window.location.reload();
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#ffffff',
            color: '#1e293b',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '13.5px',
            fontWeight: '600',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #cbd5e1',
            transition: 'all 0.2s ease',
          }}
        >
          &larr; Back to Portfolio
        </a>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13.5px',
              fontWeight: '600',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div
        className="resume-paper"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: '820px',
          padding: '40px 48px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
          color: '#000000',
          lineHeight: '1.45',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '10px' }}>
          <h1
            style={{
              margin: '0 0 3px 0',
              fontSize: '26px',
              fontWeight: '800',
              letterSpacing: '0.4px',
              color: '#000000',
              textTransform: 'uppercase',
              lineHeight: '1.15',
            }}
          >
            NAGESH L
          </h1>
          <h2
            style={{
              margin: '0 0 8px 0',
              fontSize: '15px',
              fontWeight: '700',
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '0.4px',
              lineHeight: '1.2',
            }}
          >
            ASPIRING FULL-STACK DEVELOPER
          </h2>
          <p
            style={{
              margin: '0',
              fontSize: '12.5px',
              color: '#111111',
              wordSpacing: '0.5px',
              lineHeight: '1.4',
            }}
          >
            <span>Chamarajanagara, Karnataka</span>
            {' | '}
            <a href="mailto:nageshl15260@gmail.com" style={contactLinkStyle}>
              nageshl15260@gmail.com
            </a>
            {' | '}
            <a href="tel:+916360744922" style={contactLinkStyle}>
              +91 63607 44922
            </a>
            {' | '}
            <a
              href="https://nageshl-portfolio.in"
              target="_blank"
              rel="noreferrer"
              style={contactLinkStyle}
            >
              Portfolio
            </a>
            {' | '}
            <a
              href="https://www.linkedin.com/in/nagesh-l-842372273/"
              target="_blank"
              rel="noreferrer"
              style={contactLinkStyle}
            >
              LinkedIn
            </a>
            {' | '}
            <a
              href="https://github.com/nageshl-12"
              target="_blank"
              rel="noreferrer"
              style={contactLinkStyle}
            >
              GitHub
            </a>
          </p>
        </div>

        {/* SUMMARY */}
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              backgroundColor: '#e3e5e7',
              padding: '2.5px 8px',
              margin: '10px 0 7px 0',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.6px',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              SUMMARY
            </h3>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              lineHeight: '1.45',
              color: '#111111',
              textAlign: 'justify',
            }}
          >
            Aspiring Full-Stack Developer with a strong foundation in React.js,
            JavaScript (ES6+), and Next.js. Experienced in building responsive,
            user-friendly web applications using Redux Toolkit, TanStack React
            Query, and Tailwind CSS. Hands-on experience with Supabase
            integration, Google OAuth authentication, server-side rendering, and
            reservation management. Passionate about developing scalable,
            maintainable applications and continuously learning modern web
            technologies.
          </p>
        </div>

        {/* SKILLS */}
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              backgroundColor: '#e3e5e7',
              padding: '2.5px 8px',
              margin: '10px 0 7px 0',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.6px',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              SKILLS
            </h3>
          </div>
          <div
            style={{ fontSize: '12px', lineHeight: '1.45', color: '#111111' }}
          >
            <p style={{ margin: '0 0 3px 0' }}>
              <strong style={{ fontWeight: '700', color: '#000000' }}>
                Frontend:
              </strong>{' '}
              HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS
            </p>
            <p style={{ margin: '0 0 3px 0' }}>
              <strong style={{ fontWeight: '700', color: '#000000' }}>
                React Ecosystem:
              </strong>{' '}
              Redux Toolkit, React Router, TanStack React Query, React Hot
              Toast, Lucide React, React Hook Form
            </p>
            <p style={{ margin: '0 0 3px 0' }}>
              <strong style={{ fontWeight: '700', color: '#000000' }}>
                Backend &amp; APIs:
              </strong>{' '}
              Node.js, Auth.js, REST API Integration, Supabase, Server Actions
            </p>
            <p style={{ margin: '0 0 3px 0' }}>
              <strong style={{ fontWeight: '700', color: '#000000' }}>
                Cloud &amp; Deployments:
              </strong>{' '}
              AWS Amplify, Amazon Route 53, Amazon CloudFront, Vercel
            </p>
            <p style={{ margin: '0 0 3px 0' }}>
              <strong style={{ fontWeight: '700', color: '#000000' }}>
                Tools:
              </strong>{' '}
              Git, GitHub, VS Code, Vite, npm
            </p>
            <p style={{ margin: '0' }}>
              <strong style={{ fontWeight: '700', color: '#000000' }}>
                Core Concepts:
              </strong>{' '}
              Authentication &amp; Authorization, Server-Side Rendering (SSR),
              Caching &amp; Revalidation, Responsive Design, State Management,
              Component-Based Architecture, CRUD Operations
            </p>
          </div>
        </div>

        {/* PROJECTS */}
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              backgroundColor: '#e3e5e7',
              padding: '2.5px 8px',
              margin: '10px 0 7px 0',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.6px',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              PROJECTS
            </h3>
          </div>

          {/* Project 1 */}
          <div style={{ marginBottom: '8px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '1px',
              }}
            >
              The Wild Oasis | Hotel Management Dashboard
            </div>
            <div
              style={{
                fontSize: '11.5px',
                fontStyle: 'italic',
                color: '#222222',
                marginBottom: '3px',
              }}
            >
              React.js, React Router, TanStack React Query, Supabase, Tailwind
              CSS
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '12px',
                lineHeight: '1.4',
                color: '#111111',
              }}
            >
              <li style={{ marginBottom: '2px' }}>
                Developed a hotel management dashboard to manage cabins,
                bookings, guests, and hotel settings.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Implemented complete CRUD operations with Supabase for data
                management and image storage.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Integrated TanStack React Query for server-state management,
                caching, and query invalidation.
              </li>
              <li>
                Built dynamic filtering, sorting, pagination, and reusable UI
                components for efficient data handling.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div style={{ marginBottom: '8px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '1px',
              }}
            >
              The Wild Oasis | Customer Cabin Booking Platform
            </div>
            <div
              style={{
                fontSize: '11.5px',
                fontStyle: 'italic',
                color: '#222222',
                marginBottom: '3px',
              }}
            >
              Next.js, React, Tailwind CSS, Supabase, Auth.js, AWS Amplify,
              Amazon Route 53
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '12px',
                lineHeight: '1.4',
                color: '#111111',
              }}
            >
              <li style={{ marginBottom: '2px' }}>
                Developed a responsive cabin booking platform with cabin
                browsing, detailed views, and reservation features.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Implemented secure Google OAuth authentication using Auth.js and
                personalized customer account access.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Integrated Supabase for cabin data, reservation creation, and
                booking management
              </li>
              <li>
                Built interactive date selection with availability validation
                and deployed on AWS Amplify using a custom domain configured
                through Route 53.
              </li>
            </ul>
          </div>

          {/* Project 3 */}
          <div style={{ marginBottom: '8px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '1px',
              }}
            >
              SkyCast | Weather Forecast Application
            </div>
            <div
              style={{
                fontSize: '11.5px',
                fontStyle: 'italic',
                color: '#222222',
                marginBottom: '3px',
              }}
            >
              React.js, JavaScript, CSS, Open-Meteo API
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '12px',
                lineHeight: '1.4',
                color: '#111111',
              }}
            >
              <li style={{ marginBottom: '2px' }}>
                Developed a responsive weather application providing real-time
                weather conditions and forecasts using the Open-Meteo API.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Integrated geolocation to automatically detect users' locations
                and retrieve local weather information.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Implemented city search with reverse geocoding to fetch weather
                data for different locations.
              </li>
              <li>
                Displayed current weather conditions, daily forecasts,
                visibility, and other weather metrics using reusable React
                components.
              </li>
            </ul>
          </div>

          {/* Project 4 */}
          <div style={{ marginBottom: '6px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '1px',
              }}
            >
              Fast React Pizza Co. | Pizza Ordering Application
            </div>
            <div
              style={{
                fontSize: '11.5px',
                fontStyle: 'italic',
                color: '#222222',
                marginBottom: '3px',
              }}
            >
              React.js, Redux Toolkit, React Router, Tailwind CSS
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '12px',
                lineHeight: '1.4',
                color: '#111111',
              }}
            >
              <li style={{ marginBottom: '2px' }}>
                Developed a pizza ordering application with an interactive menu
                and shopping cart.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Implemented Redux Toolkit for centralized cart state management
                and order updates.
              </li>
              <li style={{ marginBottom: '2px' }}>
                Used React Router for navigation and data loading.
              </li>
              <li>
                Integrated REST APIs to fetch menu items and submit customer
                orders.
              </li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              backgroundColor: '#e3e5e7',
              padding: '2.5px 8px',
              margin: '10px 0 7px 0',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.6px',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              EDUCATION
            </h3>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '1px',
            }}
          >
            <strong
              style={{
                fontSize: '13px',
                color: '#000000',
                fontWeight: '700',
              }}
            >
              Vidya Vikas First Grade College, Mysore
            </strong>
            <strong
              style={{
                fontSize: '13px',
                color: '#000000',
                fontWeight: '700',
                whiteSpace: 'nowrap',
              }}
            >
              Sept 2023 - Jun 2026
            </strong>
          </div>
          <div
            style={{
              fontSize: '12px',
              fontStyle: 'italic',
              color: '#222222',
              marginBottom: '2px',
            }}
          >
            University of Mysore
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#111111',
              marginBottom: '2px',
            }}
          >
            Bachelor of Computer Applications (BCA)
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#111111',
            }}
          >
            CGPA: 7.68
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div style={{ marginBottom: '6px' }}>
          <div
            style={{
              backgroundColor: '#e3e5e7',
              padding: '2.5px 8px',
              margin: '10px 0 7px 0',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '700',
                fontStyle: 'italic',
                letterSpacing: '0.6px',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              CERTIFICATIONS
            </h3>
          </div>
          <div
            style={{ fontSize: '12px', lineHeight: '1.45', color: '#111111' }}
          >
            <p style={{ margin: '0 0 3px 0' }}>
              The Ultimate React Course 2025: React, Next.js, Redux & More{' '}
              <br />
              Udemy | Jonas Schmedtmann | November 2026
            </p>
            <br />
            <p style={{ margin: 0 }}>
              JavaScript Algorithms and Data Structures <br />
              freeCodeCamp | June 2026
            </p>
          </div>
        </div>

        {/* Bottom Actions (Hidden when printing) */}
        <div
          className="no-print"
          style={{
            textAlign: 'center',
            marginTop: '28px',
            paddingTop: '18px',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              display: 'inline-block',
              padding: '9px 20px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            Print / Save as PDF
          </button>
          <a
            href="/Nagesh%20L%20Resume.pdf"
            download="Nagesh L Resume.pdf"
            style={{
              display: 'inline-block',
              padding: '9px 20px',
              backgroundColor: '#334155',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            Download PDF
          </a>
          <a
            href="#certificates"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              padding: '9px 20px',
              backgroundColor: '#0077ff',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            View Certificates
          </a>
        </div>
      </div>

      <style>{`
        @media print {
          html, body {
            background: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .resume-page-wrapper {
            background: #ffffff !important;
            padding: 0 !important;
            min-height: auto !important;
          }
          .resume-paper {
            box-shadow: none !important;
            padding: 16px 26px !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: A4 portrait;
            margin: 0.5cm;
          }
        }
      `}</style>
    </div>
  );
}
