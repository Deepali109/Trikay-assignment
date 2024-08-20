import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { TbHexagonMinusFilled } from "react-icons/tb";
import { PiAddressBook } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import { PiBooksLight } from "react-icons/pi";
import { LuBookMinus } from "react-icons/lu";
import { GrCircleAlert } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import DropdownSection from "./DropdownSection";
import DefaultDropdown from "./DefaultDrpdown";

function a1AuditRepot() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div className="flex flex-col">
      {/* section1 */}
      <div className="relative md:w-full sm:w-full rounded-md justify-center items-center flex flex-col ">
        <div className="bg-white relative w-full p-3 rounded-md">
          <div className=" flex space-x-4 pl-4 items-center">
            <CgDetailsMore size={22} />
            <div className="text-gray-200 text-2xl">|</div>
            <div className=" flex items-center space-x-3">
              <TbHexagonMinusFilled size={22} color="#fbecbf" />
              <div className="flex items-center text-sm font-bold">
                <span className="text-xl pr-2 font-bold text-orange-600">
                  A1
                </span>{" "}
                Audit Reports{" "}
                <span className=" text-sm font-normal pl-1 mb-1">v1.0</span>
              </div>
            </div>
          </div>
          {/* Dropdown Menu
          {isDropdownOpen && ( */}
          {/* <div className="p-0 flex justify-center">
            <div className="p-2 w-[95%] bg-blue-100 shadow-lg rounded-md">
              <div className="flex justify-center space-x-8">
                <div className="flex flex-col items-center"> */}
          <div className="absolute mt-3 p-2 w-[95%] bg-blue-50 shadow-lg rounded-md z-10">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-col justify-center items-center">
                <PiAddressBook />
                <div className="text-xs">Digital Textbook</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <CiBoxList />
                <div className="text-xs">Outline</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <PiBooksLight />
                <div className="text-xs">Flashcards</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <LuBookMinus />
                <div className="text-xs">Glossary</div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-white relative flex justify-between items-center mt-16 w-full p-4 pl-7 rounded-md">
        <div className="flex space-x-3 items-center">
          <GrCircleAlert size={20} />
          <p className="text-sm font-bold">Introduction video</p>
        </div>
        <IoIosArrowForward />
      </div>

      {/* section 3 */}
      <DefaultDropdown />
      <DropdownSection />
    </div>
  );
}

export default a1AuditRepot;
// import React, { useState } from "react";
// import { CgDetailsMore } from "react-icons/cg";
// import { TbHexagonMinusFilled } from "react-icons/tb";
// import { PiAddressBook, PiBooksLight } from "react-icons/pi";
// import { CiBoxList } from "react-icons/ci";
// import { LuBookMinus } from "react-icons/lu";

// function A1AuditReport() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="relative w-1/2 md:w-full sm:w-full rounded-md flex flex-col ">
//       <div className="p-3 bg-white">
//         <div className="flex items-center space-x-4">
//           <CgDetailsMore
//             size={22}
//             onClick={toggleDropdown}
//             className="cursor-pointer"
//           />
//           <div className="text-gray-200 text-2xl">|</div>
//           <div className="flex items-center space-x-3">
//             <TbHexagonMinusFilled size={22} color="#fbecbf" />
//             <div className="flex items-center text-sm font-bold">
//               <span className="text-xl pr-2 font-bold text-orange-600">A1</span>
//               Audit Reports
//               <span className="text-sm font-normal pl-1 mb-1">v1.0</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dropdown Menu
//       {isDropdownOpen && ( */}
//         <div className="p-0 flex justify-center">
//           <div className="p-2 w-[95%] bg-blue-100 shadow-lg rounded-md">
//             <div className="flex justify-center space-x-8">
//               <div className="flex flex-col items-center">
//                 <PiAddressBook size={18} />
//                 <div className="text-xs mt-1">Digital Textbook</div>
//               </div>
//               <div className="flex flex-col items-center">
//                 <CiBoxList size={18} />
//                 <div className="text-xs mt-1">Outline</div>
//               </div>
//               <div className="flex flex-col items-center">
//                 <PiBooksLight size={18} />
//                 <div className="text-xs mt-1">Flashcards</div>
//               </div>
//               <div className="flex flex-col items-center">
//                 <LuBookMinus size={18} />
//                 <div className="text-xs mt-1">Glossary</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       {/* )} */}
//     </div>
//   );
// }

// export default A1AuditReport;
