import React from 'react';
import './p-details.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import img from '../../assets/page-title-bg-3.jpg';
import { Link, useLocation } from 'react-router-dom';
import PropCard from '../PropCard/PropCard';

import ProjectsSlide from '../ProjectsSlide/ProjectsSlide';

const ProjectsDetails = () => {
  const location = useLocation();
  const social = location.state.social;
  console.log(social);
  return (
    <section className="p-details">
      <PropCard name={'Projects Details'} link={'Home'} img={img} />
      <div className="container  py-3 py-md-4 py-lg-5 ">
        <ProjectsSlide data={location.state.imageDetails} />
        <div className="p-info mt-3 mt-md-4 mt-5">
          <h4 className="text-black fw-semibold mb-3">
            {location.state.heading}
          </h4>
          <p>{location.state.para}</p>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="s-col">
              <h6 className="text-black">Author</h6>
              <p>{location.state.author}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="s-col">
              <h6 className="text-black">Category</h6>
              <p>{location.state.category}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="s-col">
              <h6 className="text-black">Date</h6>
              <p>{location.state.date}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="s-col">
              <h6 className="text-black">Share</h6>

              <div className="links d-flex gap-1  ">
                <Link>
                  <FaFacebook />
                </Link>

                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
