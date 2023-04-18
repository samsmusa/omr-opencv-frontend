import React from "react";

export default function Table({ data }) {
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
              id
            </th>
            <th scope="col" class="px-6 py-3">
              exam Name
            </th>
            <th scope="col" class="px-6 py-3">
              roll
            </th>
            <th scope="col" class="px-6 py-3">
              Image
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
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el?.id}
                </th>
                <td class="px-6 py-4">
                  {el?.exam?.name}/class-{el?.exam?.classes?.name}
                </td>
                <td class="px-6 py-4">{handleRoll(el?.file)}</td>
                <td class="px-6 py-4">
                  <img className="w-10 h-10" src={el.file} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
