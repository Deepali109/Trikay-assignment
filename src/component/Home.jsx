import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import StudyJourney from "./mainContent/StudyJourney";
import RightContent from "./mainContent/RightContent";
import LeftContent from "./mainContent/LeftContent";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col ml-16 bg-gray-200 w-full p-4 pt-10">
        <div className="flex flex-row sm:flex-col  md:flex-row">
          <LeftContent />
          <RightContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
