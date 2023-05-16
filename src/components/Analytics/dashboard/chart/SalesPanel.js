import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COST_IMPRESSION, TYPE_VALUE_UP } from "../../../../data/all";
import ProfileTopCard from "../../../Cards/ProfileTopCard";

export default function SalesPanel() {
  return (
    <div className="bg-white p-2 border-gray-200 rounded-lg ">
      <div className="flex px-8 py-2 justify-start items-center">
        {TYPE_VALUE_UP.map((el) => (
          <ProfileTopCard data={el} />
        ))}
      </div>
      <div className="block p-6 bg-white  hover:bg-gray-100">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={200}
            data={COST_IMPRESSION}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="salesPanel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="75%" stopColor="#C706DA" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="impression"
              stroke="#C706DA"
              fill="url(#salesPanel)"
              fillOpacity={0.3}
              strokeWidth={3}
            />

            <ReferenceLine
              x={12}
              stroke="#121CCA"
              label="Max PV PAGE"
              strokeWidth={3}
              strokeDasharray={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
