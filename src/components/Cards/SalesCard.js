import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ProfileTopCard from "../Cards/ProfileTopCard";
import { faker } from "@faker-js/faker";

import { MdDoubleArrow } from "react-icons/md";

const initialData = [
  { name: 1, cost: 40.11, impression: 100 },
  { name: 2, cost: 20.39, impression: 120 },
  { name: 3, cost: 10.37, impression: 150 },
  { name: 4, cost: 10.16, impression: 180 },
  { name: 5, cost: 20.29, impression: 200 },
  { name: 6, cost: 30, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 20.52, impression: 100 },
  { name: 9, cost: 10.79, impression: 200 },
  { name: 10, cost: 20.94, impression: 222 },
  { name: 11, cost: 40.3, impression: 210 },
  { name: 12, cost: 40.41, impression: 300 },
  { name: 13, cost: 20.1, impression: 50 },
  { name: 14, cost: 80, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 90, impression: 400 },
  { name: 17, cost: 30, impression: 200 },
  { name: 18, cost: 20, impression: 50 },
  { name: 19, cost: 30, impression: 100 },
  { name: 20, cost: 70, impression: 100 },
];

const data = Array(3)
  .fill()
  .map(() => {
    return {
      type: faker.person.firstName(),
      value: faker.number.float({ max: 100, precision: 0.01 }),
      up: faker.datatype.boolean(),
    };
  });

export default function SalesCard() {
  return (
    <div className="bg-white p-2 border-gray-200 rounded-lg">
      <div className="flex flex-col px-8 py-2 text-left  justify-start items-center">
        <MdDoubleArrow className="text-3xl self-start text-green-300" />
        <span className="self-start text-left text-xl text-black">
          Anual Sales
        </span>
        <span className="self-start text-xs text-gray-400">Anual</span>
        <span className="w-1/2 self-start text-4xl text-black relative">
          76,00k{" "}
          <button
            type="button"
            class=" absolute right-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Green
          </button>
        </span>
      </div>
      <div className="block p-6 bg-white  hover:bg-gray-100">
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart
            options={{ maintainAspectRatio: true }}
            width={700}
            height={300}
            data={initialData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="impression"
              stroke="#8884d8"
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
