import React from 'react';
import { Link } from 'react-router-dom';

import Links from '../../links/links';

const PasswordReset = () => {
  return (
    <div>
      <p>Lock Logo</p>
      <h5>Trouble Logging in?</h5>
      <p>Enter your email, phone, or username and we'll send you a link to
        get back into your account.
      </p>
      <div className='forgot-password'>
        <form>
            <input type="text" placeholder='Username' name='username' />
            <button>Send login link</button>
        </form>
        <p>Can't reset your password?</p>
      </div>
      <div>
        <div className='empty'></div>
        <div>OR</div>
        <div className='empty'></div>
      </div>
        <Link to={Links.SignUp}>Create new account</Link>
      <div>
        <Link to={Links.Home}>Back to login</Link>
      </div>
    </div>
  )
}

export default PasswordReset
