import React from 'react';
import './s-card.css';

import { Link } from 'react-router-dom';
const ServiceCard = ({ data }) => {
  return (
    <section className="s-card py-3 py-md-4 py-lg-5    ">
      <div className="container py-3 py-md-4 py-lg-5 ">
        <div className="row gy-3 gy-lg-4">
          {data.map((item) => {
            const { id, icon, img, title1, title2, title3, info1, info2 } =
              item;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={id}>
                <div className="s-service text-center shadow m-1  py-5 rounded px-4">
                  <span className="rounded-circle mx-auto  mb-3">{icon}</span>
                  <h6>{title1}</h6>
                  <p>{info1.substring(0, 100)}...</p>
                  <Link
                    className="link text-decoration-underline pb-3"
                    to={id}
                    state={{ img, title2, title3, info2, info1 }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
