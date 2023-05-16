import { faMicrophone, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RecordRTC from "recordrtc";
import useAxios from "../../hooks/useAxios";
import Spin from "../Spinner";

export default function Stt() {
  const { data, postData, isLoading, clear, error } = useAxios();

  const { register, getValues } = useForm();
  const [start, setStart] = useState(false);
  const [blob, setBlob] = useState(null);
  const [audioText, setAudioText] = React.useState("say something...");
  const refAudio = useRef(null);
  const recorderRef = useRef(null);

  const handleRecording = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    setStart(true);
    recorderRef.current = new RecordRTC(mediaStream, { type: "audio" });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    setStart(false);
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
      const reader = new FileReader();
      reader.readAsDataURL(recorderRef.current.getBlob());
      reader.onloadend = () => {
        const base64data = reader.result.split(",")[1];
        onSubmit(base64data);
      };
    });
  };

  const onSubmit = async (base64data) => {
    clear();
    const body = {
      config: {
        encoding: "mp3",
        sampleRateHertz: 16000,
        languageCode: getValues("language"),
      },
      audio: {
        content: base64data,
      },
    };
    console.log(body);

    await postData(
      "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyBGp7fprqC8qRqSwBoo4-OkLSH6n_rs5MQ",
      // "https://jsonplaceholder.typicode.com/posts",
      body
    );
  };
  React.useEffect(() => {
    if (data) {
      let result = data?.results;
      if (result) {
        setAudioText(result[0]?.alternatives[0]?.transcript);
      }
    }
  }, [data]);
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 font-roboto">
        <div className="grid md:grid-cols-2 items-center  px-3 py-2 border-b dark:border-gray-600">
          <div className="flex items-center space-x-1 sm:pr-4 text-gray-400">
            <button
              type="button"
              className="p-2 w-36 text-left text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <span>say something</span>
            </button>
            <button
              type="button"
              className=" text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <select
                required
                {...register("language", { required: true })}
                defaultValue="en-US"
                id="countries"
                className="bg-gray-50 p-1.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  "
              >
                <option value="en-US">United States</option>
                <option value="bn-BD">Bangla</option>
              </select>
            </button>
          </div>
          <div className="flex items-center space-x-1 sm:px-4"></div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="flex items-center justify-center mx-auto h-64 bg-white w-full">
            {!start && (
              <button
                onClick={handleRecording}
                type="button"
                className="p-2.5 group bg-gray-100 h-24 w-24 rounded-full"
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
                className="p-2.5 group h-24 w-24 bg-red-500 rounded-full"
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
                  ref={refAudio}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full h-64  rounded-lg bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Spin isLoading={isLoading} error={error}>
                  <p className="block w-full text-left px-0 text-3xl text-gray-800 ">
                    {audioText}
                  </p>
                </Spin>

                <span className="sr-only">Pause video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
