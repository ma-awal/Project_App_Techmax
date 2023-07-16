import React from 'react';

import './p-comming.css';
import CountTime from '../../../components/CountTime/CountTime';

const PageComming = () => {
  return (
    <section className="p-comming">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="box mb-3 text-center">
              <h1 className="text-white mb-3 fw-semibold">
                Our website is Coming Soon
              </h1>
              <p className="text-white mb-3">
                Before we jump into our list of coming soon page examples, let’s
                take a quick look at why you should create one of these for your
                own website launch.
              </p>
              <div className="box-input  d-flex justify-content-between align-items-center">
                <input type="email" placeholder="Enter your email" id="email" />
                <button type="submit btn  ">Submit</button>
              </div>
              <CountTime />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageComming;
