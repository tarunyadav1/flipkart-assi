import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { Container, Row ,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
function App() {
  return (
    <div>
    <Container className="countr">
      <Row>
        <Col xs="4" md="3"><div className="emoj"><Image src="emoji.svg" roundedCircle /></div></Col>
        <Col xs="8" md="5"><div className="appte"><b>Welcome to AgriSense Project</b> </div></Col>
        <Col><div className="button"><Button variant="primary" type="submit">signin</Button>   <Button variant="primary" type="submit">signout</Button></div></Col>
      </Row>
    </Container>
  
  
     <Navbar />
     </div>
    
  );
}

export default App;
