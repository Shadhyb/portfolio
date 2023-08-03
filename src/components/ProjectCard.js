import { Col } from "react-bootstrap";
import { Projects } from "./Projects";
export const ProjectCard = ({
  title,
  language1,
  language2,
  language3,
  imgUrl,
  link,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>
            {language1} {language2} {language3}
          </p>
          <button
            className="btn-page"
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            Go to page
          </button>
        </div>
      </div>
    </Col>
  );
};
