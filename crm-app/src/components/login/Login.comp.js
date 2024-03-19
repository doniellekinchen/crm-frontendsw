import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoginForm = ({handleOnChange, handleOnSubmit, email, pass}) => {

  return (
    <div className="outer-container">
      <Container className='login-page p-5 bg-white rounded'>
        <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col xs={12} md={8} lg={6}>
            <div className="blue-container p-4">
              <h1 className="text-center mb-4">Client Login</h1>
              <hr />
              <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange = {handleOnChange}
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    value={pass}
                    placeholder="Enter Password"
                    // required
                  />
                </Form.Group>
                <hr />
                <Button type='submit' className="w-100">Login</Button>
               <Row>
            <Col>
            <a href="#!" className="forget-password">Forget Password?</a>
            </Col>
        </Row>
        </Form>
            </div>
          </Col>
        </Row>

       
      </Container>
    </div>
  );
};

LoginForm.prototypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}