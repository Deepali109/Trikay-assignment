import React from "react";
import StudyJourney from "./StudyJourney";
import { LuScrollText } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { BsFilm } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
function LeftContent() {
  return (
    <div className="relative w-1/2 md:w-full sm:w-full flex flex-col">
      <StudyJourney />
      {/* Additional Resources part */}
      <div className="bg-white relative w-full p-5 mt-2 rounded-md">
        <div className=" text-lg text-gray-800 font-bold flex justify-start">
          Additional Resources
        </div>
        <div className="">
          {/* 1 */}
          <div className="flex justify-between mt-5 hover:bg-slate-100 p-2 rounded-md">
            <div className="flex justify-center items-center">
              <LuScrollText size={18} />
              <p className="text-sm ml-2 font-semibold text-gray-700">
                Redeem Textbook
              </p>
            </div>
            <MdOutlineKeyboardArrowRight size={18} />
          </div>
          {/*  */}
          {/* 2 */}
          <div className="flex justify-between mt-2 hover:bg-slate-100 p-2 rounded-md">
            <div className="flex justify-center items-center">
              <GoReport size={18} />
              <p className="text-sm ml-2 font-semibold text-gray-700">
                BluePrint Report
              </p>
            </div>
            <MdOutlineKeyboardArrowRight size={18} />
          </div>
          {/*  */}
          {/* 3 */}
          <div className="flex justify-between mt-2 hover:bg-slate-100 p-2 rounded-md">
            <div className="flex justify-center items-center">
              <BsFilm size={18} />
              <p className="text-sm ml-2 font-semibold text-gray-700">
                Tutorials
              </p>
            </div>
            <MdOutlineKeyboardArrowRight size={18} />
          </div>
          {/*  */}
          {/* 1 */}
          <div className="flex justify-between mt-2 hover:bg-slate-100 p-2 rounded-md">
            <div className="flex justify-center items-center">
              <FaRegFilePdf size={18} />
              <p className="text-sm ml-2 font-semibold text-gray-700">
                Course Updates
              </p>
            </div>
            <MdOutlineKeyboardArrowRight size={18} />
          </div>
          {/*  */}
          {/* 1 */}
          <div className="flex justify-between mt-2 hover:bg-slate-100 p-2 rounded-md">
            <div className="flex justify-center items-center">
              <FaRegFilePdf size={18} />
              <p className="text-sm ml-2 font-semibold text-gray-700">
                AICPA New Questions
              </p>
            </div>
            <MdOutlineKeyboardArrowRight size={18} />
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default LeftContent;
