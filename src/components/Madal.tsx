import React, { FC } from "react";

interface Madalprops {
  message: string;
  statusCod: number;
}

const Madal: FC<Madalprops> = (props) => {
  return (
    <div
      className="madal"
      style={{
        boxShadow: `0 0 15px 0 ${
          props.statusCod === 201 ? "#159703" : "#970404"
        }`,
      }}
    >
      <h1 style={{ color: props.statusCod === 201 ? "#159703" : "#970404" }}>
        StatusCod: {props.statusCod}
      </h1>
      <h2>{props.message}</h2>
      <button
        type="button"
        className="btn-close closeAmd"
        aria-label="Close"
        onClick={(e) => e.currentTarget.parentElement?.remove()}
      ></button>
    </div>
  );
};

export default Madal;
