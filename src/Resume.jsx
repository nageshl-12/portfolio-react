import React from "react";

export default function Resume() {
  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "850px",
          padding: "45px 50px",
          boxSizing: "border-box",
          boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
          color: "#000000",
          lineHeight: "1.45",
        }}
      >
        {/* Navigation Actions (Hidden in print) */}
        <div
          className="no-print"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "20px",
            paddingBottom: "15px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (window.opener) {
                window.close();
              } else {
                window.location.hash = "";
                window.location.reload();
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              backgroundColor: "#f1f5f9",
              color: "#334155",
              textDecoration: "none",
              borderRadius: "5px",
              fontSize: "13px",
              fontWeight: "600",
              border: "1px solid #cbd5e1",
            }}
          >
            &larr; Back to Portfolio
          </a>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "10px" }}>
          <h1
            style={{
              margin: "0 0 4px 0",
              fontSize: "26px",
              fontWeight: "800",
              letterSpacing: "0.5px",
              color: "#000000",
              textTransform: "uppercase",
            }}
          >
            NAGESH L
          </h1>
          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "16px",
              fontWeight: "700",
              color: "#111111",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            FRONTEND DEVELOPER
          </h2>
          <p
            style={{
              margin: "0 0 10px 0",
              fontSize: "13px",
              color: "#111111",
              textDecoration: "underline",
              wordSpacing: "1px",
            }}
          >
            <span>Chamarajanagara</span>
            {" | "}

            <a
              href="tel:+916360744922"
              style={{ color: "#111111", textDecoration: "underline" }}
            >
              6360744922
            </a>
            {" | "}
            <a
              href="mailto:nageshl15260@gmail.com"
              style={{ color: "#111111", textDecoration: "underline" }}
            >
              nageshl15260@gmail.com
            </a>
            {" | "}

            <a
              href="https://nageshl-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#111111", textDecoration: "underline" }}
            >
              Portfolio
            </a>
            {" | "}
            <a
              href="https://github.com/nageshl-12"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#111111", textDecoration: "underline" }}
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://www.linkedin.com/in/nagesh-l-842372273/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#111111", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Section Divider Style */}
        {/* SUMMARY */}
        <div style={{ marginBottom: "18px" }}>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "13.5px",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#000000",
              borderBottom: "1.5px solid #c59b27",
              paddingBottom: "3px",
              letterSpacing: "0.5px",
            }}
          >
            SUMMARY
          </h3>
          <p
            style={{
              margin: "0",
              fontSize: "13px",
              lineHeight: "1.55",
              color: "#111111",
              textAlign: "justify",
            }}
          >
            Frontend Developer skilled in HTML, CSS, JavaScript, and React, with
            hands-on experience building responsive web applications.
            Experienced with React Router, Context API, REST APIs, and modern
            frontend development practices. Focused on building clean,
            user-friendly interfaces and continuously improving frontend
            development skills.
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div style={{ marginBottom: "18px" }}>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "13.5px",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#000000",
              borderBottom: "1.5px solid #c59b27",
              paddingBottom: "3px",
              letterSpacing: "0.5px",
            }}
          >
            TECHNICAL SKILLS
          </h3>
          <p
            style={{
              margin: "0",
              fontSize: "13px",
              color: "#111111",
              lineHeight: "1.55",
            }}
          >
            HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, React
            Router, Context API, REST APIs, Git, GitHub, Vercel
          </p>
        </div>

        {/* PROJECTS */}
        <div style={{ marginBottom: "18px" }}>
          <h3
            style={{
              margin: "0 0 10px 0",
              fontSize: "13.5px",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#000000",
              borderBottom: "1.5px solid #c59b27",
              paddingBottom: "3px",
              letterSpacing: "0.5px",
            }}
          >
            PROJECTS
          </h3>

          {/* Project 1 */}
          <div style={{ marginBottom: "14px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "3px",
              }}
            >
              <strong
                style={{
                  fontSize: "13.5px",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                Personal Portfolio Website
              </strong>
              <strong
                style={{
                  fontSize: "13.5px",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                May 2026
              </strong>
            </div>
            <ul
              style={{
                margin: "0",
                paddingLeft: "20px",
                fontSize: "13px",
                color: "#111111",
                lineHeight: "1.55",
              }}
            >
              <li>
                Built a responsive personal portfolio website using React.js to
                showcase projects and technical skills.
              </li>
              <li>
                Developed an interactive UI with modern frontend techniques and
                3D elements.
              </li>
              <li>Deployed the portfolio using Vercel.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div style={{ marginBottom: "14px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "3px",
              }}
            >
              <strong
                style={{
                  fontSize: "13.5px",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                Online Code Compiler
              </strong>
              <strong
                style={{
                  fontSize: "13.5px",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                Mar 2026
              </strong>
            </div>
            <ul
              style={{
                margin: "0",
                paddingLeft: "20px",
                fontSize: "13px",
                color: "#111111",
                lineHeight: "1.55",
              }}
            >
              <li>
                Developed a web-based code compiler interface using JavaScript.
              </li>
              <li>
                Implemented user input handling and code execution
                functionality.
              </li>
              <li>Deployed the application on AWS.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div style={{ marginBottom: "6px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "3px",
              }}
            >
              <strong
                style={{
                  fontSize: "13.5px",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                Currency Converter Web App
              </strong>
              <strong
                style={{
                  fontSize: "13.5px",
                  color: "#000000",
                  fontWeight: "700",
                }}
              >
                Jan 2026
              </strong>
            </div>
            <ul
              style={{
                margin: "0",
                paddingLeft: "20px",
                fontSize: "13px",
                color: "#111111",
                lineHeight: "1.55",
              }}
            >
              <li>
                Built a responsive currency converter using React.js and
                Tailwind CSS.
              </li>
              <li>
                Integrated a REST API to fetch real-time currency exchange
                rates.
              </li>
              <li>
                Used async/await for asynchronous API requests and data
                handling.
              </li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div style={{ marginBottom: "18px" }}>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "13.5px",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#000000",
              borderBottom: "1.5px solid #c59b27",
              paddingBottom: "3px",
              letterSpacing: "0.5px",
            }}
          >
            EDUCATION
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "3px",
            }}
          >
            <strong
              style={{
                fontSize: "13.5px",
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Bachelor of Computer Application
            </strong>
            <strong
              style={{
                fontSize: "13.5px",
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Sep 2023-Jun 2026
            </strong>
          </div>
          <p
            style={{ margin: "0 0 2px 0", fontSize: "13px", color: "#111111" }}
          >
            Vidya Vikas First Grade College, Mysore University
          </p>
          <p style={{ margin: "0", fontSize: "13px", color: "#111111" }}>
            CGPA:7.68
          </p>
        </div>

        {/* ADDITIONAL INFORMATION */}
        <div style={{ marginBottom: "10px" }}>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "13.5px",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#000000",
              borderBottom: "1.5px solid #c59b27",
              paddingBottom: "3px",
              letterSpacing: "0.5px",
            }}
          >
            ADDITIONAL INFORMATION
          </h3>
          <div
            style={{ fontSize: "13px", color: "#111111", lineHeight: "1.6" }}
          >
            <p style={{ margin: "0 0 4px 0" }}>
              <strong>Languages:</strong> English, Kannada, Hindi.
            </p>
            <div style={{ margin: "0 0 4px 0" }}>
              <strong>Certifications:</strong>
              <ul style={{ margin: "3px 0 0 0", paddingLeft: "20px" }}>
                <li>
                  JavaScript Developer Certification &mdash; freeCodeCamp, June
                  2026
                </li>
                <li>
                  Legacy JavaScript Algorithms and Data Structures &mdash;
                  freeCodeCamp, June 2026
                </li>
              </ul>
            </div>
            <p style={{ margin: "0" }}>
              <strong>Interests:</strong> Frontend Development, Web Development,
              Problem Solving
            </p>
          </div>
        </div>

        {/* Bottom Actions (Hidden in print) */}
        <div
          className="no-print"
          style={{
            textAlign: "center",
            marginTop: "30px",
            paddingTop: "15px",
            borderTop: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/Nagesh%20L%20Resume.pdf"
            download="Nagesh L Resume.pdf"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "#0f172a",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "13.5px",
              fontWeight: "600",
            }}
          >
            Download PDF
          </a>
          <a
            href="#certificates"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "#0077ff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "13.5px",
              fontWeight: "600",
            }}
          >
            View Certificates
          </a>
        </div>
      </div>

      <style>{`
        @media print {
          body { 
            background: #ffffff !important; 
            margin: 0 !important; 
            padding: 0 !important; 
          }
          .no-print { 
            display: none !important; 
          }
          @page { 
            margin: 1.2cm; 
            size: A4 portrait;
          }
        }
      `}</style>
    </div>
  );
}
