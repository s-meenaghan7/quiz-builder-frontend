import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useConfirmToken } from '../../../hooks/useConfirmToken.js';
import '../styles/ConfirmationPage.css';

export default function ConfirmationPage() {
  const { token } = useParams();
  const { mutate: confirmToken, isSuccess, isError, error } = useConfirmToken();
  // const [message, setMessage] = useState({
  //   header: '',
  //   description: ''
  // });

  useEffect(() => {
    console.log('Confirming token');
    confirmToken(token);

  }, [confirmToken, token]);

  if (isSuccess) {
    return (
      <section className='confirmation_section'>
        <h1>Successful! Your account is now confirmed and enabled!</h1>

        <span className="material-icons-outlined icon green">
          verified_user
        </span>

        <p>You can now login to QuizMe.</p>
        <Link
          to='/login'
          title='Click here to login with your account!'
        >
          Click here to login!
        </Link>
      </section>
    );
  }
  else if (isError) {
    return (
      <section className='confirmation_section'>
        <h1>An unexpected error has occurred.</h1>

        <span className="material-icons-outlined icon red">
          error_outline
        </span>

        <p>{error.message}</p>
        <Link
          to='/home'
          title='QuizMe | Home'
        >
          Click here to go home
        </Link>
      </section>
    );
  }
}
