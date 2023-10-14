import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [test, setTest] = useState("null");

  async function GetTEST() {
    const response = await axios.get(
      "https://armantest.azurewebsites.net/api/amd/getname"
    );
    const data = await response.data;
    setTest(data);
    console.log(data);
  }

  useEffect(() => {
    GetTEST();
  }, []);

  return (
    <div className="indexPage">
      <div className="appColum-1"></div>

      <div className="container text-center appMargin">
        <div className="row align-items-center">
          <div className="col">OUR GALERIA {test}</div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-center appRow">
          <div className="col card"></div>
          <div className="col card"></div>
          <div className="col card"></div>
          <div className="col card"></div>
          <div className="col card"></div>
          <div className="col card"></div>
          <div className="col card"></div>
          <div className="col card"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
