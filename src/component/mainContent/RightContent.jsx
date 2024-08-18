import React from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StudyTimePieChart from "./StudyTimePieChart";
import { BiBarChartAlt2 } from "react-icons/bi";

function RightContent() {
  const totalTime = 232; // Total time in minutes (3h 52m = 232 minutes)
  const graphPercentage = ((232 - 202) / 232) * 100;

  return (
    <div className=" relative w-1/2 md:w-full sm:w-full h-full ml-5 md:ml-0 sm:ml-0">
      {/* schedule your exam */}
      <div className="bg-white flex justify-between p-2 ml-5 md:ml-5 md:mt-2 sm:mt-2 sm:ml-0 rounded-md">
        <div className="flex justify-center items-center">
          <RiCalendarScheduleLine />
          <h5 className="text-xs font-bold ml-2">Schedule your exam</h5>
        </div>
        <div className="bg-blue-50 h-7 w-7 rounded-md flex justify-center items-center">
          <SlNote />
        </div>
      </div>

      {/* Today's task */}
      <div className="bg-white flex flex-col justify-between md:ml-5 md:mt-2 sm:mt-2 sm:ml-0 p-2 ml-5 mt-2 rounded-md">
        <div className="flex justify-between p-2">
          <div className="text-md font-bold">Today's tasks</div>
          <IoCalendarClearOutline />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h5 className="text-sm font-bold mt-2">
              You have not set up your Study Plan.
            </h5>
          </div>
          <div className="">
            <h5 className="text-sm font-semibold text-gray-600 mt-4 pl-14 pr-14">
              Astudy can be a real game-changer! It'll help you manage your
              study time better and easily reach your study goals!
            </h5>
          </div>
          <div className="flex justify-center">
            <button className=" bg-gray-800 text-white font-bold p-2 rounded-md mt-7 mb-7 hover:bg-gray-700">
              Create your Study Plan
            </button>
          </div>
        </div>
      </div>

      {/* register */}
      <div className="bg-white flex flex-col items-start md:ml-5 md:mt-2 sm:mt-2 sm:ml-0 p-4 ml-5 mt-2 rounded-md">
        <div className="">
          <h5 className="text-md text-gray-800 font-bold">
            Register for Class
          </h5>
        </div>
        <div className="">
          <h5 className="text-sm text-gray-700 font-bold mt-4">LiveOnline</h5>
        </div>
        <div className="bg-blue-100 w-full flex items-center justify-start mt-4">
          <h5 className="text-sm text-gray-700 font-bold flex p-3 rounded-md">
            Thu, Sep 12-Thu, Oct 10
          </h5>
        </div>
        <button className=" bg-gray-800 w-full text-white font-bold p-2 rounded-md mt-7 mb-7 hover:bg-gray-700">
          Details
        </button>
      </div>

      {/* study time */}
      <div className="bg-white md:ml-5 md:mt-2 sm:mt-2 sm:ml-0 p-4 ml-5 mt-2 rounded-md">
        <div className="flex justify-between p-2">
          <div className="text-md font-bold">Study Time</div>
          <BiBarChartAlt2 />
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="total-time flex items-center justify-center text-center mb-6 w-full">
            {/* Render StudyTimePieChart */}
            <StudyTimePieChart />
          </div>
          <div className="time-distribution w-full">
            {[
              { label: "Concept Videos", time: "1m", color: "bg-blue-500" },
              { label: "MCQs", time: "26m", color: "bg-green-500" },
              { label: "TBSS", time: "-", color: "bg-purple-500" },
              {
                label: "Practice Tests / Flashcards",
                time: "2m",
                color: "bg-yellow-500",
              },
              {
                label: "Mini / Simulated Exams",
                time: "1m",
                color: "bg-orange-500",
              },
              { label: "Others", time: "3h 22m", color: "bg-gray-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="time-item flex justify-between items-center"
              >
                <div className="flex items-center">
                  <span
                    className={`dot w-2 h-2 rounded-full ${item.color} mr-1`}
                  ></span>
                  <p className="text-xs text-gray-600 font-semibold">
                    {item.label}
                  </p>
                </div>
                <span className="text-xs time text-gray-800 font-bold">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
