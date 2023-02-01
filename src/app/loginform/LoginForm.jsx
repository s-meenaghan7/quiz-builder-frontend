import React from 'react';
import './LoginForm.css';

export default function LoginForm(props) {

  return (
    <div className='loginform'>
      <form>
        <h1 className='login_title'>Log in</h1>
        <p id='login_error'></p>

        <label htmlFor='email'>Email</label>
        <input
          className='loginform_input'
          type="text"
          placeholder="Email"
          name="email"
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          className='loginform_input'
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <button
          type='button'
          className='login_btn'
        >
          LOG IN
        </button>

        <div className='links_container'>
          <a
            href='localhost:3000/#'
            title='Create a free account!'
          >
            New? Create a free account!
          </a>
          <p id='or'>OR</p>
          <a
            href='localhost:3000/#'
            title='Continue as Guest to try out Quiz Builder free, no sign up required!'
          >
            Continue as Guest!
          </a>
        </div>
 
      </form>
    </div>
  );
}
