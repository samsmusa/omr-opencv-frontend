import React from "react";
import ChartArea from "./chart/ChartArea";
import CharPlot from "./chart/ChartPlot";
import ChartPie from "./chart/ChartPie";
import Sessions from "../../Cards/Sessions";
import AcquisitionTable from "./tables/AcquisitionTable";
import { faker } from "@faker-js/faker";

const data = [
  "CHANNEL",
  " SESSIONS",
  " AVG. SESSION DURATION",
  " % NEW SESSIONS",
  " BOUNCE RATE",
  " GOAL COMPLETION",
  //   " PAGES/SESSION",
].map((name) => {
  return {
    type: name,
    percent: faker.number.float({ max: 100, precision: 0.01 }),
    value: faker.number.int({ max: 1000000, min: 9999 }),
    upd: faker.datatype.boolean(0.5),
  };
});
// const data = Array(6)
//   .fill()
//   .map((_, i) => {
//     return { percent: `${i + 1}%`, up: false, value: i + 10000 };
//   });

export default function Acquisition() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-8 ">
        <ChartArea />
        <CharPlot />
        <ChartPie />
        <ChartPie />
      </div>
      <div className="grid grid-cols-6 gap-5 mt-8">
        {data.map((val) => {
          return <Sessions data={val} />;
        })}
      </div>
      <div className="mt-8 rounded-md bg-white text-left">
        <AcquisitionTable />
      </div>
    </div>
  );
}
