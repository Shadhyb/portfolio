import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  let percentage = [90, 90, 85, 80, 60];
  let skills = ["Html", "CSS", "JavaScript", "Angular JS", "React JS"];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Some languages and frameworks that I use the most.
                <span> Drag or swipe this carousel to see them all</span>
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={false}
                draggable
                arrows={false}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="prog-bar">
                    <CircularProgressbar
                      value={percentage[0]}
                      text={`${percentage[0]}%`}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#df4a17",
                        trailColor: "gray",
                        textColor: "#df4a17",
                      })}
                    />
                    <h5>{skills[0]}</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <CircularProgressbar
                      value={percentage[1]}
                      text={`${percentage[1]}%`}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#254add",
                        trailColor: "gray",
                        textColor: "#254add",
                      })}
                    />
                    <h5>{skills[1]}</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <CircularProgressbar
                      value={percentage[2]}
                      text={`${percentage[2]}%`}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#efd81d",
                        trailColor: "gray",
                        textColor: "#efd81d",
                      })}
                    />
                    <h5>{skills[2]}</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <CircularProgressbar
                      value={percentage[3]}
                      text={`${percentage[3]}%`}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#d60030",
                        trailColor: "gray",
                        textColor: "#d60030",
                      })}
                    />
                    <h5>{skills[3]}</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="prog-bar">
                    <CircularProgressbar
                      value={percentage[4]}
                      text={`${percentage[4]}%`}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#5ed4f3",
                        trailColor: "gray",
                        textColor: "#5ed4f3",
                      })}
                    />
                    <h5>{skills[4]}</h5>
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
