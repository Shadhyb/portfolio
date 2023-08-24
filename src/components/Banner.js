import { useState, useEffect } from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/macbook.png";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Creative", " Front-End Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.round() * 100);
  const time = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(time);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I am Pietro, `} <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>HTML | CSS3 | Javascript | Angular JS | React JS</p>
            <NavLink href="#contact">
              <button onClick={() => "contact"}>
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
            </NavLink>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="headerImg" src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
