import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { MdMusicNote } from "react-icons/md";
const Footer = () => {
  return (
    <footer className=" bg-slate-300 w-full p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center relative w-1/2 md:text-left space-y-2">
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="text-gray-800 text-sm font-bold hover:text-gray-600"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-gray-800 text-sm font-bold hover:text-gray-600"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-800 text-sm font-bold hover:text-gray-600"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-800 text-sm font-bold hover:text-gray-600"
            >
              Cookies Settings
            </a>
          </div>
          <p className="text-gray-600 text-sm pt-5 pl-2">
            Material from Uniform CPA Examination, Selected Questions and
            Unofficial Answers, Copyright © 1989-2023, by the American Institute
            of Certified Public Accountants, is reprinted and/or adapted with
            permission. No further use nor distribution is permitted.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-4 relative w-1/2 items-center space-y-4 ">
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-gray-800 text-sm font-bold">
                Join our Study Groups:
              </span>
            </div>
            <div className="flex space-x-2 mt-3 mb-8">
              <div className="bg-white flex items-center justify-center text-black px-2 py-1 rounded-full text-sm">
                <FaFacebook size={18} color="blue" />
                <span className="pl-1 text-xs font-semibold">FAR</span>
              </div>
              <div className="bg-white flex items-center justify-center text-black px-2 py-1 rounded-full text-sm">
                <FaFacebook size={18} color="#db6b2e" />
                <span className="pl-1 text-xs font-semibold">AUD</span>
              </div>
              <div className="bg-white flex items-center justify-center text-black px-2 py-1 rounded-full text-sm">
                <FaFacebook size={18} color="#86657a" />
                <span className="pl-1 text-xs font-semibold">REG</span>
              </div>
              <div className="bg-white flex items-center justify-center text-black px-2 py-1 rounded-full text-sm">
                <FaFacebook size={18} color="#146e88" />
                <span className="pl-1 text-xs font-semibold">BAR</span>
              </div>
              <div className="bg-white flex items-center justify-center text-black px-2 py-1 rounded-full text-sm">
                <FaFacebook size={18} color="#e39500" />
                <span className="pl-1 text-xs font-semibold">ISC</span>
              </div>
              <div className="bg-white flex items-center justify-center text-black px-2 py-1 rounded-full text-sm">
                <FaFacebook size={18} color="#a748a8" />
                <span className="pl-1 text-xs font-semibold">TCP</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full pl-4 pr-4 items-center  ">
            <button className="text-gray-800 flex items-center text-sm font-bold hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg">
              <IoMdDownload
                size={20}
                color="#383b46"
                className="hover:scale-110"
              />
              <span className="ml-1 pb-1">Download our Apps</span>
            </button>

            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <a href="#" className="hover:text-gray-800">
                <FaInstagram
                  size={22}
                  color="#383b46"
                  className="hover:scale-110"
                />
              </a>
              <a href="#" className="hover:text-gray-800">
                <CiYoutube
                  size={22}
                  color="#383b46"
                  className="hover:scale-110"
                />
              </a>{" "}
              {/* Replace with actual social media icons */}
              <a href="#" className="hover:text-gray-800">
                <FaXTwitter
                  size={22}
                  color="#383b46"
                  className="hover:scale-110"
                />
              </a>
              <a href="#" className="hover:text-gray-800">
                <FaFacebookF
                  size={22}
                  color="#383b46"
                  className="hover:scale-110"
                />
              </a>
              <a href="#" className="hover:text-gray-800">
                <FaLinkedinIn
                  size={22}
                  color="#383b46"
                  className="hover:scale-110"
                />
              </a>
              <a href="#" className="hover:text-gray-800">
                <MdMusicNote
                  size={22}
                  color="#383b46"
                  className="hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
