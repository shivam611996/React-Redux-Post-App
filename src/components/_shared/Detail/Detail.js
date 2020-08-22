import React from "react";
import "./Detail.css";

const Detail = ({ title, value }) => {
  return (
    <div className="detail">
      <span className="detail-title">{title}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
};

export default Detail;
