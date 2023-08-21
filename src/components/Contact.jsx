import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col } from "react-bootstrap";

import "animate.css";

export const Contact = () => {
  useEffect(() => emailjs.init("XilvwiYQ7kF5fGrxF"), []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r46yhbe",
        "contact_form",
        form.current,
        "XilvwiYQ7kF5fGrxF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <h2>Get in touch</h2>
          <Col xs={12} md={8} xl={8}>
            <h4>contact me</h4>
            <p>
              For collaborations or for any other information,
              <span className="contact-span animate__animated animate__bounceIn">
                &nbsp; please contact me!
              </span>
            </p>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="">First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue=""
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="">Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue=""
                  name="surname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="user_email"
                />
                <Form.Text className="text-info">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel htmlFor="" label="Message">
                  <Form.Control
                    as="textarea"
                    name="message"
                    style={{
                      height: "100px",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Button variant="info" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
