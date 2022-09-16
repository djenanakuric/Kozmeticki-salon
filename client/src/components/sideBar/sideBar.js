import React from "react";
import { Nav } from "reactstrap";
import SideBarItem from "./sideBarItem";
import "./style.css";

const SideBar = ( {toggle = false}) => {
  return (
    <div className="sideBar">
      <Nav vertical pills>
        <SideBarItem link="#" title="Kalendar" />
        <SideBarItem link="#" title="Rezervacije" />
        <SideBarItem link="#" title="Tretmani" />
        <SideBarItem link="#" title="Recenzije" />
      </Nav>
      </div>
    )

}


export default SideBar;