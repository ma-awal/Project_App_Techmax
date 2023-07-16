import React from 'react';
import './b-details.css';
import PropCard from '../PropCard/PropCard';
import img from '../../assets/page-title-bg-2.jpg';
const BlogDetails = () => {
  return (
    <section className="b-details">
      <PropCard name={'Blog Details'} link={'Home'} img={img} />
      <div className="container">
        <div className="row  align-items-center ">
          <h1 className="fw-bold display-3 text-center">Comming Soon</h1>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
