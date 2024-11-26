import React from "react";
import { useState } from "react";

const Signup = ({
  signupDetails,
  setsignupDetails,
  setisSignedIn,
  setIsSignedUp,
}) => {
  const signupHandler = () => {
    console.log(signupDetails);

    localStorage.setItem("userData", JSON.stringify(signupDetails));
    if (!signupDetails.email || !signupDetails.password) {
      alert("Enter Username or password");
    } else {
      setisSignedIn(true);
      setIsSignedUp(false);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Enter your Username"
        onChange={(e) => {
          setsignupDetails((prev) => ({
            ...prev,
            email: e.target.value,
          }));
        }}
      />
      <div>
        <input
          type="text"
          placeholder="Enter your Password"
          onChange={(e) => {
            setsignupDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <button onClick={signupHandler}>Signup</button>
    </div>
  );
};

export default Signup;
