import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const EMAIL_REGEX = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#&!]).{8,100}$/;
const nameTooltipMsg = 'Your name is used to identify you amongst other users. Feel free to use any name you wish!';
const emailTooltipMsg = 'Your email address will be used to login to Quiz Builder and validate your account creation.  Any news from Quiz Builder will also be sent to your email.';

export default function RegisterForm(props) {
  const nameRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [passwordTooltipMessage, setPasswordTooltipMessage] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(name.trim().length > 0);
  }, [name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd, matchPwd]);

  // change passwordTooltipMessage based on password
  useEffect(() => {
    let newPasswordTooltipMessage = "Create a strong password that includes at least the following:"

    if (pwd.length < 8) {
      newPasswordTooltipMessage += '\n\u2022 8 characters long';
    }

    if (!pwd.match(/[A-Z]/)) {
      newPasswordTooltipMessage += '\n\u2022 one uppercase letter';
    }

    if (!pwd.match(/[a-z]+/)) {
      newPasswordTooltipMessage += '\n\u2022 one lowercase letter';
    }

    if (!pwd.match(/[0-9]/)) {
      newPasswordTooltipMessage += '\n\u2022 a number';
    }

    if (!pwd.match(/[$@#&!]+/)) {
      newPasswordTooltipMessage += '\n\u2022 a symbol: $@#&!';
    }

    if (newPasswordTooltipMessage === "Create a strong password that includes at least the following:") {
      newPasswordTooltipMessage = 'Great, your password meets the minimum complexity criteria!'
    }

    setPasswordTooltipMessage(newPasswordTooltipMessage);

  }, [pwd]);

  // probably getting rid of the onBlur handlers as well!
// validateForm was here

  const nameOnBlurHandler = () => {
    const nameError = document.getElementById('name_error_text');
    const nameInput = document.getElementById('name_input');

    if (validName) {
      nameError.innerHTML = '';
      nameInput.classList.remove('input_error');
    } else {
      nameError.innerHTML = 'Please provide a name';
      nameInput.classList.add('input_error');
    }
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

    // validateForm();
  }

  const passwordOnBlurHandler = () => {
    const passwordError = document.getElementById('password_error_text');
    const passwordInput = document.getElementById('password_input');

    if (
      pwd.length >= 8 &&
      pwd.match(/[a-z]+/) &&
      pwd.match(/[A-Z]+/) &&
      pwd.match(/[0-9]+/) &&
      pwd.match(/[$@#&!]+/)
    ) {
      passwordError.innerHTML = '';
      passwordInput.classList.remove('input_error');
    }
    else {
      passwordError.innerHTML = 'Invalid / weak password';
      passwordInput.classList.add('input_error');
    }

    confirmPasswordOnBlurHandler();
  }

  const confirmPasswordOnBlurHandler = () => {
    const confirmPassError = document.getElementById('confirm_password_error_text');
    const confirmPassInput = document.getElementById('confirm_password_input');

    if (pwd === matchPwd && confirmPassInput.value !== '') {
      confirmPassError.innerHTML = '';
      confirmPassInput.classList.remove('input_error');
    } else {
      if (pwd !== matchPwd) {
        confirmPassError.innerHTML = 'Passwords do not match';
      }

      confirmPassInput.classList.add('input_error');
    }

    // validateForm();
  }

  const createAccount = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(
      {
        name: name,
        email: email,
        password: pwd
      },
      null, 2)
    );

    // call register API, and send user to page/component advising that they check their email for the validation link to confirm their account
  }

  return (
    <section className='registerform_container'>
      <h1 className='registerform_title'>Create Your Account!</h1>

      <form>
        <label htmlFor='full_name'>Your Name</label>
        <div className='input_container' data-tooltip={nameTooltipMsg}>
          <input
            id='name_input'
            className='registerform_input'
            onChange={(e) => setName(e.target.value)}
            onBlur={() => nameOnBlurHandler()}
            autoComplete='off'
            aria-invalid={validName ? "false" : "true"}
            type="text"
            value={name}
            placeholder="Your Name"
            name="full_name"
            ref={nameRef}
            required
          />
          <p className='error_message' id='name_error_text'></p>
        </div>

        <label htmlFor='email'>Email</label>
        <div className='input_container' data-tooltip={emailTooltipMsg}>
          <input
            id='email_input'
            className='registerform_input'
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => emailOnBlurHandler()}
            autoComplete='off'
            aria-invalid={validEmail ? "false" : "true"}
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
            onChange={(e) => setPwd(e.target.value)}
            onBlur={() => passwordOnBlurHandler()}
            type="password"
            value={pwd}
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
            onChange={(e) => setMatchPwd(e.target.value)}
            onBlur={() => confirmPasswordOnBlurHandler()}
            type="password"
            value={matchPwd}
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
    </section>
  );
}
