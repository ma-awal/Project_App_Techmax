import React from 'react';
import './card.css';

const PropCard = (props) => {
  const { name, img } = props;

  const sectionStyle = {
    background: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="All" style={sectionStyle}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="box   ">
              <h1 className=" text-center">{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropCard;
