import React from "react";
import { useParams } from "react-router-dom";

const ActivationAccount = () => {
  const { key } = useParams();

  console.log(key);
  return (
    <div>
      <h1>Key: {key}</h1>
    </div>
  );
};

export default ActivationAccount;
