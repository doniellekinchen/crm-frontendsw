import React from 'react'

import './Entry.style.css';
// import { Container, Row, Col } from 'react-bootstrap'
import { LoginForm } from '../../components/login/Login.comp'

export const Entry = () => {
  return (
    <div className="entry-page bg-info">
           <LoginForm />
    </div>
      
  )
}



