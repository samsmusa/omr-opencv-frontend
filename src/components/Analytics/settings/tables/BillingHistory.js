import React from "react";
import { BILLING_HISTORY } from "../../../../data/all";

export default function BillingHistory() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col-4" class="px-6 py-3">
              invoices
            </th>
            <th scope="col" class="px-6 py-3">
              amount
            </th>
            <th scope="col" class="px-6 py-3">
              date
            </th>
            <th scope="col" class="px-6 py-3">
              status
            </th>
            <th scope="col" class="px-6 py-3">
              users to plan
            </th>
          </tr>
        </thead>
        <tbody>
          {BILLING_HISTORY.map((el) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.invoice}
                </th>
                <td class="px-6 py-4">{el.amount}</td>
                <td class="px-6 py-4">{el.date}</td>
                <td class="px-6 py-4">{el.status}</td>
                <td>100+</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
