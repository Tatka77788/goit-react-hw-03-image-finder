import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ReactLoader from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ReactLoader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};
export default Loader;
