import React from 'react';

export default function Resume() {
  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', padding: '40px 20px', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', display: 'flex', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '850px', padding: '50px', boxSizing: 'border-box', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', color: '#111' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '15px' }}>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '28px', fontWeight: 'bold', color: '#111' }}>NAGESH L</h1>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '500', color: '#333' }}>Frontend Developer (Fresher)</h2>
          <p style={{ margin: '0', fontSize: '13px', color: '#444' }}>
            6360744922 | nageshl15260@gmail.com | Chamarajanagara | https://nageshl-portfolio.vercel.app/
          </p>
        </div>
        
        {/* Thick Golden Line */}
        <div style={{ borderBottom: '3px solid #d4af37', marginBottom: '20px' }}></div>

        {/* SUMMARY */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#111', borderBottom: '1px solid #d4af37', paddingBottom: '4px' }}>SUMMARY</h3>
          <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.6', color: '#222' }}>
            Motivated BCA student with foundational knowledge of HTML, CSS, JavaScript, and currently learning React.js. Passionate about building responsive and user-friendly web applications. Eager to apply frontend development skills in a real-world environment and continuously improve through hands-on projects.
          </p>
        </div>

        {/* SKILLS */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#111', borderBottom: '1px solid #d4af37', paddingBottom: '4px' }}>SKILLS</h3>
          <p style={{ margin: '0', fontSize: '13px', color: '#222' }}>
            HTML, CSS, JavaScript (ES6, Array Methods, Async/Await, API Calls), React.js (Learning), Git (Basic)
          </p>
        </div>

        {/* PROJECTS */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#111', borderBottom: '1px solid #d4af37', paddingBottom: '4px' }}>PROJECTS</h3>
          
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <strong style={{ fontSize: '13px', color: '#111' }}>Currency Converter Web App</strong>
              <strong style={{ fontSize: '13px', color: '#111' }}>Apr-2026</strong>
            </div>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '13px', color: '#222', lineHeight: '1.6' }}>
              <li>Built a responsive web application using HTML, CSS, and JavaScript</li>
              <li>Fetched real-time currency exchange rates using an API</li>
              <li>Implemented async/await for handling API data</li>
            </ul>
          </div>

          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <strong style={{ fontSize: '13px', color: '#111' }}>Online Code Compiler</strong>
              <strong style={{ fontSize: '13px', color: '#111' }}>Mar-2026</strong>
            </div>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '13px', color: '#222', lineHeight: '1.6' }}>
              <li>Developed a web-based code compiler interface using JavaScript</li>
              <li>Utilized AI tools for debugging and improving functionality</li>
              <li>Deployed the application on AWS</li>
            </ul>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <strong style={{ fontSize: '13px', color: '#111' }}>Personal Portfolio Website</strong>
              <strong style={{ fontSize: '13px', color: '#111' }}>Jan-2026</strong>
            </div>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '13px', color: '#222', lineHeight: '1.6' }}>
              <li>Created a personal portfolio to showcase projects and skills</li>
              <li>Designed responsive UI using HTML, CSS, and JavaScript</li>
              <li>Utilized AI tools to assist in UI design and development</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#111', borderBottom: '1px solid #d4af37', paddingBottom: '4px' }}>EDUCATION</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <strong style={{ fontSize: '13px', color: '#111' }}>Bachelor of Computer Application</strong>
            <strong style={{ fontSize: '13px', color: '#111' }}>Sep 2023 - Jun 2026</strong>
          </div>
          <p style={{ margin: '0 0 2px 0', fontSize: '13px', color: '#222' }}>Vidya Vikas First Grade College, Mysore University</p>
          <p style={{ margin: '0', fontSize: '13px', color: '#222' }}>CGPA:7.39 (up to 5<sup>th</sup> Semester)</p>
        </div>

        {/* ADDITIONAL INFORMATION */}
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#111', borderBottom: '1px solid #d4af37', paddingBottom: '4px' }}>ADDITIONAL INFORMATION</h3>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '13px', color: '#222', lineHeight: '1.7' }}>
            <li><strong>Languages:</strong> English, Kannada, Hindi</li>
            <li>Currently learning <strong>React.js</strong> and modern frontend development</li>
            <li>Familiar with <strong>Git</strong> and <strong>GitHub</strong> for version control</li>
            <li>Experience in working with <strong>REST API</strong>s and asynchronous JavaScript</li>
            <li>Deployed projects using <strong>AWS</strong></li>
          </ul>
        </div>
        
        {/* Print Button (Hidden in print) */}
        <div className="no-print" style={{ textAlign: 'center', marginTop: '40px' }}>
           <a href="/Nagesh%20L%20Resume.pdf" download="Nagesh L Resume.pdf" style={{ display: 'inline-block', padding: '10px 25px', backgroundColor: '#111', color: '#fff', textDecoration: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
             Download PDF
           </a>
        </div>

      </div>
      <style>{`
        @media print {
          body { background: #fff; margin: 0; padding: 0; }
          .no-print { display: none; }
          @page { margin: 0; }
        }
      `}</style>
    </div>
  );
}
