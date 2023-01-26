import React, { useState } from 'react';
import './RegisterForm.css';

const nameTooltipMsg = 'Your name is used to identify you amongst other users. Feel free to use any name you wish!';
const emailTooltipMsg = 'Your email functions as your username to login to Quiz Builder. All communication with Quiz Builder will be sent to your email.';

const passwordTooltipMsg =
`Create a strong password that includes at least the following:
\u2022 8 characters long
\u2022 one uppercase letter
\u2022 one lowercase letter
\u2022 a number
\u2022 a symbol`;

export default function RegisterForm(props) {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');

  const nameChangedHandler = (e) => {
    setName(e.target.value);
  }

  const emailChangedHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordChangedHandler = (e) => {
    setPassword(e.target.value);
  }

  const confirmPasswordChangedHandler = (e) => {
    setConfirmPassword(e.target.value)
  }

  const nameOnBlurHandler = () => {
    // TODO
  }

  const emailOnBlurHandler = () => {
    // TODO
  }

  const passwordOnBlurHandler = () => {
    // TODO
  }

  const confirmPasswordOnBlurHandler = () => {
    // TODO
  }

  const getStateBtn = () => {
    console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  }

  return (
    <div className='registerform_container'>

      <button
        type='button'
        onClick={() => getStateBtn()}
      >
        Get state
      </button>

      <form>
        <h1 className='registerform_title'>Create Your Account!</h1>

        <label htmlFor='name'>Your Name</label>
        <div className='input_container' data-tooltip={nameTooltipMsg}>
          <input
            className='registerform_input'
            onChange={(e) => nameChangedHandler(e)}
            onBlur={() => nameOnBlurHandler()}
            type="text"
            value={name}
            placeholder="Your Name"
            name="name"
            required
          />
          <p className='error_message'></p>
        </div>

        <label htmlFor='email'>Email</label>
        <div className='input_container' data-tooltip={emailTooltipMsg}>
          <input
            className='registerform_input'
            onChange={(e) => emailChangedHandler(e)}
            onBlur={() => emailOnBlurHandler()}
            type="email"
            value={email}
            placeholder="Email"
            name="email"
            required
          />
          <p className='error_message'></p>
        </div>

        <label htmlFor='password'>Password</label>
        <div className='input_container' data-tooltip={passwordTooltipMsg}>
          <input
            className='registerform_input'
            onChange={(e) => passwordChangedHandler(e)}
            onBlur={() => passwordOnBlurHandler()}
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            required
          />
          <p className='error_message'></p>
        </div>

        <label htmlFor='confirm_password'>Confirm Password</label>
        <div>
          <input
            className='registerform_input'
            onChange={(e) => confirmPasswordChangedHandler(e)}
            onBlur={() => confirmPasswordOnBlurHandler()}
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            name="confirm_password"
            required
          />
          <p className='error_message'></p>
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
