import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Retink from "../../assets/retink.png";
import mailLogin from "../../assets/mainLogin.png";
import Path from "../../assets/Path.png";

function NavigationBar(props) {
  return (
    <nav className="flex bg-white filter drop-shadow-2xl shadow-lg">
      <div className="text-white px-15 mx-12 flex py-5 md:w-1/2 lg:w-1/3">
        <Link to={"/"}>
          <div className="flex">
            <img src={logo} alt="logo" className="mx-2 pl-1" />
            <img src={Retink} alt="text-logo" className="py-0.5" />
          </div>
        </Link>
      </div>
      <div className="lg:w-1/3 lg:flex justify-evenly hidden px-15 mx-10  text-center items-center text-comet-500 lg:text-sm text-xs">
        <Link to={"/"} className="hover:bg-gray-100 p-5">
          Home
        </Link>
        <Link to={"/services"} className="hover:bg-gray-100 p-5">
          Services
        </Link>
        <Link to={"about-us"} className=" hover:bg-gray-100 p-5">
          About us
        </Link>
      </div>
      <div className="md:w-1/2 lg:w-1/3 flex justify-end px-20 my-2 py-2 ">
        <Link to={"/login"}>
          {!props.isLoggedIn && (
            <button className="bg-blue-600 hover:bg-blue-800 text-white flex w-24 font-sans font-base text-base py-2 px-4 rounded shadow-xl ">
              <img src={mailLogin} alt="" className="pt-2.5" />
              <img src={Path} alt="" className="pr-3 pt-1" />
              Login
            </button>
          )}
          {props.isLoggedIn && (
            <button className="bg-blue-600 hover:bg-blue-800 text-white flex w-28 font-sans font-base text-base py-2 px-4 rounded shadow-xl " onClick={props.onLogout}>
              <img src={mailLogin} alt="" className="pt-2.5" />
              <img src={Path} alt="" className="pr-3 pt-1" />
              Logout
            </button>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;