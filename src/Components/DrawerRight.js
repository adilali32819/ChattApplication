import React from 'react'
import'./Drawer.css';
import prof from '../Asset/Images/Photo.png'
const DrawerRight = () => {
  return (
<>

<div className="Drawer pl-4">
    <div className="userlogindrawer">
      <div classname="userloginprof">
        <img src="" alt="" />
      </div>
      <div className="userloginname"><h3>Caesar</h3></div>
      <div className="userlogin-x">
        <img src={prof } alt=""/>
      </div>
      <div className="userlogin-detail">
        <h1>Username</h1>
        <h3>Caesar</h3>
        <h1>Bio</h1>
        <p>I like talk shows</p>
      </div>
      <div className="userlogin-notification">
        <div className="usernotificaion-staus" >
          <h1>Notifications</h1>
          <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
        </div>
      </div>
    </div>
</div>
</>
  )
}

export default DrawerRight;