import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFloppyDisk,
  faMicrophone,
  faPlay,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import RecordRTC, { invokeSaveAsDialog } from "recordrtc";

export default function Stt() {
  const [stream, setStream] = useState(null);
  const [start, setStart] = useState(false);
  const [blob, setBlob] = useState(null);
  const refVideo = useRef(null);
  const recorderRef = useRef(null);

  const handleRecording = async () => {
    // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    setStart(true);
    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "audio" });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    setStart(false);
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  };

  const handleSave = () => {
    invokeSaveAsDialog(blob);
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }

    // refVideo.current.srcObject = stream;
  }, [stream, refVideo]);
  return (
    <form>
      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 font-roboto">
        <div className="grid grid-cols-2 items-center  px-3 py-2 border-b dark:border-gray-600">
          <div class="flex items-center space-x-1 sm:pr-4 text-gray-400">
            <span>Speak something in english</span>
          </div>
          <div class="flex items-center space-x-1 sm:px-4"></div>
        </div>
        <div className="grid grid-cols-2">
          <div class="flex items-center justify-center mx-auto h-64 bg-white w-full">
            {!start && (
              <button
                onClick={handleRecording}
                type="button"
                class="p-2.5 group bg-gray-100 h-24 w-24 rounded-full"
              >
                <FontAwesomeIcon
                  icon={faMicrophone}
                  className="text-black text-5xl rounded-full"
                />
              </button>
            )}
            {start && (
              <button
                onClick={handleStop}
                type="button"
                class="p-2.5 group h-24 w-24 bg-red-500 rounded-full"
              >
                <FontAwesomeIcon
                  icon={faRecordVinyl}
                  className="text-5xl text-white"
                />
              </button>
            )}
            <div className="pl-2.5">
              {blob && !start && (
                <audio
                  src={URL.createObjectURL(blob)}
                  controls
                  // autoPlay
                  ref={refVideo}
                />
              )}
            </div>
          </div>

          <div class="flex items-center justify-center w-full"></div>
        </div>
      </div>
    </form>
  );
}
