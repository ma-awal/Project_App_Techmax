import React from 'react';

const AboutTrust = ({ data }) => {
  return (
    <section className="trust  pb-3 pb-md-4  my-5 ">
      <div className="container">
        <h2 className="heading mb-5">Our Trusted Partner </h2>
        <div className=" row gy-3 row-cols-2 row-cols-md-3 row-cols-lg-5">
          {data.map((items, index) => {
            return (
              <div className="" key={index}>
                <img src={items.img} className="img-fluid border  " alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
