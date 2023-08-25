import React from 'react';
import './setting.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Setting = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="post.jpg" alt="" className="settingsImg" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Shivanee'/>
                <label>Email</label>
                <input type="email" placeholder='shivanee@gmail.com'/>
                <label >Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>   
        <Sidebar/>
    </div>
  )
}

export default Setting
