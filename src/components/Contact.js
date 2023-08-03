import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import linkedin3d from "../assets/img/linkedin3d.png";
import github3d from "../assets/img/github3d.png";
import whatsapp from "../assets/img/whatsapp.png";
export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <h2>Get in touch</h2>
          <Col xs={12} md={6} xl={6}>
            <h4>Contact me</h4>
            <p>
              For collaborations or for any other information,
              <span className="contact-span animate__animated animate__bounceIn">
                &nbsp; please contact me!
              </span>
            </p>
            <span>
              <div className="contact-icon">
                <a href="https://github.com/Shadhyb">
                  <img src={github3d} alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/pietro-rimoli-982b0459/">
                  <img src={linkedin3d} alt="linkedin"></img>
                </a>
                <a href="https://wa.me/3896165409">
                  <img src={whatsapp} alt="whatsapp"></img>
                </a>
              </div>
            </span>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={contactImg}></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
