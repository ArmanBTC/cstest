import axios, { AxiosError } from "axios";
import  { useState } from "react";

export const useRequestWithLoader_AMD = <DataType>() => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [data, setData] = useState<DataType>();
  const [statusCod, setStatusCod] = useState<number>();

  const InvokeSendRequest = async (method: string, url: string, body?: any) => {
    setLoading(true);
    let response;
    try {
      if (method.toLowerCase() === "get") {
        response = await axios.get<DataType>(url);
      } else if (method.toLowerCase() === "post") {
        response = await axios.post<DataType>(url, body);
      } else {
        setErrorMessage(
          `AMD ERROR useRequestWithLoader_AMD => The ${method} method is not accesst`
        );
      }
    } catch (ex) {
      const error = ex as AxiosError;
      if (error !== null)
        setErrorMessage(
          `AMD ERROR useRequestWithLoader_AMD => ${error.message}`
        );
      else
        setErrorMessage(
          `AMD ERROR useRequestWithLoader_AMD => ${JSON.stringify(ex)}`
        );
    }
    setData(response?.data);
    setStatusCod(response?.status);
    setLoading(false);
    return response?.status;
  };

  return { isLoading, errorMessage, data, InvokeSendRequest, statusCod };
};
