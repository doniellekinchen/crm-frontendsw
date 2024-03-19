import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = () => {
  return (
    <div className="outer-container">
      <Container className='login-page p-5 bg-white rounded'>
        <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col xs={12} md={8} lg={6}>
            <div className="blue-container p-4">
              <h1 className="text-center mb-4">Client Login</h1>
              <Form>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                </Form.Group>
                <hr />
                <Button type='submit' className="w-100">Login</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
