import React from 'react';
import './h-card.css';
import { Link } from 'react-router-dom';
const HomeCard = () => {
  return (
    <section className="h-card py-3 py-md-4 py-lg-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="box text-center">
              <h2 className="text-white mb-4">Have a project in mind?</h2>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud consectetur
              </p>
              <button className="  btn px-4  rounded-pill">
                <Link className="text-white" to="/contact">
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
