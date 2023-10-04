import React from "react";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobe,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="container mx-auto h-24 flex justify-between items-center text-sm">
      <img src={logo} alt="airbnb.com" className="h-8" />
      <div className="flex justify-evenly items-center gap-5 py-2 pl-5 pr-1 rounded-full border-2 shadow-sm cursor-pointer hover:shadow-md duration-700">
        <span className="font-bold">Anywhere</span>
        <span className="border-l-2 h-5"></span>
        <span className="font-bold">Anyweek</span>
        <span className="border-r-2 h-5"></span>
        <div className="flex items-center justify-between gap-3">
          <span>Add guests</span>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="border-2 rounded-full p-2 bg-red-500 text-white"
          />
        </div>
      </div>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="p-3 rounded-full font-bold hover:bg-slate-200 duration-700">
          Airbnb Your Home
        </span>
        <FontAwesomeIcon
          icon={faGlobe}
          className="p-3 rounded-full hover:bg-slate-200 duration-700"
        />
        <div className="flex gap-4 items-center p-2 border-2 rounded-full hover:shadow-md duration-700">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon
            icon={faUser}
            className="bg-slate-600 text-white p-1.5 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
