import React from "react";

export default function SettingsSecurity() {
  return (
    <div>
      <p className="text-3xl text-left">My Notification</p>
      <div className="border my-4"></div>
      <div className="p-4">
        <p className="text-left text-xl">Notify me when...</p>
        <div className="my-4 px-4">
          <div class="flex items-center mb-4 text-lg">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Default checkbox
            </label>
          </div>
          <div class="flex items-center mb-4 text-lg">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Checked state
            </label>
          </div>
          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Checked state
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-8 p-4">
        <div className="text-left">
          <p className="text-xl font-bold">Mobile push Notification</p>
          <p className="text-sm text-gray-400 ">
            Receive push Notification whenever your organisation requires your
            attentions
          </p>
        </div>
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center my-8  px-4 py-2">
        <div className="text-left">
          <p className="text-xl font-bold">Desktop Notification</p>
          <p className="text-sm text-gray-400 ">
            Receive desktop Notification whenever your organisation requires
            your attentions
          </p>
        </div>
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center my-8  px-4 py-2">
        <div className="text-left">
          <p className="text-xl font-bold">Email Notification</p>
          <p className="text-sm text-gray-400 ">
            Receive email whenever your organisation requires your attentions
          </p>
        </div>
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <p className="text-3xl text-left">My Settings</p>
      <div className="border my-4"></div>
      <div className="flex justify-between items-center my-8 p-4">
        <div className="text-left">
          <p className="text-xl font-bold">Appearance</p>
          <p className="text-sm text-gray-400 ">
            Customize how you theams looks on your devices
          </p>
        </div>
        <div>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Choose a Theme</option>
            <option value="US">Light</option>
            <option value="CA">Dark</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center my-8  px-4 py-2">
        <div className="text-left">
          <p className="text-xl font-bold">Two-factor authentication</p>
          <p className="text-sm text-gray-400 ">
            Keep your account secure by enabling 2FA via SMS or using a
            remporary one-time passcode.
          </p>
        </div>
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center my-8  px-4 py-2">
        <div className="text-left">
          <p className="text-xl font-bold">Email Notification</p>
          <p className="text-sm text-gray-400 ">
            Receive email whenever your organisation requires your attentions
          </p>
        </div>
        <div>
          <select
            id="countries"
            class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Choose a Language</option>
            <option value="US">Bn</option>
            <option value="CA">en</option>
          </select>
        </div>
      </div>
    </div>
  );
}
