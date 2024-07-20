import React, { Component } from 'react';
function About() {
 const containerStyle = {
    backgroundColor: '#f0f8ff', // Light background color
    color: '#333', // Dark text color
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   fontFamily: 'Arial, sans-serif',
   
  };

  const textStyle = {
    textAlign: 'left',
    lineHeight: '1.8',
     fontSize:'1.5rem',
  };

  const headStyle = {
        textAlign: 'left',
    lineHeight: '1.8',
    fontSize: '2rem',
     color:'#50b4b3',
  }
  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    // <div style={{backgroundColor: '#CDE8E5',padding:'10px'}}>
    <div style={containerStyle}>
      {/* <h2 style={headStyle}>About</h2> */}
      <h6 style={textStyle}>
        <p style={{fontSize:'2rem',fontStyle:'normal'}}>Hey!</p>I’m Deebak, a CSE graduate (2024) from Puducherry Technological University with a passion for data analytics and graphic design.
        If you have projects that require expertise in these areas, I’d be happy to help. My skills include proficiency in Power BI,
        MySQL, Python, pandas, Adobe Photoshop, Adobe Illustrator, and Inkscape. If you’re interested in
        collaborating or need assistance with any of these tools, feel free to reach out to me at <a href="mailto:deebak2703@gmail.com" style={linkStyle} onMouseOver={(e) => e.currentTarget.style = linkHoverStyle} onMouseOut={(e) => e.currentTarget.style = linkStyle}>deebak2703@gmail.com</a> or
        text me at +91 9442952293.
        <br /><br />
        I'm looking forward to hear from you!
      </h6>
      </div>
      // </div>
  );
};

export default About;