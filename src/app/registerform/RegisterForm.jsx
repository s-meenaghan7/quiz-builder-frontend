import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const nameTooltipMsg = 'Your name is used to identify you amongst other users. Feel free to use any name you wish!';
const emailTooltipMsg = 'Your email address will be used to login to Quiz Builder and validate your account creation.  Any news from Quiz Builder will also be sent to your email.';

export default function RegisterForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordTooltipMessage, setPasswordTooltipMessage] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // change passwordTooltipMessage based on password
  useEffect(() => {
    let newPasswordTooltipMessage = "Create a strong password that includes at least the following:"

    if (password.length < 8) {
      newPasswordTooltipMessage += '\n\u2022 8 characters long';
    }

    if (!password.match(/[A-Z]/)) {
      newPasswordTooltipMessage += '\n\u2022 one uppercase letter';
    }

    if (!password.match(/[a-z]+/)) {
      newPasswordTooltipMessage += '\n\u2022 one lowercase letter';
    }

    if (!password.match(/[0-9]/)) {
      newPasswordTooltipMessage += '\n\u2022 a number';
    }

    if (!password.match(/[$@#&!]+/)) {
      newPasswordTooltipMessage += '\n\u2022 a symbol: $@#&!';
    }

    if (newPasswordTooltipMessage === "Create a strong password that includes at least the following:") {
      newPasswordTooltipMessage = 'Great, your password meets the minimum complexity criteria!'
    }

    setPasswordTooltipMessage(newPasswordTooltipMessage);

  }, [password]);

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

  const validateForm = () => {
    const inputs = document.getElementsByClassName('registerform_input');

    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      document.getElementsByClassName('input_error').length === 0
    ) {
      for (let i = 0; i < inputs.length; ++i) {
        inputs[i].classList.add('validated');
      }
      setFormIsValid(true);
    }
    else {
      for (let i = 0; i < inputs.length; ++i) {
        inputs[i].classList.remove('validated');
      }
      setFormIsValid(false);
    }
  }

  const nameOnBlurHandler = () => {
    const nameError = document.getElementById('name_error_text');
    const nameInput = document.getElementById('name_input');

    if (name.trim() === '') {
      nameError.innerHTML = 'Please provide a name';
      nameInput.classList.add('input_error');
    } else {
      nameError.innerHTML = '';
      nameInput.classList.remove('input_error');
    }

    validateForm();
  }

  const emailOnBlurHandler = () => {
    const emailError = document.getElementById('email_error_text');
    const emailInput = document.getElementById('email_input');

    if ((email.includes('@') && email.includes('.')) && (email.indexOf('.') - email.indexOf('@') > 1)) {
      emailError.innerHTML = '';
      emailInput.classList.remove('input_error');
    } else {
      emailError.innerHTML = 'Please provide a valid email address';
      emailInput.classList.add('input_error');
    }

    validateForm();
  }

  const passwordOnBlurHandler = () => {
    const passwordError = document.getElementById('password_error_text');
    const passwordInput = document.getElementById('password_input');

    if (
      password.length >= 8 &&
      password.match(/[a-z]+/) &&
      password.match(/[A-Z]+/) &&
      password.match(/[0-9]+/) &&
      password.match(/[$@#&!]+/)
    ) {
      passwordError.innerHTML = '';
      passwordInput.classList.remove('input_error');
    }
    else {
      passwordError.innerHTML = 'Invalid / weak password';
      passwordInput.classList.add('input_error');
    }

    confirmPasswordOnBlurHandler();
    validateForm();
  }

  const confirmPasswordOnBlurHandler = () => {
    const confirmPassError = document.getElementById('confirm_password_error_text');
    const confirmPassInput = document.getElementById('confirm_password_input');

    if (password === confirmPassword && confirmPassInput.value !== '') {
      confirmPassError.innerHTML = '';
      confirmPassInput.classList.remove('input_error');
    } else {
      if (password !== confirmPassword) {
        confirmPassError.innerHTML = 'Passwords do not match';
      }

      confirmPassInput.classList.add('input_error');
    }

    validateForm();
  }

  const createAccount = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(
      {
        name: name,
        email: email,
        password: password
      },
      null, 2)
    );
  }

  return (
    <div className='registerform_container'>
      <form>
        <h1 className='registerform_title'>Create Your Account!</h1>

        <label htmlFor='full_name'>Your Name</label>
        <div className='input_container' data-tooltip={nameTooltipMsg}>
          <input
            id='name_input'
            className='registerform_input'
            onChange={(e) => nameChangedHandler(e)}
            onBlur={() => nameOnBlurHandler()}
            type="text"
            value={name}
            placeholder="Your Name"
            name="full_name"
            required
          />
          <p className='error_message' id='name_error_text'></p>
        </div>

        <label htmlFor='email'>Email</label>
        <div className='input_container' data-tooltip={emailTooltipMsg}>
          <input
            id='email_input'
            className='registerform_input'
            onChange={(e) => emailChangedHandler(e)}
            onBlur={() => emailOnBlurHandler()}
            type="email"
            value={email}
            placeholder="Email"
            name="email"
            required
          />
          <p className='error_message' id='email_error_text'></p>
        </div>

        <label htmlFor='password'>Password</label>
        <div className='input_container' data-tooltip={passwordTooltipMessage}>
          <input
            id='password_input'
            className='registerform_input'
            onChange={(e) => passwordChangedHandler(e)}
            onBlur={() => passwordOnBlurHandler()}
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            required
          />
          <p className='error_message' id='password_error_text'></p>
        </div>

        <label htmlFor='confirm_password'>Confirm Password</label>
        <div>
          <input
            id='confirm_password_input'
            className='registerform_input'
            onChange={(e) => confirmPasswordChangedHandler(e)}
            onBlur={() => confirmPasswordOnBlurHandler()}
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            name="confirm_password"
            required
          />
          <p className='error_message' id='confirm_password_error_text'></p>
        </div>

        <button
          type='submit'
          className='register_btn'
          onClick={(e) => createAccount(e)}
          disabled={!formIsValid}
          title={'Complete all fields to create your account!'}
        >
          CREATE ACCOUNT
        </button>

        <div className='links_container'>
          <Link
            to='/login'
            title='Click here to login with your account!'
          >
            Already have an account? Login here!
          </Link>
        </div>

      </form>
    </div>
  );
}
