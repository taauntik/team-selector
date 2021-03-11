import React from "react";
import bannerImg from "../../Photo/banner-img.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="mycontainer">
        <h1 className="text">Team Selector</h1>
        <img src={bannerImg} alt="" />
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default Header;
