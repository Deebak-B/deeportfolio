import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Link from 'react-bootstrap/NavLink';
// Images
import gmail from '../media/gmail-logo PNG.png'
// 7D8ABC
function ContactDetails() {
    return (
      <Container fluid style={{backgroundColor:'#EBF4F6'}}>
          <Row>
              <Col>
        <Container
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            padding:'10px',
            maxWidth: '400px',
            margin: '0 auto',
            
        }}
        >
                        <h3 style={{ fontSize: '3rem', fontFamily: 'Montserrat, sans-serif',  color: 'black' }}>Contact</h3>
                        <br />

                         <p style={{ fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif', color: 'black' }}>+91 9442952293</p>
            {/* Email */}
            <Link style={{ fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif', color: 'black', textDecoration: 'none' }} href="mailto:deebak2703@gmail.com">deebak2703@gmail.com</Link>
            <br />
           
            <Link style={{ fontSize: '1.5rem', fontFamily: 'Montserrat, sans-serif', color: 'black', textDecoration: 'none' }} href="https://www.linkedin.com/in/deebak-b-3b2a2824b">Deebak Linkedin</Link>
            
        </Container>
              
   </Col>
    <Col>
            {/* <ul>
              <li><Link href='#profile'>Profile</Link></li>
    </ul> */}
    </Col>             
</Row>gi
</Container>
  );
}

export default ContactDetails;