import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#405D72', color: '#FFFFFF' }}>
  <Container>
    <Navbar.Brand href="/home" style={{ fontSize: '2.5rem', color: '#FFFFFF', fontFamily: 'Satisfy, cursive', fontWeight: 'normal' }}>
      Deebak
    </Navbar.Brand>

    <Nav className="ms-auto">
      <Nav.Link href="/home" style={{ fontSize: '1.2rem', color: '#FFFFFF', float: 'right' }}>
        Home
      </Nav.Link>
      <Nav.Link href="/about" style={{ fontSize: '1.2rem', color: '#FFFFFF', float: 'right' }}>
        About
      </Nav.Link>
      <Nav.Link href="/portfolio" style={{ fontSize: '1.2rem', color: '#FFFFFF', float: 'right' }}>
        Portfolio
      </Nav.Link>

      {/* mail to */}
      <Nav.Link href="mailto:deebak2703@gmail.com?subject=Inquiry&body=Hello,%0A%0AI would like to discuss..." style={{ fontSize: '1.2rem', color: '#FFFFFF', textDecoration: 'none', float: 'right' }}>
        Contact
      </Nav.Link>
    </Nav>
  </Container>
</Navbar>
    </div>
  );
}

export default Header;