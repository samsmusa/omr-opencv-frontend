import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AnalyticsAccordion from "../components/Accordions/AnalyticsAccordion";

export default function Analytics() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <div className="p-4">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <AnalyticsAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
