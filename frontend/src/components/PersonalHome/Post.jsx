import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineHeart, AiFillHeart, AiOutlineShareAlt, AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';
import {BiMessageRounded} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs';

import dp1 from '../../images/dp1.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';

import './post.css';

const Post = () => {
    const size = 28;
    const images = [
        {url: img4, desc: 'img4'},
        {url: img5, desc: 'img5'},
        {url: img6, desc: 'img6'},
        {url: img7, desc: 'img7'}
    ];
    const [index, setIndex] = useState(0);
    const [liked, setLiked] = useState(false);
  return (
    <article className='border-b-2 mb-5'>
        <header>
            <div className='flex items-center mt-4'>
                <div className='sp-dp'>
                    <img src={dp1} alt='dp1' />
                </div>
                <div className='ml-3 leading-5'>
                    <Link className='font-semibold'><span>user_1</span></Link>
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
            {
                index>0 && 
                <div className='prev'>
                    <button onClick={()=>setIndex(index-1)} ><AiFillLeftCircle size={size}  color='fff' /></button>
                </div>
            }
            {
                index<images.length-1 &&
                <div className='next'>
                    <button onClick={()=>setIndex(index+1)} ><AiFillRightCircle size={size} color='fff' /></button>
                </div>
            }
            <div className='circles flex'>
                {
                    images.map((item, i)=>(
                        i == index 
                        ? <div className='circle ml-1 bg-white'></div>
                        : <div className='circle ml-1 bg-slate-400'></div>

                    ))
                }
            </div>
            
            <img src={images[index].url} alt={images[index].desc} />
        </div>
        <div className='options flex mt-2'>
            <div className='options-l flex'>
                <div className='like'>
                    <button onClick={()=>setLiked(!liked)}>
                        {
                            liked ? <AiFillHeart size={size} color='f00' /> 
                                : <AiOutlineHeart size={size} />
                        }
                    </button>
                </div>
                <div className='comment ml-4'>
                    <button><BiMessageRounded size={size} /></button>
                </div>
                <div className='share ml-4'>
                    <button><AiOutlineShareAlt size={size} /></button>
                </div>
            </div>
            <div className='options-r ml-auto -mr-1'>
                <button><BsBookmark size={size} /></button>
            </div>            
        </div>
        <div className='mt-2'>
            <p className='text-'>Liked by 
                <span className='font-semibold'> bruce_lee </span>
                and 
                <span className='font-semibold'> 1,000 others</span>
            </p>
        </div>
        <div className='mt-2'>
            <p><span className='font-semibold'>user_1 </span>
            Travelling to Dubai
            </p>
        </div>
        <div className='mt-2'>
            <p className='text-slate-500'>View all 206 comments</p>
        </div>
        <div className='mt-2'>
            <form>
                <input className='break-all outline-none w-full' type="text" placeholder='Add a comment...' />
            </form>
        </div>
    </article>
  )
}

export default Post;
