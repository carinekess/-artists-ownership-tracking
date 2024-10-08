import React from "react";
import "./App.css";
import img1 from "./images/software.jpg";
import pythonImage from "./images/pro.png";

const App = () => {
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
          <h2 className="dashboard">Dashboard</h2>
          <div className="contain">
            <div className="box"></div>
            <div className="image">
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

export default App;
