import React from 'react';
import './star.css';
import { AiFillStar } from 'react-icons/ai';
const RatingStar = () => {
  return (
    <div className="d-flex justify-content-center gap-2 text-warning">
      <span>
        <AiFillStar />
      </span>
      <span>
        <AiFillStar />
      </span>
      <span>
        <AiFillStar />
      </span>
      <span>
        <AiFillStar />
      </span>
      <span>
        <AiFillStar />
      </span>
    </div>
  );
};

export default RatingStar;
