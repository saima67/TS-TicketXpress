import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section bg-[#000000] md:px-20 py-5">
        <div className="flex flex-col md:flex-row justify-evenly md:px-0">
          <div className="w-3/12">
            <h2 className="font-bold text-xl text-white mb-3">
              TS_TicketXpress
            </h2>
            <p className="text-sm text-justify">
              Our ticketing system is a tool used to track and manage customer
              issues or service requests. It creates a unique ticket for each
              problem, helping teams organize, prioritize, and resolve tasks
              efficiently.
            </p>
          </div>
          <div className="w-2/12 ml-20 mt-5 md:mt-0">
            <h2 className="font-semibold text-white mb-3">Company</h2>
            <ul className="font-semibold">
              <li className="font-normal cursor-pointer">About Us</li>
              <li className="py-2 font-normal cursor-pointer">Our Mission</li>
              <li className="font-normal cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="w-2/12 mt-5 md:mt-0">
            <h2 className="font-semibold text-white mb-3">Services</h2>
            <ul className="font-semibold">
              <li className="font-normal cursor-pointer">
                Products & Services
              </li>
              <li className="py-2 font-normal cursor-pointer">
                Customer Stories
              </li>
              <li className="font-normal cursor-pointer">Download Apps</li>
            </ul>
          </div>
          <div className="w-2/12 ml-10 mt-5 md:mt-0">
            <h2 className="font-semibold text-white mb-3">Information</h2>
            <ul className="font-semibold">
              <li className="font-normal cursor-pointer">
                Privacy Policy
              </li>
              <li className="py-2 font-normal cursor-pointer">
                Terms & Conditions
              </li>
              <li className="font-normal cursor-pointer ">Join Us</li>
            </ul>
          </div>
          <div className="w-2/12 pl-10 mt-5 md:mt-0">
            <h2 className="font-semibold text-white mb-3">Social Links</h2>
            <ul className="font-semibold">
              <li className="font-normal cursor-pointer">
                <i className="fa-brands fa-facebook-f mr-2"></i>
                @TS_TicketXpress
              </li>
              <li className="py-2 font-normal cursor-pointer">
                <i className="fa-brands fa-instagram mr-2"></i>
                @TS_TicketXpress
              </li>
              <li className="pb-2 font-normal cursor-pointer">
                
                <i className="fa-brands fa-linkedin mr-2"></i>
                @TS_TicketXpress
              </li>
              <li className="font-normal cursor-pointer">
                
                <i className="fa-regular fa-envelope mr-2"></i>
                support@tst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-[#9494946c] my-5"></div>
        <div className="flex flex-col-reverse md:flex-row justify-center px-5">
          <p>
            &copy; 2026 VintageShop,Inc. All Rights Reserved.
          </p>
        </div>
      </div>
  );
};

export default Footer;
