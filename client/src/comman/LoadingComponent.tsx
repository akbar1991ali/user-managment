import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingComponent=() => {
  return (
    <div className="loading">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingComponent;
