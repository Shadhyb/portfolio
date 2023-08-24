import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo_cut.png";
import linkedin3d from "../assets/img/linkedin3d.png";
import github3d from "../assets/img/github3d.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className=" align-items-center">
          <Col sm={12} md={6} />
          <Col sm={12} md={6} className="text-center text-sm-end p-4">
            <div className="social-icon">
              <a href="https://github.com/Shadhyb">
                <img src={github3d} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/pietro-rimoli-982b0459/">
                <img src={linkedin3d} alt="Icon" />
              </a>
            </div>
            <p>Copyright &copy; 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
