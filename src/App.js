import React from 'react' 
import './App.css'
import ChatUi from './Components/ChatUi'
// import'./Components/Chatheader.css'
import Usersleft from './Components/Usersleft'
import Chatmsg from './Components/Chatmsg'
import DrawerRight from './Components/DrawerRight'
const App = () => {
  return (
   <>
   {/* <div className="main">


  <ChatUi/>
  <div classname=" chat-box ">
  <Usersleft/>
<Chatmsg/>
<DrawerRight/>
  </div>


   </div> */}
   
   
   <div class="container-fluid ">
    <div class="row">
<div class="col">
<ChatUi/>
</div>
    </div>
  <div class="row d-flex">
 
    <div class="col-3"><Usersleft/></div>
    <div class="col-6  "><Chatmsg/></div>
    <div class="col-3 pl-30px"><DrawerRight /></div>
  </div>
</div>
   
   
   
   
   
   </>
  )
}

export default App
