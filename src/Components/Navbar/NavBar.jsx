import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 justify-between flex md:px-50">
      <div className="navbar-start ">
        <a className="text-2xl font-bold sm:first: p-3">TS_TicketXpress</a>
      </div>
      <div className=" hidden lg:flex justify-between">
        <ul className="menu menu-horizontal space-x-1">
          <li>
            <a className="mt-1  font-bold">Home</a>
          </li>
          <li>
            <a className="mt-1  font-bold">FAQ</a>
          </li>
          <li>
            <a className="mt-1  font-bold">Changelog</a>
          </li>
          <li>
            <a className="mt-1  font-bold">Blog</a>
          </li>
          <li>
            <a className="mt-1  font-bold">Download</a>
          </li>
          <li>
            <a className="mt-1  font-bold">Contact</a>
          </li>
          <li>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
              New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
