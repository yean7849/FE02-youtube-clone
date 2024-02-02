import React from "react";
import "../css/SidebarRow.css";

function SidebarRow({ Icon, title, onClick }) {
  return (
    <div className="sidebarRow" onClick={onClick}>
      <Icon className="sidebarRow__icon" />
      <p className="sidebarRow__title" style={{ marginLeft: "10px" }}>
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
