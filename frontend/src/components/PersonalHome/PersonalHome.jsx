import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai';
import {BsCameraReels} from 'react-icons/bs';
import {RiMessage2Line} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';

import Story from './Story';
import Post from './Post';

import './personalHome.css';

const PersonalHome = () => {
    const iconSize = 28;

  return (
    <main>
        <div className="container-l border-r-2 float-left flex flex-col">
            <div className='content-l-1'>
                <div className='py-4 mb-2'>
                    <p className='logo text-3xl font-bold'>Instagram</p>
                </div>
                <div className='menu'>
                    <div className='menu-home flex items-center py-4'>
                        <div className='mr-5'> <AiOutlineHome size={iconSize} /> </div>
                        <div className=''>Home</div>
                    </div>
                    <div className='menu-home flex items-center py-4 mt-2'>
                        <div className='mr-5'> <AiOutlineSearch size={iconSize} /> </div>
                        <div className=''>Search</div>
                    </div>
                    <div className='menu-home flex items-center py-4 mt-2'>
                        <div className='mr-5'> <BsCameraReels size={iconSize} /> </div>
                        <div className=''>Reels</div>
                    </div>
                    <div className='menu-home flex items-center py-4 mt-2'>
                        <div className='mr-5'> <RiMessage2Line size={iconSize} /> </div>
                        <div className=''>Messages</div>
                    </div>
                    <div className='menu-home flex items-center py-4 mt-2'>
                        <div className='mr-5'> <AiOutlineHeart size={iconSize} /> </div>
                        <div className=''>Notifications</div>
                    </div>
                    <div className='menu-home flex items-center py-4 mt-2'>
                        <div className='mr-5'> <CgProfile size={iconSize} /> </div>
                        <div className=''>Profile</div>
                    </div>
                </div>
            </div>
            <div className='content-l-2 mt-auto flex items-center mb-5'>
                <div className='mr-5'> <RxHamburgerMenu size={iconSize} /> </div>
                <div className=''>More</div>
            </div>
        </div>
        <div className='container-r flex pt-10 pl-10'>
            <div className='media w-3/4'>
                <div className='stories flex'>
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </div>
                <div className='posts'>
                    
                </div>
            </div>
        </div>
    </main>
  )
}

export default PersonalHome
