import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import A1auditreport from "../component/auditReports/a1AuditRepot";

function a1AauditReportFunction() {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="flex flex-col ml-16 bg-gray-200 h-[auto] w-full p-4 pt-10">
          <A1auditreport />
        </div>
      </div>
    </>
  );
}

export default a1AauditReportFunction;
