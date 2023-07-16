import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './s-details.css';
import PropCard from '../PropCard/PropCard';
import img from '../../assets/page-title-bg-2.jpg';
const ServiceDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <section className="s-details py-2 py-lg-4 ">
      <PropCard name={'Service Details'} link={'Home'} img={img} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="details" key={id}>
              <img
                className="img-fluid mb-5"
                src={location.state.img}
                alt="img"
              />
              <div className="d-box mb-5">
                <h4>{location.state.title2}</h4>
                <p>{location.state.info1}</p>
              </div>
              <div className="d-box">
                <h4>{location.state.title3}</h4>
                <p>{location.state.info2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
