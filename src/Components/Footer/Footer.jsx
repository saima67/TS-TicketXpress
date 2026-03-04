import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#632ee3] md:px-50 py-7">
        <div className="flex flex-col md:flex-row justify-between md:px-0 py-5">
          <div className="md:basis-sm px-1 ">
            <h2 className="text-white font-bold text-lg mb-3">
              TS_TicketXpress
            </h2>
            <p className="text-white text-sm">
              Our ticketing system is a tool used to track and manage customer
              issues or service requests. It creates a unique ticket for each
              problem, helping teams organize, prioritize, and resolve tasks
              efficiently.
            </p>
          </div>
          <div className="text-white md:basis-sm md:pl-20 mt-5 md:mt-0">
            <h2 className="font-semibold">Company</h2>
            <ul className="text-white font-semibold">
              <li className="py-1 font-normal cursor-pointer">Abut Us</li>
              <li className="py-1 font-normal cursor-pointer">Our Mission</li>
              <li className="py-1 font-normal cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="md:basis-sm mt-5 md:mt-0">
            <h2 className="text-white font-semibold">Services</h2>
            <ul className="text-white font-semibold">
              <li className="py-1 font-normal cursor-pointer">
                Products & Services
              </li>
              <li className="py-1 font-normal cursor-pointer">
                Customer Stories
              </li>
              <li className="py-1 font-normal cursor-pointer">Download Apps</li>
            </ul>
          </div>
          <div className="md:basis-sm mt-5 md:mt-0">
            <h2 className="text-white font-semibold">Information</h2>
            <ul className="text-white font-semibold">
              <li className="py-1 font-normal cursor-pointer">
                Privacy Policy
              </li>
              <li className="py-1 font-normal cursor-pointer">
                Terms & Conditions
              </li>
              <li className="py-1 font-normal cursor-pointer">Join Us</li>
            </ul>
          </div>
          <div className="md:basis-sm mt-5 md:mt-0 ">
            <h2 className="text-white font-semibold">Social Links</h2>
            <ul className="text-white font-semibold">
              <li className="py-1 font-normal cursor-pointer">
                <i className="fa-brands fa-facebook-f text-white mr-1 "></i>
                @TS_TicketXpress
              </li>
              <li className="py-1 font-normal cursor-pointer">
                <i class="fa-brands fa-instagram text-white mr-1 "></i>
                @TS_TicketXpress
              </li>
              <li className="py-1 font-normal cursor-pointer">
                {" "}
                <i className="fa-brands fa-linkedin text-white mr-1 "></i>
                @TS_TicketXpress
              </li>
              <li className="py-1 font-normal cursor-pointer">
                {" "}
                <i className="fa-regular fa-envelope text-white mr-1 "></i>
                support@tst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-white"></div>
        <div className="flex flex-col-reverse md:flex-row justify-center px-5 py-5">
          <p className="text-white">
            &copy; 2026 VintageShop,Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
