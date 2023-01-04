import React, { useState } from "react";

const SignUp = ({ setAuthType }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    window.location.href = "/";
  }

  return (
    <div>
      <div className=" max-w-screen-lg flex flex-col bg-white p-10 rounded-lg w-screen">
        <form className="flex flex-col w-full mb-6" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
            type="text"
            id="firstName"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
            type="text"
            id="lastName"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
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
          <p>Already have an account?</p>
          <button className="text-blue-600 underline" onClick={setAuthType}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
