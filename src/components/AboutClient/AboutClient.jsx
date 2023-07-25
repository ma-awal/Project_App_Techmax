import React from 'react';
import './client.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutClient = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
    centerPadding: '100px',
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="client py-3 py-md-4 py-lg-5 ">
      <div className="container py-3 py-md-4 py-lg-5 ">
        <div className="row ">
          <h2 className="heading     ">Our Clinet Say</h2>
          <Slider className="py-3 py-md-4 py-lg-5" {...settings}>
            {data.map((client) => {
              const { id, rating, img, name, title, comment } = client;
              return (
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
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutClient;
