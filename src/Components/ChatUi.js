import React from 'react'
import'./Chatheader.css'
import logo from'../Asset/Images/Name container.png'
import logosetting from'../Asset/Images/d-Header-Icons.png'
import logosdot from'../Asset/Images/DotsThreeVertical (🔄 swap).png'
import logospro from'../Asset/Images/d-Header-User menu.png'
const ChatUi = () => {
  return (
   <>
   {/* header */}
   <div className="chat-section">
<div className="chat-header d-flex align-items-center justify-content-between">
    <div className="chat-logo">
        <img src={logo} alt="logopic"/>
    </div>
    <div className="chat-recivermsg py-3">
    <h4> <span>Caesar</span>last seen 5 min ago</h4>
    </div>
    <div className="chat-setting-profile d-flex align-items-center">
        <div className="chat-setting"> <img src={logosetting } alt="logosetng"/></div>
        <div className="chat-dot"><img src={logosdot } alt="logosetng"/></div>
        <div className="chat-profpic">
        <img src={logospro } alt="logosetng"/>
        </div>
    </div>
</div>


   </div>
   
   
   </>
  )
}

export default ChatUi;