import React from "react";
import { useAppDispatch, useAppSelector } from "../../appRedux/store";
import { GetIndexData } from "../../appRedux/appSlises/IndexActionCreateor";

const Index = () => {
  const dispatch = useAppDispatch();
  const test = useAppSelector((state) => state.indexPageReducer.test);

  function GetTest() {
    dispatch(GetIndexData());
  }

  return (
    <div className="indexPage">
      <div className="appColum-1"></div>

      <div className="container text-center appMargin">
        <div className="row align-items-center">
          <div className="col">OUR OFFERTS</div>
          {test !== null ? (
            <h1 style={{ color: "#fff" }}>{test}</h1>
          ) : (
            <h1>NULL</h1>
          )}
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
          <button onClick={GetTest}>GET TEST</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
