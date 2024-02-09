import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sideBarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sideBarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
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
      </motion.div>
    </>
  );
}
