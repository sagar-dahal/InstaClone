import React, {Fragment, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import Links from '../../links/links';
import SlideShow from './SlideShow';

import './Home.css';


const Home = () => {

    const [uNameLen, setUNameLen] = useState(0);
    const [pwLen, setPWLen] = useState(0);

    const onUNameChange = (e) =>{
        setUNameLen(e.target.value.length);
    }
    const onPWChange = (e) =>{
        setPWLen(e.target.value.length);
    }
    const navigate = useNavigate();

  return (
    <Fragment>
        <main className='mt-4'>
            <div className='home-container'>
                <div className='col slideshow phone'>
                    <SlideShow />
                </div>
                <div className='col ml-5'>
                    <div className='top-box border-2 border-gray-200'>
                        <div className='flex justify-center'>
                            <p className='logo font-bold'>Instagram</p>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <form className='w-4/5'>
                                <input type="text" className='w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300 text-xs'
                                placeholder='Username' onChange={onUNameChange} />
                                <input type="password" className='mt-1 w-full bg-slate-50 h-10 border-2 border-slate-200 px-2 placeholder-gray-500 placeholder:text-xs rounded focus:outline-none focus:border-gray-300 text-xs'
                                placeholder='Password' onChange={onPWChange} />
                                {uNameLen >= 1 && pwLen>=6
                                    ? <button className='mt-3 py-1 w-full rounded-md bg-blue-500 text-gray-100 font-bold' onClick={()=> navigate(Links.PersonalHome)}>Log in</button>
                                    : <button className='mt-3 py-1 w-full rounded-md bg-blue-400 text-gray-100 font-bold' disabled>Log in</button>
                                }
                            </form>
                        </div>
                        <div className="w-4/5 my-3 mx-auto flex items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <div className="px-3">OR</div>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-sm'>Log in with Facebook</p>
                        </div>
                        <div className='flex justify-center my-3'>
                            <Link to={Links.PasswordReset}><p className='text-xs text-blue-400'>Forgot Password?</p></Link>
                        </div>
                    </div>
                    <div className='mt-3 py-5 grid justify-center top-box border-2 border-gray-200'>
                        <p className='text-sm'>Don't have an account? <Link to={Links.SignUp}><span className='font-bold text-blue-600'>Sign up</span></Link></p>
                    </div>
                    <div className='mt-3 grid justify-center'>
                        <p>Get the app.</p>
                    </div>
                    <div className='get-apps mt-2'>
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
                </div>
            </div>
        </main>
    </Fragment>
  )
}

export default Home
