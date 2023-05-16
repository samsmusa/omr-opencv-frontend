import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import Spin from "../Spinner";

export default function OCR() {
  const { data, postData, isLoading, clear, error } = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pause, setPause] = React.useState(true);
  const [image, setImage] = useState(null);
  const [imageText, setImageText] = useState(null);

  const handleImageShow = async (event) => {
    setPause(true);
    setImageText(null);
    const file = event.target.files[0];

    if (file) {
      const imgFile = await readAsDataURL(file);

      setImage(imgFile.data);
    } else {
      setImage(null);
    }
  };

  function readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        return resolve({
          data: fileReader.result.split(",")[1],
          name: file.name,
          size: file.size,
          type: file.type,
        });
      };
      fileReader.readAsDataURL(file);
    });
  }

  const onSubmit = async (data) => {
    setPause(false);
    clear();
    let body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: "TEXT_DETECTION",
              maxResults: 1,
            },
          ],
          imageContext: {
            languageHints: [data.language],
          },
        },
      ],
    };

    await postData(
      "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBGp7fprqC8qRqSwBoo4-OkLSH6n_rs5MQ",
      // "https://jsonplaceholder.typicode.com/posts",
      body
    );
  };
  React.useEffect(() => {
    if (data) {
      let result = data?.responses;
      if (result) {
        setImageText(result[0]?.fullTextAnnotation?.text);
      }
    }
  }, [data]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 font-roboto">
        <div className="grid md:grid-cols-2 items-center  px-3 py-2 border-b ">
          <div className="flex items-center space-x-1 sm:pr-4">
            <button
              type="button"
              className="p-2 w-36 text-left text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <span>Image From</span>
            </button>
            <button
              type="button"
              className=" text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <select
                required
                {...register("language", { required: true })}
                defaultValue="en"
                id="countries"
                className="bg-gray-50 p-1.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="en">United States</option>
                <option value="bn">Bangla</option>
              </select>
            </button>
          </div>
          <div className="flex items-center space-x-1 sm:px-4">
            <button
              type="button"
              className="p-2 w-36 hidden md:block text-left text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <span>OCR Text</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100  dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {!image ? (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              ) : (
                <div className="px-4 py-2">
                  <img
                    className="h-56"
                    src={`data:image/jpeg;base64,${image}`}
                    alt="Uploade"
                  />
                </div>
              )}
              <input
                onFocus={() => setPause(true)}
                onChange={handleImageShow}
                id="dropzone-file"
                type="file"
                className="hidden"
                required
              />
            </label>
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
                    <div className="px-4 py-2">
                      <p>{imageText}</p>
                    </div>
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
