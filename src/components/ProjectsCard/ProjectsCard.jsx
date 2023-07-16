import React from 'react';
import { Link } from 'react-router-dom';
import './p-card.css';

const ProjectsCard = ({ data }) => {
  const {
    id,
    img,
    title,
    imageDetails,
    heading,
    para,
    author,
    category,
    date,
    social,
  } = data;

  return (
    <div className="col-12 col-md-6 col-lg-4 gy-4">
      <div className="p-card rounded">
        <img src={img} className="img-fluid" alt="image" />
        <div className="info">
          <h6>{title}</h6>
          <button className="btn rounded-pill">
            <Link
              to={`/projects/${id}`}
              state={{
                img,
                title,
                imageDetails,
                heading,
                para,
                author,
                category,
                date,
                // social: social.map((item) => item.url),
              }}
            >
              View
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
