import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <img src="post.jpg" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio id culpa vitae explicabo nulla debitis eligendi quasi tempore fuga accusamus, mollitia perspiciatis sunt ullam cum suscipit, esse ut? Odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default Post
