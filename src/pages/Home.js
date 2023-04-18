import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import RenderTableOmr from "../components/RenderTableOmr";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Home() {
  const [exams, setExams] = React.useState([]);
  const [relaod, setRelaod] = React.useState(false);

  React.useEffect(() => {
    const url = "http://127.0.0.1:8000/omr/exam/";
    axios.get(url).then((response) => {
      setExams(response.data);
    });
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setRelaod(true);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("exam_id", data.exam_id);
    let url = "http://127.0.0.1:8000/omr/anonymous-upload/";
    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        reset();
        setRelaod(false);
        toast.success("image uploaded successfully");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="container mx-auto">
      <div class="w-full flex justify-center p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    {...register("file")}
                    required
                  />
                </label>
              </div>
            </div>
            <div class="flex flex-col self-center  w-1/2 justify-between p-4 leading-normal">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Exam
              </label>
              <select
                {...register("exam_id", { required: true })}
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {exams?.map((el) => (
                  <option value={el.id}>{el.name}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit OMR
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            No Exam Created?{" "}
            <Link
              to={"exams"}
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create Exam
            </Link>
          </div>
        </form>
      </div>
      <p class="max-w-lg text-left my-4 text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
        All Uploads
      </p>
      <RenderTableOmr reload={relaod} />
    </div>
  );
}
