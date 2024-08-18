import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { MdAdd } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" className="h-7 w-7" />
          <h1 className="text-2xl font-bold flex">
            Becker
            <span>
              <MdAdd color="#fcd048" size={15} className="mt-3.5 -ml-1" />
            </span>
          </h1>
        </div>

        {/* Exam Section */}
        <div className="flex mt-1">
          <h3 className="text-md font-bold text-gray-600">
            CPA
            <span className="text-xs text-gray-500 font-semibold pl-1">
              {" "}
              Exam Review
            </span>
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        {/* Help Center */}
        <div className="flex items-center space-x-1 cursor-pointer mr-2">
          <AiOutlineQuestionCircle size={18} />
          <h2 className="text-xs text-gray-600 font-semibold">Help Center</h2>
        </div>

        {/* Notifications */}
        <div className="relative ml-4 mr-4">
          <IoMdNotificationsOutline size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* User Icon */}
        <div className="flex items-center ml-4 justify-center w-8 h-8 rounded-full bg-blue-800 text-white font-bold">
          SH
        </div>
      </div>
    </header>
  );
}

export default Header;
