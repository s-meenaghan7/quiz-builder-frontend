import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/LoadingSpinner.css';

function LoadingSpinner({ loading }) {
  return (
    <div className='spinner_container'>
      <ClipLoader
        color={'#0f0'}
        loading={loading}
        cssOverride={{}}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSpinner;
