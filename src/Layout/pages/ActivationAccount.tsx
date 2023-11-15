import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Api } from "../../api/Api";
import { AxiosResponse } from "axios";

const ActivationAccount = () => {
  const { key } = useParams();

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log(id);

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
  }, []);

  console.log(key);
  return (
    <div className="activetContainer">
      <div className="activetSection">
        <h3>Key: {key}</h3>
        {isLoad ? <h2>Loading...</h2> : <h2>Status Cod {statusCod}!!!</h2>}
        <Link to={"/signin"}>Go to sign in</Link>
      </div>
    </div>
  );
};

export default ActivationAccount;
