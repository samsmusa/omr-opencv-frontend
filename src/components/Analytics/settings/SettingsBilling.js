import React from "react";
import { IoMdAdd } from "react-icons/io";
import BillingHistory from "./tables/BillingHistory";

export default function SettingsBilling() {
  return (
    <div>
      <div className="text-left ">
        <p className="text-3xl">Billing Settings</p>
        <span className="text-xs text-gray-400">
          Manage your usages and billing here
        </span>
      </div>
      <div className="border my-5"></div>

      <div className="text-left ">
        <p className="text-xl">Payment method</p>
        <span className="text-xs text-gray-400">
          update your billing details and address
        </span>
      </div>
      <div className="border my-5"></div>
      <div className="grid grid-cols-3">
        <div className="text-left col-span-1">
          <p className="text-xl">Contact Email</p>
          <span className="text-xs text-gray-400">
            Where should invoices be sent?
          </span>
        </div>
        <div className="text-left col-span-2">
          <div class="flex items-center mb-1">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              for="default-radio-1"
              class="ml-2 text-xl font-medium text-gray-900 "
            >
              use account email
            </label>
          </div>
          <div className="inline-block border rounded-lg text-gray-300 px-2 ml-4">
            example@gmail.com
          </div>
          <div className="mt-3">
            <div class="flex items-center ">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                for="default-radio-2"
                class="ml-2 text-lg font-medium text-gray-900 "
              >
                use alternative
              </label>
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-gray-50 border w-1/2 ml-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  "
              placeholder="name@flowbite.com"
            />
          </div>
        </div>
      </div>

      <div className="border my-5"></div>
      <div className="grid grid-cols-3">
        <div className="text-left col-span-1">
          <p className="text-xl">Card details</p>
          <span className="text-xs text-gray-400">
            Select default payment method
          </span>
        </div>
        <div className="text-left col-span-2">
          <a
            alt="visa card"
            href="#"
            class="flex mt-4 flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Visa ending in 1234
              </p>
              <p class="mb-3 font-normal text-gray-700 ">
                Expiry 06/2024
                <br />
                Set as default
              </p>
            </div>
          </a>
          <a
            alt="visa card"
            href="#"
            class="flex mt-4 flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100"
          >
            <img
              class="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMD2VKtLgKbfFAiOWATQbRtBzeNbl9xuYLBvYPlOuv8MKzpqg&s"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                master ending with 1234
              </p>
              <p class="mb-3 font-normal text-gray-700 ">
                Expiry 06/2024
                <br />
                Set as default
              </p>
            </div>
          </a>

          <div className="flex gap-2 justify-start items-center text-xl mt-3 text-blue-500">
            <IoMdAdd /> add another card
          </div>
        </div>
      </div>
      <div>
        <p className="my-3 text-left text-3xl">Billing history</p>
        <BillingHistory />
      </div>
    </div>
  );
}
