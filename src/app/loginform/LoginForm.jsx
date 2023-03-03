import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../../service/LoginService';
import AuthContext from '../../context/AuthProvider';
import './LoginForm.css';

export default function LoginForm(props) {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginRequest = {
      username: email,
      password: password
    };

    // todo
  }

  return (
    <section className='loginform'>
      <h1 className='login_title'>Log in!</h1>
      <p ref={errRef} id='login_error'>{errMsg}</p>

      <form onSubmit={handleSubmit} method='post'>
        <label htmlFor='email'>Email</label>
        <input
          className='loginform_input'
          onChange={(e) => setEmail(e.target.value)}
          ref={userRef}
          value={email}
          type="text"
          placeholder="Email"
          name="email"
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          className='loginform_input'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          name="password"
          minLength={8}
          required
        />

        <button
          className='login_btn'
        >
          LOG IN
        </button>

        <div className='links_container'>
          <Link
            to='/register'
            title='Create a free account here!'
          >
            New? Create a free account here!
          </Link>

          <p id='or'>OR</p>

          <a
            href='localhost:3000/#'
            title='Continue as Guest to try out Quiz Builder free, no sign up required!'
          >
            Continue as Guest!
          </a>
        </div>

      </form>
    </section>
  );
}
