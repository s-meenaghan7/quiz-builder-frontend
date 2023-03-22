import React, { useEffect, useState } from 'react';
import '../styles/VerificationPage.css';
import { ClipLoader } from 'react-spinners';
import RegistrationService from '../../../service/RegistrationService';
import ToastService from '../../toasts/ToastService';

export default function VerificationPage({ email }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'QuizMe | Account Verification';
  }, []);

  const resendEmail = async () => {
    setLoading(true);

    try {
      await RegistrationService.resendEmail({ email: email });
      ToastService.success(`Email to ${email} resent successfully.`);

    } catch (err) {
      if (!err?.response) {
        ToastService.warn('Error: Server unavailable, please try again later.');
      } else {
        ToastService.warn('Error: Something went wrong, please try again later.');
      }
    }

    setLoading(false);
  }

  return (
    <section className='verification_section'>
      <h1>Email Verification</h1>

      <p>
        Your registration was successful! You will receive an email from QuizMe with a link to activate your account. Please check your email: {email ? email : 'null'}.
      </p>

      <span id='mail_icon' className="material-icons-outlined">
        mark_as_unread
      </span>

      <p>
        Your account must be activated before you can login to QuizMe.
        You have 30 minutes to confirm your account creation before the link expires.
      </p>

      <hr />

      {
        loading ?
          <div className='spinner_container'>
            <ClipLoader
              color={'#ffc700'}
              loading={loading}
              cssOverride={{}}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
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
