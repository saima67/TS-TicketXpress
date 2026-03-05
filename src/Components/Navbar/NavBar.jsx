import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 justify-between flex md:px-20">
      <div className="navbar-start justify-start w-4/12 flex-none">
        <a className="text-2xl font-bold pl-2 md:pl-0 py-3">TS_TicketXpress</a>
      </div>
      <div className="hidden justify-end lg:flex w-8/12 flex-auto">
        <ul className="menu menu-horizontal space-x-1">
          <li>
            <a className="mt-1 font-bold">Home</a>
          </li>
          <li>
            <a className="mt-1 font-bold">FAQ</a>
          </li>
          <li>
            <a className="mt-1 font-bold">Changelog</a>
          </li>
          <li>
            <a className="mt-1 font-bold">Blog</a>
          </li>
          <li>
            <a className="mt-1 font-bold">Download</a>
          </li>
          <li>
            <a className="mt-1 font-bold">Contact</a>
          </li>
          <li>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
              New Ticket
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="-ml-16 menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
          >
            <li className="p-2"><a >Home</a></li>
            <li className="p-2"><a>FAQ</a></li>
            <li className="p-2"><a>Changelog</a></li>
            <li className="p-2"><a>Blog</a></li>
            <li className="p-2"><a>Download</a></li>
            <li className="p-2"><a>Contact</a></li>
            <li>
            <button className="btn btn-xs text-[10px]">
              <FontAwesomeIcon icon={faPlus} />
              New Ticket
            </button>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
