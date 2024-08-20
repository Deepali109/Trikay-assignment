import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TbHexagonMinusFilled } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { GrCircleAlert } from "react-icons/gr"; // Importing GrCircleAlert
import { BiBarChartAlt2 } from "react-icons/bi";
function DefaultDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex bg-white flex-col justify-between items-center mt-2 w-full rounded-md">
      <div className="p-3  w-full rounded-md">
        <div className="flex justify-between items-center pl-4 pr-4">
          {/* left */}
          <div className="flex space-x-3 items-center">
            <IoIosArrowDown
              onClick={toggleDropdown}
              className={`cursor-pointer transform transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
            <TbHexagonMinusFilled size={22} color="#fbecbf" />
            <div className="flex items-center text-sm font-semibold">
              <span className="text-xl pr-2 font-bold text-orange-600">M1</span>
              Professional Standards
            </div>
          </div>
          {/* right */}
          <div className="flex space-x-3">
            <SiTicktick />
            <div className="text-sm">2 Videos - 7 MCQs</div>
          </div>
        </div>
      </div>

      {/* dropdown */}
      {isDropdownOpen && (
        <div className="border flex flex-col border-gray-200 shadow m-4 rounded-md w-[95%] bg-gray-50 transition-max-height duration-1000 ease-in-out">
          <div className="flex flex-col space-y-3">
            {/* Section 1 */}
            <div className="flex justify-between items-center p-3 pl-8 border-b-2 w-full">
              <div className="flex flex-col">
                <div className="text-sm font-bold">Concept Videos</div>
                <div className="text-xs text-gray-600">Runtime 15m</div>
              </div>
              <div className="text-sm">09:50</div>
            </div>
            {/* Item 1 */}
            <div className="flex flex-col border-b-2 w-full ">
              <div className="flex justify-between items-center p-3 pl-5">
                <div className="flex space-x-3 items-center justify-center">
                  <SiTicktick color="gray" size={20} />
                  <p className="text-sm ">
                    Audit process Overview and the Independent Audit Function
                  </p>
                </div>
                <div className="flex items-center space-x-2 ">
                  <p className="text-xs">09:50</p>
                  <IoIosArrowForward />
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex justify-between p-3 items-center pl-5">
                <div className="flex space-x-3 items-center">
                  <SiTicktick color="gray" size={20} />
                  <p className="text-sm">
                    Nature, Scope, and Objectives of the Audit Engagement
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-xs">09:50</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
            {/* Section 2 */}
            <div className="flex justify-between p-3 pt-1 w-full rounded-md">
              <div className="flex flex-col pl-4 pr-4">
                <div className="text-sm font-bold">Concept Videos</div>
                <div className="text-xs text-gray-600">Runtime 15m</div>
              </div>
              <div className="text-sm flex mr-5 justify-center items-center">
                {" "}
                <BiBarChartAlt2 size={20} />
                <span className="pl-5"> 09:50 </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DefaultDropdown;
