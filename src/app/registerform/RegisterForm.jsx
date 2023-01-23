import React from 'react';
import './RegisterForm.css';

export default function RegisterForm(props) {

  const nameTooltipMsg = 'Your name is used to identify you amongst other users. Feel free to use any name you wish!';
  const emailTooltipMsg = 'Your email functions as your username to login to Quiz Builder. All communication with Quiz Builder will be sent to your email.';

  const passwordTooltipMsg =
  `Create a strong password that includes at least the following:
  \u2022 8 characters long
  \u2022 one uppercase letter
  \u2022 one lowercase letter
  \u2022 a number
  \u2022 a symbol`;

  return (
    <div className='registerform_container'>
      <form>
        <h1 className='registerform_title'>Create Your Account!</h1>

        <label htmlFor='name'>Your Name</label>
        <div className='input_container' data-tooltip={nameTooltipMsg}>
          <input
            className='registerform_input'
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>

        <label htmlFor='email'>Email</label>
        <div className='input_container' data-tooltip={emailTooltipMsg}>
          <input
            className='registerform_input'
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <label htmlFor='password'>Password</label>
        <div className='input_container' data-tooltip={passwordTooltipMsg}>
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
