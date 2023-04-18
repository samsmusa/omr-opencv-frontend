import React from "react";

export default function Table2({ data }) {
  const handleRoll = (value) => {
    // value.split("/").slice(0, -1).join(".");
    const filename = value.split("/").slice(-1)[0];
    return filename.split(".")[0];
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              roll
            </th>
            <th scope="col" class="px-6 py-3">
              marks
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => {
            return (
              <tr
                key={el?.id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 py-4">{el?.roll}</td>
                <td class="px-6 py-4">{el?.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
