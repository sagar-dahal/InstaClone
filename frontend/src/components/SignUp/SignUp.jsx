import React from 'react';
import {Link} from 'react-router-dom';

import Links from '../../links/links';

const SignUp = () => {
  return (
    <div>
        <div>
            <div className='logo'>
                <p className='logo'>Instagram</p>
            </div>
            <p>Sign up to see photos and videos from your friends</p>
            <button>Log in with Facebook</button>
            <div>
                <div className='empty'></div>
                <div>OR</div>
                <div className='empty'></div>
            </div>
            <div>
                <form>
                    <input type="text" placeholder='Mobile Number or Email' />
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button>Sign up</button>
                </form>
            </div>
        </div>
        <div>
            <p>Have an account? <Link to={Links.Home}>Log in</Link></p>
        </div>
    </div>
    
  )
}

export default SignUp
