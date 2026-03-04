import React from "react";
import vectorImg from "../../assets/vector1.png";
import vectorImg2 from "../../assets/vector2.png";

const Banner = () => {
  return (
    <div className="bg-gray-50 p-3  md:px-45 flex justify-between gap-10 ">
      {/* <div className="bg-[#632ee3] p-50 rounded-3xl">In Progress</div> */}
      <div className="bg-[#632ee3]  rounded-3xl text-white text-center text-4xl">
        <div className="flex gap-10 ">
          <img src={vectorImg} alt="progress" />
          <img src={vectorImg2} alt="progress" />
        </div>
        <p className=" ">In Progress</p>
        <span>0</span>
      </div>
      <div className="bg-[#54CF68] rounded-3xl text-white text-center text-4xl  ">
        <div className="flex gap-20 ">
          <img src={vectorImg} alt="progress" />
          <img src={vectorImg2} alt="progress" />
        </div>
        <p>Resolve</p>
        <span>0</span>
      </div>
    </div>
  );
};

export default Banner;
