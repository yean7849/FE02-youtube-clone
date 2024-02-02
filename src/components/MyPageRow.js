import React from "react";
import "../css/MyPageRow.css";

function MyPageRow({ Icon, title }) {
  return (
    <div className="myPageRow">
      <Icon className="myPageRow__icon" />
      <h3 className="myPageRow__title" style={{ marginLeft: "20px" }}>{title}</h3>
    </div>
  );
}

export default MyPageRow;
