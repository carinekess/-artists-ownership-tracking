import React from "react";
import "./view.css";
import img1 from "./images/software.jpg"; // Adjust this path based on your structure
import pythonImage from "./images/pro.png";




const  Userview= () => {
  return (
    <div className="container">
      <header className="header">
        <div className="head">
          <div className="log"></div> <div className="log"></div>
          <input
            type="search"
            className="input"
            placeholder="Search or type here"
          />
          <i className="fa-solid fa-pen "></i>
        <img src={img1} alt="Software" />
        </div>
      </header>
      <div className="content">
      <aside className="left">
          <div className="icon-container">
            <a href="/" className="icon-link">
              <i className="fa-solid fa-house icon"></i> Home
            </a>
            <a href="/user" className="icon-link">
              <i className="fa-solid fa-user icon"></i> User
            </a>
            <a href="/report" className="icon-link">
              <i className="fa-regular fa-newspaper icon"></i> Report
            </a>
            <a href="/project" className="icon-link">
              <i className="fa-regular fa-address-card icon"></i> Project
            </a>
            <a href="/notice" className="icon-link">
              <i className="fa-brands fa-square-snapchat icon"></i> Notification
            </a>
            <a href="/message" className="icon-link">
              <i className="fa-brands fa-facebook-messenger icon"></i> Messenger
            </a>
            <a href="/resource" className="icon-link">
              <i className="fa-solid fa-layer-group"></i> Resource
            </a>
           
          </div>
          <div className="icon-container logout">
            <a href="/setting" className="icon-link">
              <i className="fa-sharp fa-solid fa-gears"></i> Settings
            </a>
            <a href="/logout" className="icon-link">
              <i className="fa-solid fa-power-off icon"></i> Logout
            </a>
          </div>
        </aside>
        <main className="right">
        <div className="project-link">
                <a href=""> Viw Resource</a><a href="">Manger project</a>
            </div>
        <div>
          <table>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Action</th>

            </tr>
          </table>
        </div>
        </main>
      </div>
    </div>
  );
};

export default Userview;
