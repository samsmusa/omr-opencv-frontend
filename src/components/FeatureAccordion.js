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
        <Accordion.Panel>
          <Accordion.Title className="p-5 border-b">
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faLanguage} className="" />
              </span>
              Translate Freeform Text?
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div>
              <Translate />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="p-5 border-y">
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faCommentDollar} className="" />
              </span>
              Text To Speech
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div>
              <Tts />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="p-5 border-y">
            <span class="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faComment} className="" />
              </span>
              Speech To Text
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div>
              <Stt />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
