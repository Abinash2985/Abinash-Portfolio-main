import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ln608ut', 'template_thp1x0p', form.current, '2tORGJi4qNmFO22TG')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <Container style={{ paddingTop: '100px', paddingBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Row className="justify-content-md-center" style={{ width: '100%' }}>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ marginTop: '30px' }}>
              <h1 className="Project-heading">Contact Us</h1>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="title" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                  Send
                </Button>
              </Form>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;