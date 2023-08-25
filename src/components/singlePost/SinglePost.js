import React from 'react';
import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="post.jpg" alt="" className="singlePostImg" />
        
            <h1 className="singlePostTitle">
                Lorem, ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Shivanee</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolor! Eum quibusdam, corporis esse ea, doloremque, nesciunt magni qui numquam aliquid repellendus unde at? Cupiditate harum sint eligendi exercitationem numquam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolor! Eum quibusdam, corporis esse ea, doloremque, nesciunt magni qui numquam aliquid repellendus unde at? Cupiditate harum sint eligendi exercitationem numquam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolor! Eum quibusdam, corporis esse ea, doloremque, nesciunt magni qui numquam aliquid repellendus unde at? Cupiditate harum sint eligendi exercitationem numquam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolor! Eum quibusdam, corporis esse ea, doloremque, nesciunt magni qui numquam aliquid repellendus unde at? Cupiditate harum sint eligendi exercitationem numquam!
            </p>
        </div>
    </div>
  )
}

export default SinglePost
