import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../api/Api";
import { AxiosResponse } from "axios";

const ActivationAccount = () => {
  const { key } = useParams();
  const [isLoad, setIsLoad] = useState(false);
  const [statusCod, setstatusCod] = useState<number>(0);
  async function GetActivUser() {
    const response: AxiosResponse = await Api.ActivetUserAsync(key);
    setIsLoad(true);
    setstatusCod(response.status);
    setIsLoad(false);
  }
  useEffect(() => {
    GetActivUser();
  });

  console.log(key);
  return (
    <div>
      <h1>Key: {key}</h1>
      {isLoad ? <h2>Loading...</h2> : <h2>Status Cod {statusCod}!!!</h2>}
    </div>
  );
};

export default ActivationAccount;
