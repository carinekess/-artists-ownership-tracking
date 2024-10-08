import React from "react";
import "./manager.css";
import img1 from "./images/software.jpg"; // Adjust this path based on your structure
import pythonImage from "./images/pro.png";
import img2 from "./images/red.png";
import img3 from "./images/blue.png";


const Manager = () => {
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
            <a href="/manager" className="icon-link">
              <i className="fa-solid fa-house icon"></i> Home
            </a>
            <a href="/user" className="icon-link">
              <i className="fa-solid fa-user icon"></i> Teams
            </a>
            <a href="/report" className="icon-link">
              <i className="fa-regular fa-newspaper icon"></i> Report
            </a>
            <a href="/project" className="icon-link">
              <i className="fa-regular fa-address-card icon"></i> Project
            </a>
            <a href="/project" className="icon-link">
              <i className="fa-brands fa-stack-exchange"></i> &nbsp;  &nbsp;Task
            </a>
            <a href="/notice" className="icon-link">
              <i className="fa-brands fa-square-snapchat icon"></i> Notification
            </a>
            <a href="/message" className="icon-link">
              <i className="fa-brands fa-facebook-messenger icon"></i> Messenger
            </a>
            <a href="/resource" className="icon-link">
              <i className="fa-solid fa-layer-group"></i>  &nbsp; &nbsp;Resource
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
          <h2 className="dashboard">Dashboaard</h2>
          <div className="contain">
            <div className="boxmanager">  <img src={img3} alt="Software" /></div>
            <div className="boxs">
            <img src={img2} alt="Software" />
            </div>
            <div className="images">
            <img src={img1} alt="Software" />
              </div>
          </div>
          <div className="containers">
            <div className="python">
            <img src={pythonImage} alt="Python" />
            </div>
            <div className="comment">
              <h3>Comment</h3>
              <h4>
                This project serves as a comprehensive dashboard application
                designed to streamline user interactions.
              </h4>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Manager;
