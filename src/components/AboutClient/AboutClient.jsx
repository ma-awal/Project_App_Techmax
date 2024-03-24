import React from 'react';
import './client.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutClient = ({ data }) => {
  return (
    <section className="client py-3 py-md-4 py-lg-5 ">
      <div className="container py-3 py-md-4 py-lg-5 ">
        <h2 className="heading      ">Our Clinet Say</h2>
        <div className="row g-3 ">
          {data.map((client) => {
            const { id, rating, img, name, title, comment } = client;
            return (
              <div className="col-12 col-md-6 col-lg-4">
                <div className="single-client text-center" key={id}>
                  <span className="mb-3">{rating}</span>
                  <p className="py-3">
                    <i>{comment}</i>
                  </p>
                  <img
                    src={img}
                    className="rounded-circle mb-3 mx-auto img-fluid"
                    alt="img"
                  />
                  <h6>{name}</h6>
                  <p>{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutClient;
