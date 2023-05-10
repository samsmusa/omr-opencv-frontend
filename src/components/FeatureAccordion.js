import React from "react";
import Translate from "./Translate";
import Tts from "./Tts";
import Stt from "./Stt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCommentDollar,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "flowbite-react";

export default function FeatureAccordion() {
  return (
    <>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel className="border-b-2">
          <Accordion.Title className="p-5 border-b">
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faLanguage} className="" />
              </span>
              Translate Freeform Text?
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <Translate />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="p-5 border-b">
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faCommentDollar} className="" />
              </span>
              Text To Speech
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <Tts />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="p-5 border-b">
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faComment} className="" />
              </span>
              Speech To Text
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <Stt />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faLanguage} className="" />
              </span>
              Translate Freeform Text?
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          class="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <Translate />
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faCommentDollar} className="" />
              </span>
              Text To Speech
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          class="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <Tts />
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faComment} className="" />
              </span>
              Speech To Text
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          class="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <Stt />
          </div>
        </div>
      </div>
    </>
  );
}
