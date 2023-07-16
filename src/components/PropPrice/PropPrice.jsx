import React from 'react';
import './prop-price.css';
import { FaCheck } from 'react-icons/fa';
const PropPrice = ({ data }) => {
  const { heading, price, list } = data;
  return (
    <div className="prop-price shadow px-5 py-3  rounded-3 ">
      <div className="p-info text-center ">
        <h5 className="text-black fw-semibold">{heading}</h5>

        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          $ <h1 className="display-6 fw-semibold">{price}</h1> /month
        </div>
      </div>
      <button className="rounded-pill btn btn-lg  ">Get Started</button>
      <ul className=" list-unstyled  ">
        {list.map((item, index) => {
          return (
            <li key={index}>
              <span className="p-1 mx-2 rounded-circle  ">
                <FaCheck className=" " />
              </span>
              {item.li}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PropPrice;
