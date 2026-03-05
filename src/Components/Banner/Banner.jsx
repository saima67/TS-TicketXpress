import React from "react";
import vectorImg from "../../assets/vector1.png";
import "./Banner.css";
const Banner = ({inProgressCount, resolvedCount}) => {
  return (
    <div className="bg-gray-100 md:px-20 py-10 flex justify-between gap-10 ">
      <div className="status-card progress">
        <img src={vectorImg} className="banner-img left-img" alt="progress" />
        <img src={vectorImg} className="banner-img right-img" alt="progress" />
        <p>In-Progress</p>
        <span className="text-6xl font-semibold">{inProgressCount}</span>
      </div>
      <div className="status-card resolve">
        <img src={vectorImg} className="banner-img left-img" alt="progress" />
        <img src={vectorImg} className="banner-img right-img" alt="progress" />
        <p>Resolved</p>
        <span className="text-6xl font-semibold">{resolvedCount}</span>
      </div>
    </div>
  );
};

export default Banner;
