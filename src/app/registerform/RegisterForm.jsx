import React from 'react';
import './RegisterForm.css';

export default function RegisterForm(props) {

  return (
    <div className='registerform_container'>
      <form>
        <h1 className='registerform_title'>Create Your Account!</h1>

        <label htmlFor='name'>Your Name</label>
        <div className='input_container' data-tooltip="tooltip message goes here">
          <input
            className='registerform_input'
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />
        </div>

        <label htmlFor='email'>Email</label>
        <div className='input_container' data-tooltip="tooltip message goes here">
          <input
            className='registerform_input'
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <label htmlFor='password'>Password</label>
        <div className='input_container' data-tooltip="tooltip message goes here">
          <input
            className='registerform_input'
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <label htmlFor='confirm_password'>Confirm Password</label>
        <div>
          <input
            className='registerform_input'
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            required
          />
        </div>

        <button
          type='button'
          className='register_btn'
        >
          CREATE ACCOUNT
        </button>

      </form>
    </div>
  );
}
