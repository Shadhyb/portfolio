import { ProgressBar } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const now = [80, 60, 70, 60, 30];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Some languages and frameworks that I use the most</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={true}
                draggable
                renderArrowsWhenDisabled={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="prog-bar">
                    <ProgressBar
                      animated
                      variant="success"
                      now={80}
                      label={`${now[0]}%`}
                    />
                    <h5>HTML</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <ProgressBar
                      animated
                      variant="primary"
                      now={60}
                      label={`${now[1]}%`}
                    />
                    <h5>CSS3</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <ProgressBar
                      animated
                      variant="warning"
                      now={70}
                      label={`${now[2]}%`}
                    />
                    <h5>Javascript</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <ProgressBar
                      animated
                      variant="danger"
                      now={60}
                      label={`${now[3]}%`}
                    />
                    <h5>Angular</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <ProgressBar
                      animated
                      variant="info"
                      now={30}
                      label={`${now[4]}%`}
                    />
                    <h5>React</h5>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
