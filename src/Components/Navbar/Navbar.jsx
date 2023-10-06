import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobe,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useEffect } from "react";
import { useRef } from "react";

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    let outsideClickHandler = (e) => {
      if (!ref.current.contains(e.target)) handler();
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, [ref, handler]);
};

function Navbar() {
  const [expandedNav, setExpandedNav] = useState(false);
  const [showCalander, setShowCalander] = useState(false);
  const [showGuestOption, setShowGuestOption] = useState(false);
  const [focusDest, setFocusDest] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const [guestOption, setGuestOption] = useState({
    adults: 0,
    children: 0,
    infrants: 0,
    pets: 0,
  });

  const navRef = useRef();
  useOutsideClick(navRef, () => {
    setShowCalander(false);
    setShowGuestOption(false);
    setExpandedNav(false);
  });

  const handleGuestCount = (type, action) => {
    setGuestOption((prev) => {
      return {
        ...prev,
        [type]: action === "i" ? guestOption[type] + 1 : guestOption[type] - 1,
      };
    });
  };

  let totalGuestCount = 0;
  const countArr = Object.values(guestOption);
  for (let count of countArr) totalGuestCount += count;

  return (
    <div ref={navRef}>
      <div className="container mx-auto h-24 flex justify-between items-center text-sm bg-white">
        <img src={logo} alt="airbnb.com" className="h-8" />
        <div
          className="flex justify-evenly items-center gap-5 py-2 pl-5 pr-1 rounded-full border-2 shadow-sm cursor-pointer hover:shadow-md duration-700"
          onClick={() => setExpandedNav(true)}
        >
          <span className="font-bold">
            {!expandedNav ? "Anywhere" : "Stays"}
          </span>
          <span className={`${!expandedNav ? `border-l-2 h-5` : ``}`}></span>
          <span className="font-bold">
            {!expandedNav ? "Anyweek" : "Experinces"}
          </span>
          <span className={`${!expandedNav ? `border-l-2 h-5` : ``}`}></span>
          <div className="flex items-center justify-between gap-3">
            <span>{!expandedNav ? "Add guests" : "Online Experinces"}</span>
            {!expandedNav && (
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="border-2 rounded-full p-2 bg-red-500 text-white"
              />
            )}
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

      {/* Expanded Nav */}

      <div
        className={`exp bg-white absolute top-0 w-full left-0 right-0 mx-auto text-xs transition-opacity duration-200 ease-in-out ${
          expandedNav
            ? `active top-24 h-40 opacity-100 z-50`
            : `h-20 -z-50 opacity-50`
        }`}
      >
        <div className="mx-auto flex justify-between items-center bg-slate-100 w-1/2 border-2 rounded-full cursor-pointer">
          <div
            className={`hover:bg-slate-300 rounded-full p-3 w-full ${
              focusDest ? `bg-white shadow-lg hover:bg-white` : ``
            }`}
            tabIndex="0"
            onFocus={() => {
              setFocusDest(true);
              setShowCalander(false);
              setShowGuestOption(false);
            }}
            onBlur={() => setFocusDest(false)}
          >
            <h4 className="font-bold">Where</h4>
            <input
              type="search"
              placeholder="Search Destinations"
              className="outline-none bg-transparent"
            />
          </div>
          <span className="border-l-2 h-8"></span>
          <div
            className="hover:bg-slate-300 w-1/2 rounded-full p-3 focus:bg-white focus:shadow-lg"
            tabIndex="1"
            onClick={() => {
              setShowCalander(true);
              setShowGuestOption(false);
            }}
          >
            <h4 className="font-bold">Check In</h4>
            <span className="text-slate-400">
              {date[0].startDate
                ? format(date[0].startDate, "MMM dd")
                : "Add Date"}
            </span>
          </div>
          <span className="border-l-2 h-8"></span>
          <div
            className="hover:bg-slate-300 w-1/2 rounded-full p-3 focus:bg-white focus:shadow-lg"
            tabIndex="2"
            onClick={() => {
              setShowCalander(true);
              setShowGuestOption(false);
            }}
          >
            <h4 className="font-bold">Check Out</h4>
            <span className="text-slate-400">
              {date[0].endDate ? format(date[0].endDate, "MMM dd") : "Add Date"}
            </span>
          </div>
          <span className="border-l-2 h-8"></span>
          <div
            className="flex justify-between items-center w-full gap-7 hover:bg-slate-300 rounded-full p-3 focus:bg-white focus:shadow-lg"
            tabIndex="3"
            onClick={() => {
              setShowCalander(false);
              setShowGuestOption(true);
            }}
          >
            <div>
              <h4 className="font-bold">Who</h4>
              <span className="text-slate-400">
                {totalGuestCount === 0
                  ? "Add Guests"
                  : `${totalGuestCount} guests`}
              </span>
            </div>
            <button className="flex items-center gap-2 bg-red-500 text-white p-2 rounded-full">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              search
            </button>
          </div>

          {/* Calender */}
          {showCalander && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
              className="absolute top-28 translate-x-1/2 z-50 shadow-sm"
            />
          )}

          {/* Guests */}
          {showGuestOption && (
            <div className="absolute flex flex-col gap-5 bg-white p-10 top-28 right-1/4 z-50 shadow-md rounded-3xl text-sm cursor-default">
              <div className="flex gap-20 justify-between">
                <div>
                  <h4 className="font-bold">Adults</h4>
                  <span className="text-gray-500">Ages 13 or above</span>
                </div>
                <div className="flex items-center">
                  <button
                    className={`h-10 w-10 border-2 rounded-full text-2xl ${
                      guestOption.adults === 0
                        ? `cursor-not-allowed text-slate-200 border-slate-200`
                        : `border-slate-300`
                    }`}
                    disabled={guestOption.adults <= 0}
                    onClick={() => handleGuestCount("adults", "d")}
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{guestOption.adults}</span>
                  <button
                    className="h-10 w-10 border-2 border-slate-300 rounded-full text-xl"
                    onClick={() => handleGuestCount("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <span className="border-t-2"></span>

              <div className="flex gap-20 justify-between">
                <div>
                  <h4 className="font-bold">Children</h4>
                  <span className="text-gray-500">Ages 2-12</span>
                </div>
                <div className="flex items-center">
                  <button
                    className={`h-10 w-10 border-2 rounded-full text-2xl ${
                      guestOption.children === 0
                        ? `cursor-not-allowed text-slate-200 border-slate-200`
                        : `border-slate-300`
                    }`}
                    disabled={guestOption.children <= 0}
                    onClick={() => handleGuestCount("children", "d")}
                  >
                    -
                  </button>
                  <span className="w-10 text-center">
                    {guestOption.children}
                  </span>
                  <button
                    className="h-10 w-10 border-2 border-slate-300 rounded-full text-xl"
                    onClick={() => handleGuestCount("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <span className="border-t-2"></span>

              <div className="flex gap-20 justify-between">
                <div>
                  <h4 className="font-bold">Infrants</h4>
                  <span className="text-gray-500">Under 2</span>
                </div>
                <div className="flex items-center">
                  <button
                    className={`h-10 w-10 border-2 rounded-full text-2xl ${
                      guestOption.infrants === 0
                        ? `cursor-not-allowed text-slate-200 border-slate-200`
                        : `border-slate-300`
                    }`}
                    disabled={guestOption.infrants <= 0}
                    onClick={() => handleGuestCount("infrants", "d")}
                  >
                    -
                  </button>
                  <span className="w-10 text-center">
                    {guestOption.infrants}
                  </span>
                  <button
                    className="h-10 w-10 border-2 border-slate-300 rounded-full text-xl"
                    onClick={() => handleGuestCount("infrants", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <span className="border-t-2"></span>

              <div className="flex gap-20 justify-between">
                <div>
                  <h4 className="font-bold">Pets</h4>
                  <span className="underline text-gray-500 cursor-pointer">
                    Bringing a service animal
                  </span>
                </div>
                <div className="flex items-center">
                  <button
                    className={`h-10 w-10 border-2 rounded-full text-2xl ${
                      guestOption.pets === 0
                        ? `cursor-not-allowed text-slate-200 border-slate-200`
                        : `border-slate-300`
                    }`}
                    disabled={guestOption.pets <= 0}
                    onClick={() => handleGuestCount("pets", "d")}
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{guestOption.pets}</span>
                  <button
                    className="h-10 w-10 border-2 border-slate-300 rounded-full text-xl"
                    onClick={() => handleGuestCount("pets", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Nav end */}
    </div>
  );
}

export default Navbar;
