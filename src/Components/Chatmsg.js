import React from 'react'
import'./chatmsg.css'
import senderpro from '../Asset/Images/Photo.png'
import mic from '../Asset/Images/mic.png'
import pin from '../Asset/Images/pin.png'
const Chatmsg = () => {
  return (
  <>
  <div className="chatmsg-block">
    <div className="chatmessages">
<div className="chatmsg-left">

<div className="chatmsg-senderprof">
  <img src={senderpro} alt="sender"/>
</div>
<div className="chat-name">
<h1>Caesar</h1>
  <div className='text '>

    <p>lad like you. There must be some special food you like</p>
    <h2>10:36 PM</h2>
  </div>
 </div>
    
  </div>
  <div className="chatmsg-left">

<div className="chatmsg-senderprof">
  <img src={senderpro} alt="sender"/>
</div>
<div className="chat-name">
<h1>Caesar</h1>
  <div className='text '>

    <p>lad like you. There must be some special food you like</p>
    <h2>10:36 PM</h2>
  </div>
 </div>
    
  </div>
<div className="chat-right">
  <p>Well, there is this one dish. I’ve had a  on  ever since I can remember. But I’m pretty sure  didn’t know I was alive until the reaping</p>
</div>
<div className="chatmsg-left">

<div className="chatmsg-senderprof">
  <img src={senderpro} alt="sender"/>
</div>
<div className="chat-name">
<h1>Caesar</h1>
  <div className='text '>

    <p>lad like you. There must be some special food you like</p>
    <h2>10:36 PM</h2>
  </div>
 </div>
    
  </div>
  </div>

  <div className="writemsg flex direction-column ">

<div className="inputtext">
  <input type="text" placeholder="Write a message..."/>
</div>
<div className="voicemsg d-flex justify-content-space-between ">
  <div className="voice-file d-flex justify-content-space-between " >

  <div className="voice"><img src={mic} alt="mic"/></div>
  <div className="file"><img src={pin} alt="pin"/></div>

  </div>
  
  <div className="sendbtn"><button>Send</button></div>
</div>
</div>
</div>









  
  </>
  )
}

export default Chatmsg;