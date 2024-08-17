import React from "react";
import { FiHome } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TbCameraSearch } from "react-icons/tb";
import { FaRegClipboard } from "react-icons/fa6";
import { PiBooks } from "react-icons/pi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
function Leftdrawer({ logclose }) {
  return (
    <div
      className="w-[200px] h-[100vh] bg-white overflow-hidden transition-all duration-300"
      onClick={() => logclose()}
    >
      <nav className="flex p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <FiHome className="w-5 h-5" />
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <IoCalendarClearOutline className="w-5 h-5" />
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <TbCameraSearch className="w-5 h-5" />
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <FaRegClipboard className="w-5 h-5" />
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <PiBooks className="w-5 h-5" />
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <BiBarChartAlt2 className="w-5 h-5" />
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-orange-100 p-1 rounded-md">
            <TbSearch className="w-5 h-5" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Leftdrawer;
