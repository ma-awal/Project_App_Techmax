import React from 'react';
import Slider from 'react-slick';
import './h-slide.css';
const HomeSlide = ({ data }) => {
  return (
    <section className="  h-slide py-3 py-md-4 py-lg-5">
      <div className="container">
        <div className="row g-3 justify-content-center">
          {data.map((item) => {
            return (
              <div className="col-4 col-md-3 col-lg-2">
                <div className="slide">
                  <img
                    src={item.img}
                    className=" img-fluid object-fit-cover"
                    alt="img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSlide;
