import React, { useState } from "react";

const certificatesData = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    file: "/certificate1.png",
    fallbackFile: "/nageshl-12_javascript-algorithms-and-data-structures-v8.png",
    downloadName: "Nagesh_L_JavaScript_Algorithms_Data_Structures.png",
    verifyUrl: "https://www.freecodecamp.org/certification/nageshl-12/javascript-algorithms-and-data-structures-v8",
    description:
      "Demonstrates proficiency in JavaScript fundamentals, ES6+ features, algorithms, data structures, Object-Oriented Programming (OOP), and Functional Programming.",
    skills: ["JavaScript (ES6+)", "Algorithms", "Data Structures", "OOP", "Functional Programming"],
  },
  {
    id: 2,
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    file: "/certificate2.png",
    fallbackFile: "/nageshl-12_javascript-v9.png",
    downloadName: "Nagesh_L_JavaScript_Certification.png",
    verifyUrl: "https://www.freecodecamp.org/certification/nageshl-12/javascript-v9",
    description:
      "Covers fundamental programming concepts, basic and intermediate algorithm scripting, regular expressions, and debugging techniques.",
    skills: ["JavaScript Fundamentals", "Scripting", "Regex", "Debugging"],
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBackToPortfolio = (e) => {
    e.preventDefault();
    if (window.opener) {
      window.close();
    } else {
      window.location.hash = "";
      window.location.reload();
    }
  };

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
          maxWidth: "900px",
          padding: "40px",
          boxSizing: "border-box",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          color: "#111",
        }}
      >
        {/* Navigation / Header Actions */}
        <div
          className="no-print"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <a
            href="#"
            onClick={handleBackToPortfolio}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#f1f5f9",
              color: "#334155",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              border: "1px solid #cbd5e1",
              transition: "0.2s",
            }}
          >
            &larr; Back to Portfolio
          </a>

          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="#resume"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#0077ff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "15px" }}>
          <h1
            style={{
              margin: "0 0 5px 0",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#111",
            }}
          >
            NAGESH L
          </h1>
          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "20px",
              fontWeight: "500",
              color: "#333",
            }}
          >
            Certifications &amp; Credentials
          </h2>
          <p style={{ margin: "0", fontSize: "13px", color: "#444" }}>
            Verified certificates and continuous learning achievements
          </p>
        </div>

        {/* Thick Golden Line matching Resume */}
        <div
          style={{ borderBottom: "3px solid #d4af37", marginBottom: "30px" }}
        ></div>

        {/* Certificates List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                backgroundColor: "#ffffff",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  padding: "20px 24px",
                  borderBottom: "1px solid #f1f5f9",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "10px",
                  backgroundColor: "#fafbfc",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 5px 0",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#0f172a",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    Issued by <strong style={{ color: "#334155" }}>{cert.issuer}</strong>
                  </div>
                </div>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="no-print"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      backgroundColor: "#f0fdf4",
                      color: "#166534",
                      border: "1px solid #bbf7d0",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    &#10003; Verify Online
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px 24px" }}>
                <p
                  style={{
                    margin: "0 0 15px 0",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#334155",
                  }}
                >
                  {cert.description}
                </p>

                {/* Skills Tags */}
                {cert.skills && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "20px",
                    }}
                  >
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          backgroundColor: "#f1f5f9",
                          color: "#475569",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Certificate Image Preview */}
                <div
                  onClick={() => setSelectedImage(cert.file)}
                  style={{
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    cursor: "pointer",
                    backgroundColor: "#f8fafc",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <img
                    src={cert.file}
                    onError={(e) => {
                      if (cert.fallbackFile && e.target.src !== cert.fallbackFile) {
                        e.target.src = cert.fallbackFile;
                      }
                    }}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      maxHeight: "450px",
                      objectFit: "contain",
                      display: "block",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div
                    className="no-print"
                    style={{
                      padding: "8px",
                      backgroundColor: "rgba(15, 23, 42, 0.75)",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Click image to view full screen
                  </div>
                </div>

                {/* Action Buttons for Certificate */}
                <div
                  className="no-print"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                    marginTop: "18px",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#f8fafc",
                      color: "#334155",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Open Image in New Tab
                  </a>
                  <a
                    href={cert.file}
                    download={cert.downloadName || "certificate.png"}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#0f172a",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Download Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid #e2e8f0",
            textAlign: "center",
            fontSize: "13px",
            color: "#64748b",
          }}
        >
          <p style={{ margin: "0" }}>
            &copy; {new Date().getFullYear()} Nagesh L. All certificates are verified and publicly accessible.
          </p>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(5px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
            cursor: "zoom-out",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "95vw",
              maxHeight: "95vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0px",
                backgroundColor: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full certificate"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @media print {
          body { background: #fff; margin: 0; padding: 0; }
          .no-print { display: none !important; }
          @page { margin: 1cm; }
        }
      `}</style>
    </div>
  );
}
