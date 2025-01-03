import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import linkedin3d from "../assets/img/linkedin3d.png";
import github3d from "../assets/img/github3d.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className={scrolled ? "scrolled" : ""}
    >
      <Container className="align-items-baseline">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse className="align-items-end" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Progetti
            </Nav.Link>
          </Nav>
          <span className="navbar-text d-sm-none d-md-block d-lg-flex flex-row">
            <div className="social-icon d-lg-flex flex-row">
              <a
                href="https://github.com/Shadhyb"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github3d} alt="github"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/pietro-rimoli/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin3d} alt="linkedin"></img>
              </a>
            </div>
            <Nav.Link href="#contact">
              <button
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                <span>Contattami</span>
              </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
