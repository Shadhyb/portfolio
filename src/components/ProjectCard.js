import { Col } from "react-bootstrap";
export const ProjectCard = ({
  title,
  language1,
  language2,
  language3,
  language4,
  imgUrl,
  imgAlt,
  link,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={imgAlt} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>
            {language1} {language2} {language3} {language4}
          </p>
          <button
            className="btn-page"
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            Visita
          </button>
        </div>
      </div>
    </Col>
  );
};
