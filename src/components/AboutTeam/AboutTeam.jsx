import React from 'react';
import './team.css';
// import TeamData from '../../data/TeamData';
import { Link } from 'react-router-dom';
const Team = ({ data }) => {
  return (
    <section className="team  my-3 my-md-4 my-lg-5">
      <div className="container">
        <h2 className="heading mb-5">Expert Team Member</h2>
        <div className="row">
          {data.map((perosn) => {
            const { id, name, title, img, links } = perosn;
            return (
              <div className="col-12 col-md-6 col-lg-3" key={id}>
                <div className="box">
                  <div className="single-person">
                    <img src={img} className="img-fluid" alt="img" />

                    <div className="social-icons">
                      {links.map((link, index) => {
                        return (
                          <Link className="link" key={index} to={link.url}>
                            {link.icon}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="info text-center mt-2">
                    <h6>{name}</h6>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
