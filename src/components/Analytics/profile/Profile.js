import React from "react";
import ChartWholeProfile from "../dashboard/chart/ChatWholeProfile";
import SalesPanel from "../dashboard/chart/SalesPanel";
import SalesCard from "../../Cards/SalesCard";
import DeviceCard from "../../Cards/DeviceCard";

export default function Profile() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <SalesCard />
        <SalesCard />
        <SalesCard />
      </div>
      <div className="grid grid-cols-7 gap-4 my-4">
        <div className="col-span-5">
          <ChartWholeProfile />
        </div>
        <div className="col-span-2">
          <DeviceCard />
        </div>
      </div>
      <SalesPanel />
    </div>
  );
}
