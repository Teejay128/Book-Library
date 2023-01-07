import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const AuthPage = () => {
  const [authType, setAuthType] = useState("login");

  const handleAuthType = (type) => {
    setAuthType(type);
  };

  return (
    <div className="bg-gray-400 flex justify-center items-center h-screen">
      {authType === "signup" ? (
        <SignUp setAuthType={() => handleAuthType("login")} />
      ) : (
        <Login setAuthType={() => handleAuthType("signup")} />
      )}
    </div>
  );
};

export default AuthPage;
