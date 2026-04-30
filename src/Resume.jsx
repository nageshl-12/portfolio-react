import React from 'react';

export default function Resume() {
  return (
    <div style={{ backgroundColor: 'transparent', color: 'var(--text-color)', minHeight: '100vh', padding: '50px 20px', fontFamily: '"Arial", sans-serif' }}>
      <div style={{ backgroundColor: 'var(--menu-bg)', border: '1px solid var(--glass-border)', borderRadius: '15px', padding: '40px', maxWidth: '750px', margin: '0 auto', marginBottom: '50px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
         
         {/* Header */}
         <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ color: '#e74c3c', fontSize: '2.2rem', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 15px 0' }}>NAGESH L</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>nageshl15260@gmail.com | 6360744922 | Chamrajnagar, India 571313</p>
         </div>
         
         {/* Thin horizontal line */}
         <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', marginBottom: '30px' }}/>

         {/* Summary */}
         <div style={{ marginBottom: '35px' }}>
            <h2 style={{ color: '#e74c3c', fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>Summary</h2>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-color)', margin: 0 }}>
               Motivated BCA student and aspiring web developer skilled in HTML, CSS, and JavaScript. Experienced in building responsive websites and Python-based mini projects. Strong interest in frontend development, problem-solving, and continuous learning.
            </p>
         </div>

         {/* Skills */}
         <div style={{ marginBottom: '35px' }}>
            <h2 style={{ color: '#e74c3c', fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5px', fontSize: '0.9rem', color: 'var(--text-color)' }}>
               <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, lineHeight: '1.8' }}>
                  <li><strong>Web Development:</strong> HTML, CSS, JavaScript</li>
                  <li><strong>Programming:</strong> Python, C</li>
                  <li><strong>Database:</strong> MySQL</li>
               </ul>
               <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, lineHeight: '1.8' }}>
                  <li><strong>Tools:</strong> GitHub, VS Code</li>
                  <li><strong>Other:</strong> Responsive Design, Debugging, Teamwork</li>
               </ul>
            </div>
         </div>

         {/* Projects */}
         <div style={{ marginBottom: '35px' }}>
            <h2 style={{ color: '#e74c3c', fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>Projects</h2>
            
            <div style={{ marginBottom: '25px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-color)', display: 'block' }}>Online Code Compiler (AI-assisted)</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '5px 0 10px 0' }}>Full Stack | 2026</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-color)', lineHeight: '1.8', margin: 0 }}>
                   <li>Worked with an AI-generated full-stack codebase for an online compiler.</li>
                   <li>Identified and fixed issues in both frontend and backend components.</li>
                   <li>Assisted in deploying the application on AWS.</li>
                   <li>Gained understanding of full-stack architecture and code execution flow.</li>
                </ul>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-color)', display: 'block' }}>Web Development Mini Project</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '5px 0 10px 0' }}>Vidya Vikas FGC | Mysore | 09/2024 – 01/2025</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-color)', lineHeight: '1.8', margin: 0 }}>
                   <li>Developed a responsive website using HTML, CSS, and JavaScript.</li>
                   <li>Learned core frontend concepts and page layouts.</li>
                   <li>Collaborated with classmates to manage tasks and testing.</li>
                </ul>
            </div>

            <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-color)', display: 'block' }}>Python Mini Project</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '5px 0 10px 0' }}>Vidya Vikas FGC | Mysore | 09/2024 – 01/2025</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-color)', lineHeight: '1.8', margin: 0 }}>
                   <li>Built a console-based Python application.</li>
                   <li>Practiced loops, functions, and file handling.</li>
                </ul>
            </div>
         </div>

         {/* Education */}
         <div style={{ marginBottom: '35px' }}>
            <h2 style={{ color: '#e74c3c', fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>Education</h2>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-color)', display: 'block' }}>Bachelor of Computer Applications (BCA)</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', margin: '5px 0 0 0' }}>Vidya Vikas First Grade College, Mysore</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '5px 0 0 0' }}>09/2023 – 06/2026 (Expected)</p>
         </div>

         {/* Languages */}
         <div style={{ marginBottom: '35px' }}>
            <h2 style={{ color: '#e74c3c', fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>Languages</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-color)', lineHeight: '1.8', margin: 0 }}>
               <li>Kannada – Native</li>
               <li>English – Intermediate</li>
               <li>Hindi – Advanced</li>
            </ul>
         </div>

         {/* Certifications */}
         <div style={{ marginBottom: '60px' }}>
            <h2 style={{ color: '#e74c3c', fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>Certifications</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-color)', lineHeight: '1.8', margin: 0 }}>
               <li>Python Essentials Certificate – Cisco (Completed 2024)</li>
               <li>Python Essentials Certificate Level 2 – Cisco (Completed 2024)</li>
            </ul>
         </div>

         {/* Extracted Bottom Action Buttons */}
         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="Nagesh L Resume .pdf" download="Nagesh L Resume .pdf" style={{ 
               border: '1px solid #e74c3c', 
               color: 'var(--bg-color)', 
               backgroundColor: '#e74c3c',
               padding: '10px 30px', 
               borderRadius: '30px', 
               textDecoration: 'none', 
               fontWeight: '600', 
               fontSize: '0.9rem',
               transition: '0.3s'
            }}>Download PDF</a>
         </div>

      </div>
    </div>
  );
}
