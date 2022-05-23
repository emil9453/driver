import { Banner, SignUpForm } from 'components';
import { cities, phonePrefixes } from 'components/SignUpForm/mock';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles/Registration.module.css';

export const Registration = () => {

  return (
    <Container>
      <Row className={`${styles.wrapper} pt-2 pt-lg-5 mt-3 mt-md-0 mb-3 mb-md-0`}>
        <Col sm={12} md={5} className='text-light'>
          <Banner />
        </Col>
        <Col sm={12} md={5} className={`${styles.formContainer} mr-2 ml-2 mr-md-0 ml-md-auto bg-light pt-4 pb-4 mt-3 offset-md-2`}>
          <SignUpForm cities={cities} phonePrefixes={phonePrefixes}/>
        </Col>
      </Row>
    </Container>
  );
};
