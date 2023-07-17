import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => {
  return (
    <div className=" d-flex min-vh-100 min-vw-100 justify-content-center align-items-center">
      <Spinner animation="border" style={{ color: '#3e57d0' }} />
    </div>
  );
};

export default Loader;
