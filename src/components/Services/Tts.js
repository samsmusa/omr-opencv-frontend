import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import { jsonStringigy, parseString } from "../../pages/Home";
import Spin from "../Spinner";

export default function Tts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, postData, isLoading, clear, error } = useAxios();
  const [pause, setPause] = React.useState(true);
  const [audioUrl, setAudioUrl] = React.useState(null);

  const convertAudo = (base64stiring) => {
    const blob = new Blob(
      [Uint8Array.from(atob(base64stiring), (c) => c.charCodeAt(0))],
      { type: "audio/mpeg" }
    );
    setAudioUrl(URL.createObjectURL(blob));
  };

  const onSubmit = async (formData) => {
    clear();
    setPause(false);
    const text = formData.ttsInput;
    const body = {
      audioConfig: {
        audioEncoding: "MP3",
      },
      input: {
        text: text,
      },
      voice: parseString(formData.voice),
    };
    console.log(body);
    await postData(
      "https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyBGp7fprqC8qRqSwBoo4-OkLSH6n_rs5MQ",
      // "https://jsonplaceholder.typicode.com/posts",
      body
    );
  };
  React.useEffect(() => {
    if (data) {
      convertAudo(data?.audioContent);
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 font-roboto">
        <div className="grid md:grid-cols-2 items-center px-3 py-2 border-b">
          <div className="flex items-center space-x-1 sm:pr-4">
            <button
              type="button"
              className="p-2 w-36 text-left text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <span>write something in english</span>
            </button>
            <button
              type="button"
              className=" text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <select
                required
                {...register("voice", { required: true })}
                defaultValue={jsonStringigy({
                  languageCode: "en-US",
                  name: "en-US-Standard-B",
                })}
                id="countries"
                className="bg-gray-50 p-1.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  "
              >
                <option
                  value={jsonStringigy({
                    languageCode: "en-US",
                    name: "en-US-Standard-B",
                  })}
                >
                  United States
                </option>
                <option
                  value={jsonStringigy({
                    languageCode: "bn-BD",
                    name: "bn-IN-Wavenet-B",
                  })}
                >
                  Bangla
                </option>
              </select>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <textarea
              onFocus={() => setPause(true)}
              {...register("ttsInput", { required: true })}
              id="editor"
              rows="8"
              className="block w-full px-0 text-3xl text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an something..."
              required
            ></textarea>
            {errors.ttsInput?.type === "required" && (
              <p role="alert" className="text-sm text-red-300">
                Field is required
              </p>
            )}
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full h-64  rounded-lg bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {pause ? (
                  <button
                    type="submit"
                    className="p-2.5 group h-24 w-24 bg-white rounded-full border-2"
                  >
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-5xl text-black"
                    />
                  </button>
                ) : (
                  <Spin isLoading={isLoading} error={error}>
                    <audio src={audioUrl} controls />
                  </Spin>
                )}

                <span className="sr-only">Pause video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
