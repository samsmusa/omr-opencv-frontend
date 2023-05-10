import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";
import Spin from "./Spinner";

export default function Tts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, postData, isLoading, clear, error } = useAxios();
  const [pause, setPause] = React.useState(false);
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
    const text = formData.ttsInput;
    const body = {
      audioConfig: {
        audioEncoding: "MP3",
      },
      input: {
        text: text,
      },
      voice: {
        languageCode: "en-US",
        name: "en-US-Standard-B",
      },
    };
    await postData(
      // "https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyBGp7fprqC8qRqSwBoo4-OkLSH6n_rs5MQ",
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
  };
  React.useEffect(() => {
    if (data) {
      convertAudo(data?.audioContent);
    }
  }, [data]);

  return (
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 font-roboto">
      <div className="grid grid-cols-2 items-center  px-3 py-2 border-b dark:border-gray-600">
        <div class="flex items-center space-x-1 sm:pr-4 text-gray-400">
          <span>write something in english</span>
        </div>
        <div class="flex items-center space-x-1 sm:px-4"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2">
          <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <textarea
              onFocus={() => setPause(true)}
              {...register("ttsInput", { required: true })}
              id="editor"
              rows="8"
              class="block w-full px-0 text-3xl text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an something..."
              required
            ></textarea>
            {errors.ttsInput?.type === "required" && (
              <p role="alert" className="text-sm text-red-300">
                Field is required
              </p>
            )}
          </div>

          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col items-center justify-center w-full h-64  rounded-lg bg-gray-50">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                {pause ? (
                  <button
                    onClick={() => {
                      setPause(!pause);
                      handleSubmit(onSubmit)();
                    }}
                    type="submit"
                    class="p-2.5 group h-24 w-24 bg-white rounded-full border-2"
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

                <span class="sr-only">Pause video</span>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
