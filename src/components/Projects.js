import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import calcImg from "../assets/img/calc.jpeg";
import courseImg from "../assets/img/corso.jpeg";
import snakeImg from "../assets/img/snake.png";
import legalImg from "../assets/img/legal.png";
import backImg from "../assets/img/backroads.jpeg";
import vale from "../assets/img/vale.png";
import comingImg from "../assets/img/coming.png";
import { ProjectCard } from "./ProjectCard";
// import { ArrowRight } from "react-bootstrap-icons";

export const Projects = () => {
  const projects = [
    {
      title: "Calculator",
      language1: "HTML",
      language2: "CSS",
      language3: "JavaScript",
      imgUrl: calcImg,
      imgAlt: "calculator",
      link: "https://shadhyb.github.io/calculator-page/",
    },
    {
      title: "Web Developer Course",
      language1: "HTML",
      language2: "CSS",
      imgUrl: courseImg,
      imgAlt: "course",
      link: "https://shadhyb.github.io/corso-page/",
    },
    {
      title: "Snake Game",
      language1: "HTML",
      language2: "CSS",
      language3: "JavaScript",
      imgUrl: snakeImg,
      imgAlt: "snake",
      link: "https://shadhyb.github.io/snakegame/",
    },
    {
      title: "Legal Studio Web Page",
      language1: "HTML",
      language2: "CSS",
      imgUrl: legalImg,
      imgAlt: "legal",
      link: "https://shadhyb.github.io/legalstudio/",
    },
    {
      title: "Backroad React App",
      language1: "React",
      language2: "",
      imgUrl: backImg,
      imgAlt: "back",
      link: "https://backroads-shadhyb.netlify.app/",
    },
    {
      title: "Valentinacorni.it",
      language1: "HTML",
      language2: "SCSS",
      language3: "JavaScript",

      imgUrl: vale,
      imgAlt: "valentinacorni.it",
      link: "https://valentinacorni.it",
    },
    {
      title: "Coming Soon",
      language1: "",
      language2: "",
      imgUrl: comingImg,
      imgAlt: "coming",
      link: "https://github.com/Shadhyb",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Progetti</h2>
                  <p>
                    Alcuni dei progetti ai quali ho lavorato. Clicca su un
                    progetto per vederlo. Trovi le repository sul mio profilo
                    &nbsp;
                    <a href={projects[6].link}>Github</a>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Progetti semplici</Nav.Link>
                      </Nav.Item>{" "}
                      <Nav.Item>
                        <Nav.Link className="secondTab" eventKey="second">
                          Progetti professionali
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard key={projects[0]} {...projects[0]} />
                          <ProjectCard key={projects[1]} {...projects[1]} />
                          <ProjectCard key={projects[2]} {...projects[2]} />
                        </Row>
                        <Row>
                          <ProjectCard key={projects[3]} {...projects[3]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard key={projects[4]} {...projects[4]} />
                          {/* <ProjectCard key={projects[5]} {...projects[5]} /> */}
                          <ProjectCard key={projects[6]} {...projects[6]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
