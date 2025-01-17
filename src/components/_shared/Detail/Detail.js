import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

const Detail = ({ title, value }) => {
  return (
    <div className="detail">
      <span className="detail-title">{title}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
};

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Detail;
