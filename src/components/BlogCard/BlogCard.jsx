import React from 'react';
import './b-card.css';
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
const BlogCard = ({ BlogData, logic }) => {
  return (
    <section className="b-card py-3 py-md-4 py-lg-5   ">
      <div className="container  py-3 py-md-4 py-lg-5 ">
        {logic ? (
          <h2 className="text-center mb-3 mb-md-4 mb-lg-5">
            Recent Blog & Article
          </h2>
        ) : (
          ''
        )}
        <div className="row gy-4 gy-lg-5">
          {BlogData.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="single-blog shadow text-center rounded  ">
                  <img
                    src={item.img}
                    className="img-fluid mb-3 rounded-top"
                    alt="img"
                  />
                  <div className="info px-3">
                    <div className="icon d-flex align-items-base justify-content-center gap-2 mb-3">
                      <span className="">
                        <BiSolidUser className="me-1" />
                        {item.author}
                      </span>
                      <span>
                        <MdOutlineDateRange className="me-1" />
                        {item.date}
                      </span>
                    </div>
                    <h6>{item.heading}</h6>
                    <p className="">{item.para.slice(0, 90)}</p>
                    <button className="btn rounded-0 mb-4 px-3">
                      <Link to="/">Continue Reading</Link>
                    </button>
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

export default BlogCard;
