import React, { useState } from "react";
import olx_icon from "../assets/olx_logo.png";
import search_icon from "../assets/search_icon.png";
import arrow_icon from "../assets/arrow_down.png";
import search_icon_white from "../assets/search_icon_white.png";

import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [loginPop, setLoginPop] = useState(false);

  const toggleModal = () => {
    setLoginPop(!loginPop);
  };

  return (
    <>
      <div className="flex p-1 items-center bg-gray-100">
        <Link to='/'>
          <img
            src={olx_icon}
            alt="OLX Logo"
            className="w-20 h-20 object-cover"
          />
        </Link>

        <div className="flex border border--black w-64 p-2 ml-2 items-center relative">
          <img
            src={search_icon}
            alt="Search Icon"
            className="w-6 h-6 object-cover"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-grow px-2 py-1 bg-transparent outline-none"
            onChange={(e) => props?.setSearch(e.target.value)}
            style={{ zIndex: 1 }}
          />
          <img
            src={arrow_icon}
            alt="Arrow Icon"
            className="w-4 h-4 object-cover cursor-pointer"
          />
        </div>

        <div className="flex border border-black w-5/12 h-12 ml-5 items-center relative">
          <input
            type="text"
            placeholder="Location"
            className="flex-grow px-2 py-1 bg-transparent outline-none"
            style={{ zIndex: 1 }}
          />
          <div className="bg-black w-14 h-12 pt-3 pl-4 cursor-pointer">
            <img
              src={search_icon_white}
              alt="Search Icon"
              className="w-4 h-4 object-cover ms-1 mt-1"
            />
          </div>
        </div>
        <div className="flex h-12 p-3 ml-5 cursor-pointer">
          <h1>ENGLISH</h1>
          <img
            src={arrow_icon}
            alt=""
            className="w-5 h-5 object-cover mt-1 ml-1"
          />
        </div>
        <div
          onClick={toggleModal}
          className="flex h-12 p-2 ml-1 cursor-pointer"
        >
          <h1 className="font-bold text-lg cursor-pointer underline hover:no-underline">
            Login
          </h1>
        </div>

        <div className="w-28 flex h-12 p-2 ml-4 cursor-pointer rounded-full border-yellow-500 border">
          <h1 className="font-bold text-lg cursor-pointer ml-5">+SELL</h1>
        </div>
      </div>

      {loginPop && <Login toggleModal={toggleModal} />}
    </>
  );
};

export default Navbar;
