import React from "react";
import { TABLE_TYPE_PAGE } from "../../../../data/all";

export default function AcquisitionTable() {
  return (
    <div class="relative overflow-x-auto">
      <span className="text-sm self-start inline-block text-left pl-5 py-2 text-gray-500">
        Showing {TABLE_TYPE_PAGE.length} of {TABLE_TYPE_PAGE?.length} Rows
      </span>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase font-extrabold">
          <tr>
            <th scope="col" class="px-6 py-3">
              CHANNEL
            </th>
            <th scope="col" class="px-6 py-3">
              SESSIONS
            </th>
            <th scope="col" class="px-6 py-3">
              AVG. SESSION DURATION
            </th>
            <th scope="col" class="px-6 py-3">
              % NEW SESSIONS
            </th>
            <th scope="col" class="px-6 py-3">
              BOUNCE RATE
            </th>
            <th scope="col" class="px-6 py-3">
              GOAL COMPLETION
            </th>
            <th scope="col" class="px-6 py-3">
              PAGES/SESSION
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_TYPE_PAGE.map((el) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el?.type}
                </th>
                <td class="px-6 py-4">{el?.aSESSIONS}</td>
                <td class="px-6 py-4">{el?.aDURATION}</td>
                <td class="px-6 py-4">{el?.nSESSIONS}</td>
                <td class="px-6 py-4">{el?.rBOUNCE}</td>
                <td class="px-6 py-4">{el?.gCOMPLETION}</td>
                <td class="px-6 py-4">{el?.PAGES}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
