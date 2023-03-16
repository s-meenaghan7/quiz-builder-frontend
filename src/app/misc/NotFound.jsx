import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {

  return (
    <div className='notfound_container'>
      <h1>Page Not Found</h1>

      <span>
        Could not find page: <code>{window.location.pathname}</code>
      </span>

      <div>
        <Link
          to='/home'
          title='Go back to the home page'
        >
          Go back to the home page
        </Link>
      </div>

    </div>
  );
}
