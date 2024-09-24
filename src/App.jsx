import React from 'react';

import './App.css';
import img1 from './images/software.jpg';

const App = () => {
  return (
    <div className="container">
      <header className="header">
       <div><input type="search" name="" id="" className='input' placeholder='Search or type here' /></div>
      </header>
      <div className="content">
        <div className="left">   
          <div className="icon-container ">
          <i className='fa-solid fa-house'><a href="app.jsx">home</a></i><br />
          <i className='fa-solid fa-user'><a href="app.jsx">User</a></i><br />
         <i className='fa-regular fa-newspaper'> <a href="app.jsx">report</a></i><br />
         <i className='fa-regular fa-address-card'> <a href="app.jsx">project</a></i><br />
         <i className='fa-brands fa-square-snapchat'> <a href="app.jsx">notification</a></i><br />
          <i className='fa-brands fa-facebook-messenger'> <a href="app.jsx">Messanger</a></i><br />

        </div>
        <div className="icon-container "><br /><br />
         <i className='fa-solid fa-power-off'><a href="app.jsx">Logout</a></i>
        </div>
        </div>
        <div className="right">
          <div className='groupe'>
          <h2 className='dashbord'>Dashbord</h2>
          <div className='contain'>
          <div className='box'>
          </div>
          <div className='image'>
            <img src={img1}alt="" />
          
          </div>
          </div>
<div className='containers'>
  <div className='python'>
  <img src="./images/pro.png"alt="" />
  </div>
  <div className='comment'>
    <h3>Comment</h3>
  </div>

</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
