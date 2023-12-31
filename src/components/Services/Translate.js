import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import Spin from "../Spinner";

export default function Translate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, postData, isLoading, clear, error } = useAxios();
  const [pause, setPause] = React.useState(true);
  const [trtext, setTrtext] = React.useState(null);

  const onSubmit = async (formData) => {
    clear();
    setPause(!pause);
    setTrtext(null);
    const text = formData.inputText;
    const body = {
      q: [text],
      source: formData.source,
      target: formData.target,
    };
    await postData(
      "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBGp7fprqC8qRqSwBoo4-OkLSH6n_rs5MQ",
      // "https://jsonplaceholder.typicode.com/posts",
      body
    );
  };
  React.useEffect(() => {
    if (data) {
      let text = "";
      data?.data?.translations?.forEach((element) => {
        text += element.translatedText;
      });
      setTrtext(text);
    }
  }, [data]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 font-roboto">
        <div className="grid md:grid-cols-2 items-center  px-3 py-2 border-b dark:border-gray-600">
          <div className="flex items-center space-x-1 sm:pr-4">
            <button
              type="button"
              className="p-2 w-36 text-left text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <span>Translate From</span>
            </button>
            <button
              type="button"
              className=" text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <select
                {...register("source", { required: true })}
                defaultValue={"en"}
                id="countries"
                className="bg-gray-50 p-1.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  "
              >
                <option value="en">United States</option>
                <option value="bn">Bangla</option>
              </select>
            </button>
          </div>
          <div className="flex items-center space-x-1 sm:pr-4">
            <button
              type="button"
              className="p-2 w-36 text-left text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <span>Translate To</span>
            </button>
            <button
              type="button"
              className="text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <select
                {...register("target", { required: true })}
                defaultValue={"bn"}
                id="countries"
                className="bg-gray-50 p-1.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
              >
                <option value="bn">Bangla</option>
                <option value="en">United States</option>
              </select>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <textarea
              id="editor"
              rows="8"
              onFocus={() => setPause(true)}
              {...register("inputText", { required: true })}
              className="block w-full px-0 text-3xl text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an something..."
              required
            ></textarea>
          </div>
          <div className="">
            {pause ? (
              <div className="flex flex-col items-center justify-center w-full h-64  rounded-lg bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <button
                    type="submit"
                    className="p-2.5 group h-24 w-24 bg-white rounded-full border-2"
                  >
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-5xl text-black"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <Spin isLoading={isLoading} error={error}>
                <div className="px-4 py-2">
                  <p className="block w-full text-left px-0 text-3xl text-gray-800 ">
                    {trtext}
                  </p>
                </div>
              </Spin>
            )}

            <span className="sr-only">Pause video</span>
          </div>
        </div>
      </div>
    </form>
  );
}
