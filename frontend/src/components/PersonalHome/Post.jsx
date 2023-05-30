import React from 'react';
import { Link } from 'react-router-dom';

import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShareAlt} from 'react-icons/ai';
import {BiMessageRounded} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs';

import dp1 from '../../images/dp1.jpg';
import img4 from '../../images/img5.jpg';

import './post.css';
const Post = () => {
    const size = 28;
  return (
    <article className='border-b-2 mb-5'>
        <header>
            <div className='flex items-center mt-4'>
                <div className='sp-dp'>
                    <img src={dp1} alt='dp1' />
                </div>
                <div className='ml-3 leading-5'>
                    <Link className='font-semibold'>user_1</Link>
                    <span className='text-sm font-thin ml-3 text-slate-400'>|</span>
                    <span className='ml-1'>20hr</span>
                    <br />
                    <span className='text-xs'>New York, Ny</span>
                </div>
                <div className='ml-auto'>
                    <BsThreeDots />
                </div>
            </div>
        </header>
        <div className='post-images mt-3'>
            <img src={img4} alt="img4" />
        </div>
        <div className='options flex mt-2'>
            <div className='options-l flex'>
                <div className='like'>
                    <AiOutlineHeart size={size} />
                </div>
                <div className='comment ml-4'>
                    <BiMessageRounded size={size} />
                </div>
                <div className='share ml-4'>
                    <AiOutlineShareAlt size={size} />
                </div>
            </div>
            <div className='options-r ml-auto -mr-1'>
                <BsBookmark size={size} />
            </div>            
        </div>
        <div>
            Liked by blah blah
        </div>
    </article>
  )
}

export default Post;
