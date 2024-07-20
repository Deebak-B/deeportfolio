import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// CSS
// import './designProjects.css';
// images
import guzzi from '../media/guccisPizza.png';
import noir from '../media/NoirPerfumes.png';
import test from '../media/pngTest3.png';
import realEstate from '../media/realEstateLogo.png';
import balajiConstructions from '../media/constructionLogoFinal.png';

export default function App() {
  return (
    <Container style={{ padding: '10px' }}>
                     <h2 style={{ color: '#50B498', fontFamily: 'Montserrat, sans-serif', marginBottom: '10px', textAlign: 'center',padding:'15px' }}>
                  Graphic Design Projects
              </h2>
      <MDBRow>
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="hover-effect">
            <Image 
              src={guzzi}
              className="w-100 shadow-1-strong rounded mb-4 p-1"
              alt="Gucci's Pizza Logo"
              rounded
            />
          </div>

          <div className="hover-effect">
            <img
              src={realEstate}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Real Estate Logo"
            />
          </div>
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <div className="hover-effect">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
          </div>

          <div style={{padding:'10px'}}>
            <img
              src={balajiConstructions}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <div className="hover-effect">
            <img
              src={noir}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Noir Perfumes"
            />
          </div>

          <div className="hover-effect">
            <img
              src={test}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </MDBCol>
      </MDBRow>
    </Container>
  );
}