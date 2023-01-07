import React, { useState } from "react";
import Alert from "./Alert";
import axios from "../axiosLib";

const Login = ({ setAuthType }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({
    showAlert: false,
    type: "",
    message: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/users/login", formData, {
        withCredentials: true,
      });
      await localStorage.setItem("user", JSON.stringify(res.data.data.user));
      setAlert({
        showAlert: true,
        type: "success",
        message: "Login successful",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (err) {
      console.log(err);
      setAlert({
        showAlert: true,
        type: "error",
        message: err.response.data.message,
      });
      setTimeout(() => {
        setAlert({ showAlert: false, type: "", message: "" });
      }, 1500);
    }
  }
  return (
    <div>
      {alert.showAlert && <Alert type={alert.type} message={alert.message} />}
      <div className=" max-w-screen-lg flex flex-col bg-white p-10 rounded-lg w-screen">
        <form className="flex flex-col w-full mb-6" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
            type="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
            type="password"
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            className="transition ease-out duration-200 rounded-md bg-slate-600 text-white px-4 py-2 hover:bg-slate-700 hover:shadow-lg hover:cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="flex space-x-2">
          <p>Don't have an account?</p>
          <button className="text-blue-600 underline" onClick={setAuthType}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
