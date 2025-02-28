import React from 'react';
import './progress.css';
const Progressbar = ({ label, value }) => {
  const progressStyle = {
    width: `${value}%`,
    backgroundColor: `var(--sky1)`,
    height: '15px',
  };

  return (
    <div className="pro-all mb-3">
      <div className="pro-title d-flex justify-content-between align-items-center mb-2">
        <label className=" ">{label}</label>
        <span className=" ">{value}%</span>
      </div>
      <div className="pro-bar">
        <div style={progressStyle}></div>
      </div>
    </div>
  );
};

export default Progressbar;
