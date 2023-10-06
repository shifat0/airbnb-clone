import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HeaderItems } from "./HeaderItems";
import { faChevronRight, faSliders } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="border-t-2 p-5">
      <div className="container mx-auto flex justify-between items-center">
        {HeaderItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer p-2 text-slate-600 border-b-2 border-transparent focus:border-black focus:text-black"
            tabIndex={idx}
          >
            <img src={item.src} alt={item.title} className="w-5 h-5" />
            <span className="text-xs">{item.title}</span>
          </div>
        ))}

        <FontAwesomeIcon
          icon={faChevronRight}
          className="w-3 h-3 border-2 p-2 rounded-full cursor-pointer"
        />

        <button className="flex items-center gap-5 border-2 rounded-xl p-3">
          <FontAwesomeIcon icon={faSliders} />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
