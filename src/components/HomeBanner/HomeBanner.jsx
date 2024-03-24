import React from 'react';
import './banner.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/home-font.png';
const HomeBanner = () => {
  return (
    <section className="banner py-3 py-md-4 py-lg-5       ">
      <div className="container   ">
        <div className="row gy-4 gap-2 align-items-center justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="b-info">
              <h2 className="mb-3">
                Encourage innovation with trusted Technology Solutions
              </h2>
              <p className="mb-2 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua,
                magna aliqua. ipsum is simply dummy text of the printing.
              </p>

              <div className="b-btns mt d-flex gap-2 mt-4">
                <Link
                  className="btn-link btn btn-lg rounded-pill shadow"
                  to="/Read"
                >
                  Learn more
                </Link>
                <Link className="btn-link rounded-pill btn btn-lg" to="/Read">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="b-img">
              <img src={banner} className="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
