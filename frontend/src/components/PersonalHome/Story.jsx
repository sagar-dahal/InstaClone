import React from 'react';
import dp from '../../images/dp.jpg';

import './story.css';

const Story = () => {
  return (
    <div className='px-3'>
        <div className='story'>
            <div className='story-dp'>
                <img src={dp} alt="dp" />
            </div>
        </div>
        <p className='text-xs'>John Smith</p>
    </div>
  )
}

export default Story;
