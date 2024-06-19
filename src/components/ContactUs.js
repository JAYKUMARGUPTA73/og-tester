import React from 'react';
import { Card, Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import usePageSeo from '../hooks';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4" style={cardStyle}>
        <Card.Body>
          <Row className="justify-content-center mb-4">
            <Col md={6} className="text-center">
              <h2 className="heading-section">Contact Form</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={5} className="bg-primary text-white p-4 d-flex flex-column justify-content-center">
              <h3>Let's get in touch</h3>
              <p>We're open for any suggestion or just to have a chat</p>
              <div>
                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                <p><span>Phone:</span> <a href="tel://1234567920" className="text-white">+ 1235 2355 98</a></p>
                <p><span>Email:</span> <a href="mailto:info@yoursite.com" className="text-white">info@yoursite.com</a></p>
                <p><span>Website:</span> <a href="https://yoursite.com" target="_blank" rel="noopener noreferrer" className="text-white">yoursite.com</a></p>
              </div>
            </Col>
            <Col lg={8} md={7} className="p-4">
              <h3 className="mb-4">Get in touch</h3>
              <div id="form-message-warning" className="mb-4"></div>
              <Alert id="form-message-success" variant="success" className="mb-4">
                Your message was sent, thank you!
              </Alert>
              <Form onSubmit={handleSubmit} id="contactForm" name="contactForm" className="contactForm">
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" name="name" placeholder="Name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Email" required />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" name="subject" placeholder="Subject" required />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" name="message" rows={4} placeholder="Message" required />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Button variant="primary" type="submit">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;