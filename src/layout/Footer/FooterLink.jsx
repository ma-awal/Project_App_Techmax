import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ FooterData }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-2  ">
        <div className="links single-box ">
          <h6 className="  position-relative">Our Service</h6>
          <ul className="list-group  ">
            {FooterData[0].links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-2  ">
        <div className="links single-box  ">
          <h6 className="  position-relative">Quick Links</h6>
          <ul className="list-group">
            {FooterData[1].links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLink;
