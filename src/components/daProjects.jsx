import React from 'react';
import mobilesda from '../media/dashboardFlipkartMobiles.jpg';

// Bootstrap
import { Row,Col, Container } from 'react-bootstrap';
function Daprojects() {
  return (
      <div style={{backgroundColor:'#FFF8F3'}}>
          <Container>
               <h2 style={{ color: '#50B498', fontFamily: 'Montserrat, sans-serif', marginBottom: '10px', textAlign: 'center',padding:'20px' }}>
                  Data Analytics Projects
              </h2>
          </Container>
          <hr />
        <Row className="fluid align-items-center" >
  <Col xs={12} md={6} className="p-1">
    <div className="bg-image hover-overlay">
      <img
        src={mobilesda}
        className="w-100 shadow-1-strong rounded mb-4 img-fluid"
        alt="Flipkart Smart Phone Brands Analysis"
      />
    </div>
  </Col>
  <Col xs={12} md={6} className="p-4 p-md-5" style={{ textAlign: 'left', fontSize: '1.5rem' }}>
    <h2 className="mb-4">Visualizations Created For the Flipkart Mobile Phones Dataset</h2>
    <p>Dataset Source: Kaggle</p>
    <h3 className="mb-3">Visualizations Created:</h3>
    <ul>
      <li>Cards to Represent: 📋</li>
      <li>Total Entries: 847</li>
      <li>Number of Brands: 27</li>
      <li>Minimum Price: Rs. 5,000</li>
      <li>Maximum Price: Rs. 179,900</li>
      <li>Difference between Actual Price and Selling Price: Rs. 2,900</li>
    </ul>
    <h3 className="mb-3">Stacked Column Charts: 📊</h3>
    <ul>
      <li>Number of Models by Brand</li>
      <li>Models by Price Range</li>
      <li>Total Models by ROM Specifications (Grouped by RAM Specifications)</li>
    </ul>
    <h3 className="mb-3">Pie Chart:</h3>
                  <p>Model Availability</p>
                  
              </Col>
              <hr />
</Row>
    </div>
  );
}

export default Daprojects;