import React from "react";
import {NavItem, NavLink} from "reactstrap";
import "./style.css";

const SideBarItem = ({title, link}) => {
  return (
    <div className="sideBarItem">
      <NavItem>
        <NavLink href={link} className="title-name">
          {title}
        </NavLink>
      </NavItem>
    </div>

  );
}

export default SideBarItem;