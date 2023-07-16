import React from 'react';
import Slider from 'react-slick';
import './h-slide.css';
const HomeSlide = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <section className="  h-slide">
      <div className="container">
        <div className="row">
          <Slider className="py-3 py-md-4 py-lg-5" {...settings}>
            {data.map((item) => {
              return (
                <div className="slide">
                  <img
                    src={item.img}
                    className=" img-fluid object-fit-cover"
                    alt="img"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeSlide;
