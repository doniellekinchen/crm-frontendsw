import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {

  return (
    <div className="outer-container">
      <Container className='login-page p-5 bg-white rounded'>
        <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col xs={12} md={8} lg={6}>
            <div className="blue-container p-4">
              <h1 className="text-center mb-4">Reset Password</h1>
              <hr />
              <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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

                <Button type='submit' className="w-100">Reset Password</Button>
               <Row>
            <Col>
            <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
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

ResetPassword.prototypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
   
}