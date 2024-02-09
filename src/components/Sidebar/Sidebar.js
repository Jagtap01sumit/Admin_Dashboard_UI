import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt=""></img>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            className={selected === index ? "menuItems active" : "menuItems"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menuItems">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}
