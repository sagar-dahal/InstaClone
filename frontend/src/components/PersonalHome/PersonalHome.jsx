import React from 'react'
import {Link} from 'react-router-dom';

const PersonalHome = () => {
  return (
    <main className=''>
        <div className='left-col'>
            <div className='logo'>
                <p className='logo'>Instagram</p>
            </div>
            <div>
                <Link>Home</Link>
            </div>
            <div>
                <Link>Search</Link>
            </div>
            <div>
                <Link>Explore</Link>
            </div>
            <div>
                <Link>Reels</Link>
            </div>
            <div>
                <Link>Messages</Link>
            </div>
            <div>
                <Link>Notifications</Link>
            </div>
            <div>
                <Link>Create</Link>
            </div>
            <div>
                <Link>Profile</Link>
            </div>
        </div>

        <div className='mid-col'>
            <div className='stories'>
                Stories go here
            </div>
            <div className='posts'>
                Posts go here
            </div>
        </div>

        <div className='right-col'>
            <div className='profile'>
                Profile img, userName, Full name goes here           
            </div>
            <div className='follow-suggestions'>
                Profiles you may want to follow goes here
            </div>
        </div>
      
    </main>
  )
}

export default PersonalHome
