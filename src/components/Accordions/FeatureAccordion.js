import React from "react";
import Translate from "../Services/Translate";
import Tts from "../Services/Tts";
import Stt from "../Services/Stt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCommentDollar,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "flowbite-react";
import OCR from "../Services/OCR";

export default function FeatureAccordion() {
  return (
    <>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title id="#translate" className="p-5 border-b">
            <span className="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faLanguage} className="" />
              </span>
              Translate Freeform Text?
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div className="py-3">
              <Translate />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title id="tts" className="p-5 border-y">
            <span className="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faCommentDollar} className="" />
              </span>
              Text To Speech
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div className="py-3">
              <Tts />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title id="stt" className="p-5 border-y">
            <span className="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faComment} className="" />
              </span>
              Speech To Text
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div className="py-3">
              <Stt />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title id="ocr" className="p-5 border-y">
            <span className="flex items-center">
              <span className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-2">
                <FontAwesomeIcon icon={faComment} className="" />
              </span>
              Optical Character Recognition
            </span>
          </Accordion.Title>
          <Accordion.Content>
            <div className="py-3">
              <OCR />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
