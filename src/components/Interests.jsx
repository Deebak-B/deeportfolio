import React from 'react';
import "../components/Interests.css";
// media
import dataAnalyticsPNG from '../media/DataAnalyticsWP.png';
import graphicDesignPNG from '../media/gd.jpg';

import gdesigns from '../media/GraphicDesigns.png';
// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'react-bootstrap/NavLink';





function Interests() {
  return (
<div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', paddingTop: '50px' }}>
  <h2 style={{ color: '#333', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>Areas of Interest</h2>
  <h4 style={{ color: '#666', fontFamily: 'Open Sans, sans-serif', fontSize: '18px', lineHeight: '1.5', marginBottom: '20px', textAlign: 'center' }}>Take a look at some of the things i love working on.</h4>
  <Row className="justify-content-center">
    {/* Data Analytics */}
              <Col md={6} lg={4} className="mb-5">
                  
                  {/* <Card.Title>
                    <h2 style={{ color: '#50B498', fontFamily: 'Montserrat, sans-serif', marginBottom: '10px', textAlign: 'center' }}>
                        <Link href="dataanalytics_projects">Data Analytics</Link>
                    </h2>
                    </Card.Title> */}

                  <Card className="card-hover">
                      
        <Card.Img variant="top" src={dataAnalyticsPNG} className="card-image" />
        <Card.Body className="card-body-hover">
          <Card.Title><h2> <Link href="/dataanalytics_projects">Data Analytics </Link></h2></Card.Title>
          <Card.Text className="card-text-hover">
                              I transform raw data into actionable intelligence,
                              empowering organizations to make informed choices that propel them forward.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    {/* Graphic Designing */}
              <Col md={6} lg={4}
                  className="mb-5">
                    {/* <Card.Title><h2> <Link href="#graphic_design"> Graphic Designing</Link></h2></Card.Title> */}
                 {/* <Card.Title>
                    <h2 style={{ color: '#50B498', fontFamily: 'Montserrat, sans-serif',  marginBottom: '10px', textAlign: 'center' }}>
                        <Link href="/designprojects">Graphic Design</Link>
                    </h2>
                    </Card.Title> */}
    
                  <Card className="card-hover">
        <Card.Img variant="top" src={gdesigns} className="card-image" />
        <Card.Body className="card-body-hover">
          <Card.Title><h2> <Link href="/designprojects"> Graphic Designing</Link></h2></Card.Title>
          <Card.Text className="card-text-hover">
                              I wield the power of visual storytelling,
                              crafting captivating designs that engage and inspire audiences.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>
  
  );
}

export default Interests;