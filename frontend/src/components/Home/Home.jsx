import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import Links from '../../links/links';

import './Home.css';


const Home = () => {
  return (
    <Fragment>
        <main className='home-container'>
            <div className='home-content'>
                <div className='home-col-1'>
                </div>
                <div className='home-col-2'>
                    <div className='login-form'>
                        <div className='logo'>
                            <p className='logo'>Instagram</p>
                        </div>
                        <form className='login-form'>
                            <div className='login-input'>
                                <input type="text" name='username' maxLength='20' placeholder='Username' required />
                            </div>
                            <div className='login-input'>
                                <input type="password" name='password' placeholder='Password' required />
                            </div>
                            <div id='login-button'>
                                <button>Log in</button>
                            </div>
                            <div>
                                <div className='empty'></div>
                                <div>OR</div>
                                <div className='empty'></div>
                            </div>
                            <div className='with-fb'>
                                <span>Log in with Facebook</span>
                            </div>
                            <div>
                                <Link to={Links.PasswordReset}><span>Forgot Password?</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className='sign-up'>
                        <p>Don't have an coount? <Link to={Links.SignUp}>Sign Up</Link></p>
                    </div>
                    <div className='get-app'>
                        <p>Get the app.</p>
                    </div>
                </div>
            </div>
        </main>
    </Fragment>
  )
}

export default Home
