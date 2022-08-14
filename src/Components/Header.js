import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="flex justify-center header-container">
      {/* <div className="header-inner-image flex justify-center"> */}
      <ul className="flex justify-between header-inner p-5 items-center w-1/2">
        <li className="header-links">About</li>
        <li className="header-links">Explore</li>
        <li>
          <Link to="/">
            <img
              src={require("../assets/logo-b.png")}
              alt={"Logo"}
              className="logo-image"
            />
          </Link>
        </li>
        <li className="header-links">Blogs</li>
        <li className="header-links">Contact</li>
      </ul>
      {/* </div>x */}
    </div>
  );
}
