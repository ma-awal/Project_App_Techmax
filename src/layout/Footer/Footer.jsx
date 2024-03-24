import React from 'react';
import './footer.css';
import FooterLink from './FooterLink';
import FooterData from '../../data/FooterData';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row justify-content-between gy-3 gy-md-4 gy-lg-0">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="single-box">
              <h6 className=" position-relative">About us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
              <div className="social-links   ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <FooterLink FooterData={FooterData} />
          <div className="col-12 col-md-6 col-lg-3">
            <div className=" links single-box">
              <h6 className=" position-relative">Contact Information</h6>
              <p>
                <strong>Phone: </strong>+000 313 577 111
              </p>
              <p>
                <strong>Email: </strong>demo@example.com
              </p>
              <p>
                <strong>Address: </strong>4035 Heavens, Los Angeles, California
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
