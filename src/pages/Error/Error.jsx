import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <section className="Error">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="box text-center">
            <h1 className="fw-bold display-2 mb-3">Comming Soon ..</h1>
            <div className="btns">
              <button className="btn rounded-0 mt-3 ">
                <Link to="/"> Go To Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
