import React from 'react';
import './Navbar.css';
import { Container, Row ,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";

function Navbar() {
    return (
      <Container>
        <Row>
          <Col><div className="navt"><p>What does 10 years of experience in the most competitive market in the world get you?Confidence.Confidence that thissystem will get you results.In Los Angeles,the only way to stand out is to do something different and shake things up.that's what this program does.It's not just cardio meant to get skinny,nor is just a weight routine.It's a collaboration of various elements of fitness meant to do one thing-get you results!</p>
    </div></Col>
          <Col><div className="formd">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></div>
          </Col>
        </Row>
      </Container>
  );
}

export default Navbar;
