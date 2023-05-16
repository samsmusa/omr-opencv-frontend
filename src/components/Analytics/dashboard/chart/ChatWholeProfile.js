import React from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COST_IMPRESSION } from "../../../../data/all";

export default function ChartWholeProfile() {
  return (
    <div className="bg-white p-2 border-gray-200 rounded-lg ">
      <div className="block p-6 bg-white  hover:bg-gray-100">
        <ResponsiveContainer width="100%" height={290}>
          <ComposedChart
            width={500}
            height={200}
            data={COST_IMPRESSION}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="splitColor1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#3E68F6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              // type="monotone"
              dataKey="cost"
              stroke="#8884d8"
              fill="#8884d8"
              animationDuration={300}
              strokeWidth={3}
            />
            <Line
              // type="natural"
              dataKey="impression"
              stroke="#08E3B2"
              animationDuration={300}
              strokeWidth={3}
            />
            <ReferenceLine
              x={12}
              stroke="#121CCA"
              label="Max PV PAGE"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="impression"
              stroke="#08E3B2"
              fill="url(#splitColor1)"
              fillOpacity={0.3}
              strokeWidth={3}
              activeDot={{ stroke: "blue", strokeWidth: 2, r: 10 }}
            />
            <Area
              type="monotone"
              dataKey="cost"
              stroke="#B128D3"
              fill="url(#splitColor1)"
              fillOpacity={0.3}
              strokeWidth={3}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
