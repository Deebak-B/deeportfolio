import React from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailsPersonal from './components/personalDetails';


// component imports


import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Quote from "./components/Quote";
import ContactDetails from "./components/contactLast";
import Header from './components/header';
// body
function Body() {
  return (
    <div >
      <Header/>,
      <Profile />,
      <Interests />,
      <Quote />,
      <ContactDetails />
      </div>
  );
}

export default Body;