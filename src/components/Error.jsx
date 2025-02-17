import React from "react";

function ErrorPage({ setisSignedIn }) {
  const tryAgain = () => {
    setisSignedIn(true);
  };
  return (
    <div style={{ color: "white" }}>
      <button
        onClick={tryAgain}
        className=" border-white rounded-pill ms-5 fs-4 fw-bolder"
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorPage;
