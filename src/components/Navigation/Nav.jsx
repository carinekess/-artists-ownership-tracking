import React from "react";
// import img1 from "./path/to/your/image.jpg"; // Adjust path

function Nav() {
  return (
    <div className="container">
      <header className="header">
        <div className="head">
          <input
            type="search"
            className="input"
            placeholder="Search or type here"
          />
          <i className="fa-solid fa-pen rink"></i>
          <img src="" alt="Software" />
        </div>
      </header>
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
          <a href="/notification" className="icon-link">
            <i className="fa-brands fa-square-snapchat icon"></i> Notification
          </a>
          <a href="/messenger" className="icon-link">
            <i className="fa-brands fa-facebook-messenger icon"></i> Messenger
          </a>
          <a href="/about" className="icon-link">
            <i className="fa-brands fa-vimeo"></i> Resources
          </a>
        </div>
      </aside>
      <main className="right">
        <div></div>
      </main>
    </div>
  );
}

export default Nav;
