import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import Links from '../../links/links';

import './signUp.css';

const SignUp = () => {
  return (
    <Fragment>
        <div className='su-container1 border-2'>
            <p className='logo text-center font-bold mt-4'>Instagram</p>
            <div className='px-7'>
                <p className='text-center font-semibold text-slate-500'>Sign up to see photos and videos from your friends.</p>
                <button className='mt-3 py-1 w-full rounded-md bg-blue-500 text-white font-semibold'>Login with Facebook</button>
                <div class="my-3 mx-auto flex items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <div class="px-3">OR</div>
                <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <form className='mt-4'>
                    <input type="text" className='w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300 text-xs'
                    placeholder='Mobile Number or Email' />
                    <input type="text" className='mt-1 w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300 text-xs'
                    placeholder='Full Name' />
                    <input type="text" className='mt-1 w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300 text-xs'
                    placeholder='Username' />
                    <input type="password" className='mt-1 w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300 text-xs'
                    placeholder='Password' />
                    <p className='mt-2 text-center text-xs'>People who use our service may have uploaded your contact information to Instagram.</p>
                    <p className='mt-2 text-center text-xs'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</p>
                    <button className='mt-3 py-1 w-full rounded-md bg-blue-400 text-gray-100 font-bold' disabled>Sign Up</button>
                </form>
            </div>
        </div>
        <div className='su-container2 border-2 flex items-center'>
            <p className='m-auto text-sm'>Have an account? <Link to={Links.Home}><span className='text-blue-500'>Log in</span></Link></p>
        </div>
        <p className='text-center text-sm mt-3'>Get the app</p>
        <div className='get-apps mt-4 mb-8'>
            <div className='app-btn bg-black ml-3 text-white py-2 px-4 rounded-md'>
                <a href="#">
                    <p className='text-xs'>Get it on</p>
                    <span>Google Play</span>
                </a>
            </div>
            <div className='app-btn bg-black ml-3 text-white py-2 px-4 rounded-md'>
                <a href="#">
                    <p className='text-xs'>Get it from</p>
                    <span>Microsoft</span>
                </a>
            </div>
        </div>
    </Fragment>
    
  )
}

export default SignUp
