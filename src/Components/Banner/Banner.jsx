import React from "react";
import vectorImg from "../../assets/vector1.png";
import "./Banner.css";
const Banner = ({inProgressCount, resolvedCount}) => {
  return (
    <div className="bg-gray-100 md:px-20 py-10 flex flex-col items-center md:flex-row justify-between gap-10 ">
      <div className="status-card progress w-80 h-40 md:w-177 md:h-62.5">
        <img src={vectorImg} className="banner-img left-img" alt="progress" />
        <img src={vectorImg} className="banner-img right-img" alt="progress" />
        <p>In-Progress</p>
        <span className="text-6xl font-semibold">{inProgressCount}</span>
      </div>
      <div className="status-card resolve w-80 h-40 md:w-177 md:h-62.5">
        <img src={vectorImg} className="banner-img left-img" alt="progress" />
        <img src={vectorImg} className="banner-img right-img" alt="progress" />
        <p>Resolved</p>
        <span className="text-6xl font-semibold">{resolvedCount}</span>
      </div>
    </div>
  );
};

export default Banner;
