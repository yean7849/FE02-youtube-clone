import React from "react";
import "../css/SidebarRowHeader.css";

function SidebarRowHeader({ Icon, title }) {
  return (
    <div className="sidebarRowHeader">
      <p className="sidebarRowHeader__title" style={{ marginLeft: "6px" }}>
        {title}
        <Icon className="sidebarRowHeader__icon" />
      </p>
    </div>
  );
}

export default SidebarRowHeader;
