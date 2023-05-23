import React from 'react'

const Post = () => {
  return (
    <div>
        <div className='user-data'>
            <div className='profile-pic'>
                Profile pic here
            </div>
            <div className='username'>
                userName goes here            
            </div>
        </div>
        <div className='post-content'>
            Post's images / videos go here
        </div>
        <div className='buttons'>
            like / comment / share / share buttons go here
        </div>
        <div className='likes'>
            Number of likes go here
        </div>
        <div className='post-description'>
            username and post description goes here
        </div>
        <div className='comments'>
            Number of comments goes here
        </div>
        <div className='comment'>
            comment input field goes here
        </div>
    </div>
  )
}

export default Post
