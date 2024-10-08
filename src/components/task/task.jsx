import React from "react";
import "./task.css";
import img1 from "./images/software.jpg"; // Adjust this path based on your structure
import pythonImage from "./images/pro.png";
import img2 from "./images/red.png";
import img3 from "./images/blue.png";


const Task = () => {
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
            <a href="/prograss" className="icon-link">
              <i className="fa-regular fa-address-card icon"></i> Project
            </a>
            <a href="/task" className="icon-link">
              <i className="fa-brands fa-stack-exchange"></i> &nbsp;  &nbsp;Task
            </a>
            <a href="/notice" className="icon-link">
              <i className="fa-brands fa-square-snapchat icon"></i> Notification
            </a>
            <a href="/message" className="icon-link">
              <i className="fa-brands fa-facebook-messenger icon"></i> Messenger
            </a>
            <a href="/resources" className="icon-link">
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
          <h2 className="dashboard">Dashboard</h2>
          <div className="project-links">
                <a href="/viewtask"> View Task</a>
            </div>
          <div className="task-registers">
          <h3>Add new Task</h3>
           
           <div className="">
             <input
               type="text"
               name=" firstname"
               className=""
               placeholder="Project name"
             />
             <br />
           </div>
           <br />
           <div className="">
             <input
               type="text"
               name=" start"
               className=""
               placeholder="TaskName"
             />
             <br />
           </div>
           <br />
           <div className="">
             <input
               type="text"
               name=" lastname"
               className=""
               placeholder="Subtask"
             />
           </div>
           <br />
           <div className="">
             <input
               type="text"
               name=" lastname"
               className=""
               placeholder=" Assigned To"
             />
           </div>
           <br />
           <div className="">
             <input
               type="date"
               name=" lastname"
               className=""
               placeholder="end "
             />
           </div>
           <br />
     <div className="">
             <input
               type="text"
               name=" lastname"
               className=""
               placeholder=" status"
             />
           </div>
           <br />
            <button type="submit"> Add</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Task;
