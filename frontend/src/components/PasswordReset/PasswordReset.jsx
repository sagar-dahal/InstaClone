import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {TfiLock} from 'react-icons/tfi';

import Links from '../../links/links';

import './passwordReset.css';


const PasswordReset = () => {
  return (
    <Fragment>
      <div className='w-full border-2 h-16'>
        <p className='logo text-4xl font-bold pl-10'>Instagram</p>
      </div>
      <div className='pr-container border-2 mt-4'>
        <div className='pr-form p-10'>
          <TfiLock className='m-auto' size={50} />
          <h5 className='text-center mt-5 font-semibold'>Trouble Logging in?</h5>
          <p className='text-sm text-center text-slate-500'>Enter your email, phone, or username and we'll send you a link to
          get back into your account.</p>
          <form className='mt-2'>
            <input type="text" className='w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300'
            placeholder='Username' />
            <button className='mt-3 py-1 w-full rounded-md bg-blue-400 text-gray-100 font-bold'>Send login link</button>
          </form>
          <p className='text-xs mt-2 text-center text-blue-600'>Can't reset your password?</p>
          <div class="my-3 mx-auto flex items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <div class="px-3">OR</div>
              <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <Link to={Links.SignUp}><p className='text-center font-semibold'>Create new account</p></Link>
        </div>
        <div className='border-2 bg-slate-100 mt-10'>
          <Link to={Links.SignUp}><p className='text-center font-semibold py-3'>Back to login</p></Link>
        </div>
      </div>
    </Fragment>
  )
}

export default PasswordReset
