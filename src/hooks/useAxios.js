import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async (url, config = {}) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, config);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const postData = async (url, body, config = {}) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, body, config);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const delData = async (url, config = {}) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(url, config);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const clear = () => {
    setIsLoading(false);
    setData(null);
    setError(null);
  };

  return {
    isLoading,
    data,
    error,
    getData,
    postData,
    delData,
    clear,
  };
};

export default useAxios;
