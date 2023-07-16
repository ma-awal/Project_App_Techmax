import React from 'react';
import './mission.css';
import mission from '../../assets/about.jpg';
import Progressbar from '../Progressbar/Progressbar';
const AboutMission = () => {
  return (
    <section className="mission my-5 py-2 py-md-4 m py-lg-5">
      <div className="container">
        <div className="row align-items-center    ">
          <div className="col-12 col-lg-6">
            <div className="m-info">
              <h2 className="mb-4">
                <span>Our mission</span> is to make your business better through
                technology.
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Progressbar label={'Web devlopment'} value={60} />
              <Progressbar label={'Web devlopment'} value={80} />
              <Progressbar label={'Web devlopment'} value={90} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="m-image text-center">
              <img src={mission} className="img-fluid shadow-lg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
