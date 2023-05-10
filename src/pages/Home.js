import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FeatureAccordion from "../components/FeatureAccordion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <div class="p-4">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <FeatureAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
