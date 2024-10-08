import React from "react";
import "./resources.css";


const  Resources = () => {
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
          <img src="" alt="Software" />
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
        <div className="project-link">
                <a href="/viewresource"> View Resources</a>
            </div>
          <div className="user-registe">

            <h3>Add new resource</h3>
           
            <div className="">
              <input
                type="text"
                name=" projectname"
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
                placeholder="ResourceType"
              />
              <br />
            </div>
            <br />
            <div className="">
              <input
                type="text"
                name=" quantity"
                className=""
                placeholder="Quantity"
              />
            </div>
            <br />
            <div className="">
              <input
                type="text"
                name="allocatedate"
                className=""
                placeholder="AllocatedDate"
              />
            </div>
            <br />
            <div className="">
              <input
                type="text"
                name="assigned"
                className=""
                placeholder="Assigned to"
              />
            </div>
            <br />
            <div className="">
              <input
                type="text"
                name="notes"
                className=""
                placeholder="Add notes"
              />
            </div>
            <br />
            <button type="submit"> ADD</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resources;
