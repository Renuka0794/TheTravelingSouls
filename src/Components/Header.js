import React from "react";
import DrawerNav from "./Drawernav";


export default function Header() {
  return (
  <div>
    <div className="flex justify-center header-container desktop-only">
      <nav className="flex sm:justify-between space-x-4 nav-bar ">
        {[
        ['About','/#about'],
        ['Explore','/#weekend-trips'],
        ['Logo', '/'],
        ['Contact', '/#contact'],
        ['Gallery', '/#gallery'],
        ].map(([title, url]) => (
            <a href={url} className="px-3 py-2 text-slate-700 font-medium nav-links">{title !== 'Logo' ? title :  <img
            src={require("../assets/logo-c.png")}
            alt={"Logo"}
            className="logo-image"
            />}</a>
        ))}
    </nav>
  </div>
      <div className="mobile-only flex justify-between header-container">
      <a href={'/'} className="px-3 py-2 text-slate-700 font-medium nav-links">
        <img
        src={require("../assets/logo-b.png")}
        alt={"Logo"}
            className="logo-image"
            
        />
      </a>
      <DrawerNav />
    </div>
  </div>
   
  );
}
