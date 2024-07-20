import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// Image
import fimage from '../media/linkedinProfile.png';
import About from './About';
function Profile() {
  // #F7E7DC
  return (
<div style={{backgroundColor: '#F3F1F5', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
  <Row className="mx-0">
    <Col style={{alignItems:'center', justifyContent: 'center', padding: '50px', display: 'flex', flexDirection: 'column'}}>
      {/* Image */}
      <Image src={fimage} rounded style={{width: '350px', height: '350px', padding: '40px'}} />
    </Col>
    {/* Col 2  */}
    {/* <Col style={{alignItems:'left', justifyContent: 'center', padding: '50px', display: 'flex', flexDirection: 'column'}}>
          <h1 style={{ color: '#333', fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', marginBottom: '20px', alignItems: 'left',textAlign: 'left', fontSize: '50px' }}>Deebak</h1>
          <h4 style={{ color: '#666', fontFamily: 'Georgia, serif', fontSize: '18px', lineHeight: '1.5', marginBottom: '30px', textAlign: 'left' }}>Transforming raw data into actionable intelligence, I help organizations make informed choices that propel them forward</h4>  
    </Col> */}
  
        <Col>
        <About/>
        </Col>
      </Row>
</div>
      
      
  );
}

export default Profile;