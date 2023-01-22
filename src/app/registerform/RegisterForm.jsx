import React from 'react';
import './RegisterForm.css';

export default function RegisterForm(props) {

  return (
    <div className='registerform_container'>
      <form>
        <h1 className='registerform_title'>Create Your Account!</h1>

        <label htmlFor='name'>Your Name</label>
        <input
          className='registerform_input'
          type="text"
          placeholder="Full Name"
          name="name"
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          className='registerform_input'
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          className='registerform_input'
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <label htmlFor='confirm_password'>Confirm Password</label>
        <input
          className='registerform_input'
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          required
        />

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
