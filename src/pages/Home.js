import React from "react";
import Navbar from "../components/Navbar";
import FeatureAccordion from "../components/Accordions/FeatureAccordion";
import Sidebar from "../components/Sidebar";

export const jsonStringigy = (obj) => {
  return JSON.stringify(obj);
};

export const parseString = (str) => {
  return JSON.parse(str);
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <div className="p-4">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <FeatureAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
