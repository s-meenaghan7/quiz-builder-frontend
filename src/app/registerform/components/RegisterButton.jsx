import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/RegisterButton.css';

export default function RegisterButton({ loading, disabled }) {
  return (
    loading
      ?
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
      :
      <button
        className='register_btn'
        disabled={disabled}
        title={'Complete all fields to create your account!'}
      >
        Register Account!
      </button>
  );
}
