import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai';
import {BsCameraReels} from 'react-icons/bs';
import {RiMessage2Line} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';

import Story from './Story';
import Post from './Post';

import dp from '../../images/dp.jpg';

import './personalHome.css';

const PersonalHome = () => {
    const iconSize = 28;
    const suggestions = [
        {url: dp, uName: 'user_1', followedBy: 'user_x + 9 more'},
        {url: dp, uName: 'user_2', followedBy: 'user_x + 7 more'},
        {url: dp, uName: 'user_3', followedBy: 'user_x + 3 more'},
        {url: dp, uName: 'user_4', followedBy: 'user_x + 5 more'},
        {url: dp, uName: 'user_5', followedBy: 'user_x + 2 more'}
    ];

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
        <div className='container-r w-9/12 mx-auto flex pt-10'>
            <div className='r-1'>
                <div className='stories flex'>
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </div>
                <div className='posts'>
                    {/* <Post /> */}
                </div>
            </div>
            <div className='r-2 pt-1 ml-14'>
                <div className='account-switch flex items-center'>
                    <div className='dp bg-slate-400'>
                        <img src={dp} alt="dp" />
                    </div>
                    <div className='ml-5'>
                        <Link className='font-semibold'>john_smith</Link><br />
                        <span>John Smith</span>
                    </div>
                    <div className='switch-btn ml-auto'>
                        <span className='text-blue-600 text-sm font-semibold'>Switch</span>
                    </div>
                </div>
                <div className='follow-suggestions mt-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <div>
                                <span className='font-semibold text-slate-500'>Suggested for you</span>
                            </div>
                        </div>
                        <div>
                            <Link><span className='text-sm font-semibold'>See all</span></Link>
                        </div>
                    </div>
                    <div className='suggested-profiles'>
                        {suggestions.map((item, index) => (
                            <div className='flex items-center mt-4'>
                                <div className='sp-dp-container'>
                                    <img src={item.url} alt={item.uName} className='sp-dp' key={index} />
                                </div>
                                <div className='ml-3 leading-4'>
                                    <Link className='font-semibold'>{item.uName}</Link><br />
                                    <span className='text-xs'>Followed by {item.followedBy}</span>
                                </div>
                                <div className='switch-btn ml-auto'>
                                    <span className='text-blue-600 text-sm font-semibold'>Follow</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default PersonalHome
