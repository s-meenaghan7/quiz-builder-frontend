import React, { useState } from 'react';
import '../styles/VerificationPage.css';
import { ClipLoader } from 'react-spinners';

export default function VerificationPage({ email }) {
  const [loading, setLoading] = useState(false);

  const resendEmail = () => {
    // TODO
    console.log('resending email...');
  }

  return (
    <section className='container'>
      <h1>Email Verification</h1>

      <p>
        Your registration was successful. You will receive an email from QuizMe with a link to activate your account. Please check your email: {email ? email : 'null'}.
      </p>

      {/* insert img of envelope */}

      <p>
        Your account must be activated before you can login to QuizMe.
      </p>

      <hr />

      {
        loading ?
          <ClipLoader
            color={'#ffc700'}
            loading={loading}
            cssOverride={{}}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <button
            title='Click here to resend your verification email'
            className='resend_btn'
            onClick={() => resendEmail()}
          >
            Resend Email
          </button>
      }

    </section>
  );
}
