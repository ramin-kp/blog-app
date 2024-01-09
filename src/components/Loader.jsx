import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{ height: "1000px", display: "flex", justifyContent: "center" }}
    >
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeColor="#fb8c00"
      />
    </div>
  );
}

export default Loader;
