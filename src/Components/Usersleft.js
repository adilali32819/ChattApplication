import React from 'react'
import'./userleft.css'
import userpro from'../Asset/Images/Photo.png'
import snipicon from '../Asset/Images/Vector.png'
const Usersleft = () => {
  return (
    <>
    <div className="left-username">
        <div className="userSearch">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-btn" />
        </div>
<div className="userschat">
    <div className="userchat-detail">
    <div className="userpic"><img src={userpro} alt="userpic"/></div>
    <div className="name-msg">
        <h1>Zack Fox</h1>
        <p>Have you ever heard of...</p>
    </div>
    <div className="sendtime">
        <div className="timer"><h4>10:49 AM</h4></div>
        <div className="scipicon"><img src={snipicon} alt="snipicon" /></div>
    </div>
    </div>
    <div className="userchat-detail">
    <div className="userpic"><img src={userpro} alt="userpic"/></div>
    <div className="name-msg">
        <h1>Zack Fox</h1>
        <p>Have you ever heard of...</p>
    </div>
    <div className="sendtime">
        <div className="timer"><h4>10:49 AM</h4></div>
        <div className="scipicon"><img src={snipicon} alt="snipicon" /></div>
    </div>
    </div>
    <div className="userchat-detail">
    <div className="userpic"><img src={userpro} alt="userpic"/></div>
    <div className="name-msg">
        <h1>Zack Fox</h1>
        <p>Have you ever heard of...</p>
    </div>
    <div className="sendtime">
        <div className="timer"><h4>10:49 AM</h4></div>
        <div className="scipicon"><img src={snipicon} alt="snipicon" /></div>
    </div>
    </div>
    <div className="userchat-detail">
    <div className="userpic"><img src={userpro} alt="userpic"/></div>
    <div className="name-msg">
        <h1>Zack Fox</h1>
        <p>Have you ever heard of...</p>
    </div>
    <div className="sendtime">
        <div className="timer"><h4>10:49 AM</h4></div>
        <div className="scipicon"><img src={snipicon} alt="snipicon" /></div>
    </div>
    </div>
    <div className="userchat-detail">
    <div className="userpic"><img src={userpro} alt="userpic"/></div>
    <div className="name-msg">
        <h1>Zack Fox</h1>
        <p>Have you ever heard of...</p>
    </div>
    <div className="sendtime">
        <div className="timer"><h4>10:49 AM</h4></div>
        <div className="scipicon"><img src={snipicon} alt="snipicon" /></div>
    </div>
    </div>
</div>
    </div>
    
    
    </>
  )
}

export default Usersleft;