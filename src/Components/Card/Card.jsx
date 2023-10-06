import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card() {
  return (
    <div className="container mx-auto grid grid-cols-5 gap-x-5">
      <div className="relative cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="h-52 w-fit object-cover rounded-xl overflow-hidden"
        />
        <FontAwesomeIcon
          icon={faHeart}
          className="absolute top-5 right-5 z-50 text-white"
        />
        <div className="flex justify-between items-start mt-3">
          <div>
            <h4 className="font-bold">Saintmartin</h4>
            <span className="text-slate-500">1 couple bed</span>
            <p className="mt-2">
              <span className="font-bold">$40</span> night •{" "}
              <span className="text-slate-500 underline">$32 total</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faStar} />
            <span>4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
