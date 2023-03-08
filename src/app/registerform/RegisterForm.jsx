import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const nameTooltipMsg = 'Your name is used to identify you amongst other users. Feel free to use any name you wish!';
const emailTooltipMsg = 'Your email address will be used to login to QuizMe and validate your account creation.  Any news from QuizMe will also be sent to your email.';

export default function RegisterForm() {
  const nameInput = useRef();
  const emailInput = useRef();
  const pwdInput = useRef();
  const matchInput = useRef();

  const [errMsg, setErrMsg] = useState('');
  const [passwordTooltipMessage, setPasswordTooltipMessage] = useState();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  useEffect(() => {
    const nameIsValid = name.trim() !== "";
    nameInput.current.setCustomValidity(nameIsValid ? "" : "Invalid name");
    setValidName(nameInput.current.checkValidity());

    if (!nameIsValid) setName('');
  }, [name]);

  useEffect(() => {
    setValidEmail(emailInput.current.checkValidity());
  }, [email]);

  useEffect(() => {
    matchInput.current.setCustomValidity((matchPwd === pwd) && validPwd ? "" : "Invalid field");
    setValidMatch((matchPwd === pwd) && validPwd);
  }, [pwd, matchPwd]);

  // change passwordTooltipMessage based on password, and setValidPwd
  useEffect(() => {
    let newPwdTooltipMsg = "Create a strong password that includes at least the following:";
    let pwdIsValid = false;

    if (pwd.length < 8) {
      newPwdTooltipMsg += '\n\u2022 8 characters long';
    }

    if (!pwd.match(/[A-Z]/)) {
      newPwdTooltipMsg += '\n\u2022 one uppercase letter';
    }

    if (!pwd.match(/[a-z]+/)) {
      newPwdTooltipMsg += '\n\u2022 one lowercase letter';
    }

    if (!pwd.match(/[0-9]/)) {
      newPwdTooltipMsg += '\n\u2022 a number';
    }

    if (!pwd.match(/[$@#&!]+/)) {
      newPwdTooltipMsg += '\n\u2022 a symbol: $@#&!';
    }

    if (newPwdTooltipMsg === "Create a strong password that includes at least the following:") {
      newPwdTooltipMsg = 'Great, your password meets the minimum complexity criteria!'
      pwdIsValid = true;
    }

    pwdInput.current.setCustomValidity(pwdIsValid ? "" : "Invalid field");
    setValidPwd(pwdIsValid);
    setPasswordTooltipMessage(newPwdTooltipMsg);
  }, [pwd]);
 
  const createAccount = async (e) => {
    e.preventDefault();

    if (!validName || !validEmail || !validPwd || !validMatch) {
      return;
    }

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
      <h1 className='registerform_title'>Create Your QuizMe Account!</h1>
      <span id='error_message'></span>

      <form onSubmit={createAccount}>
        <label htmlFor='full_name'>Your Name</label>
        <div className='input_container' data-tooltip={nameTooltipMsg}>
          <input
            type="text"
            value={name}
            id='name_input'
            className='registerform_input'
            onChange={(e) => setName(e.target.value)}
            aria-invalid={validName ? "false" : "true"}
            placeholder="Your Name"
            autoComplete='off'
            name="full_name"
            ref={nameInput}
            required
          />
          {/* <p className='error_message' id='name_error_text'></p> */}
        </div>

        <label htmlFor='email'>Email</label>
        <div className='input_container' data-tooltip={emailTooltipMsg}>
          <input
            type="email"
            value={email}
            id='email_input'
            className='registerform_input'
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={validEmail ? "false" : "true"}
            placeholder="Email"
            autoComplete='off'
            name="email"
            ref={emailInput}
            required
          />
          {/* <p className='error_message' id='email_error_text'></p> */}
        </div>

        <label htmlFor='password'>Password</label>
        <div className='input_container' data-tooltip={passwordTooltipMessage}>
          <input
            type="password"
            value={pwd}
            id='password_input'
            className='registerform_input'
            onChange={(e) => setPwd(e.target.value)}
            aria-invalid={validPwd ? "false" : "true"}
            placeholder="Password"
            name="password"
            ref={pwdInput}
            required
          />
          {/* <p className='error_message' id='password_error_text'></p> */}
        </div>

        <label htmlFor='confirm_password'>Confirm Password</label>
        <div>
          <input
            type="password"
            value={matchPwd}
            id='confirm_password_input'
            className='registerform_input'
            onChange={(e) => setMatchPwd(e.target.value)}
            aria-invalid={validMatch ? "false" : "true"}
            placeholder="Confirm Password"
            name="confirm_password"
            ref={matchInput}
            required
          />
          {/* <p className='error_message' id='confirm_password_error_text'></p> */}
        </div>

        <button
          className='register_btn'
          disabled={!validName || !validEmail || !validPwd || !validMatch}
          title={'Complete all fields to create your account!'}
        >
          Register Account!
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
