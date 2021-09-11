import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminForm = () => {
  // STATE which contains admin info //
  const [admin, setAdmin] = useState({});

  //redirect route/////
  const history = useHistory();

  //handle blur function //
  const handleBlur = (e) => {
    const adminInfo = { ...admin };
    adminInfo[e.target.name] = e.target.value;
    setAdmin(adminInfo);
  };

  // handle admin submission//
  const handleAdmin = (redirect) => {
    // e.preventDefault();

    const adminData = { email: admin.email, password: admin.password };
    console.log(adminData);

    fetch("http://localhost:4000/makeAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((res) => {
        console.log("server side response", res);
      })
      .catch((error) => {
        console.error(error);
      });

    //redirect to home after appointing admin//
    if (redirect) {
      history.push("/");
    }
  };
  return (
    <div className="flex-1 p-16">
      <h3 className="pt-4 pb-8 text-2xl font-bold tracking-wider text-center text-blue-900 uppercase md:pt-0 md:text-left">
        Make Admin
      </h3>
      <form className="px-8 pt-8 space-y-6 rounded-lg shadow-sm pb-60 bg-blue-50">
        <div className="grid justify-start grid-cols-2 gap-5 ">
          <div>
            <label
              for="Service Name"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="admin-email"
                name="email"
                type="email"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Admin E-mail"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              for="Password"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="admin-password"
                name="password"
                type="password"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Admin Password"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="mt-2">
            <button
              onClick={() => handleAdmin()}
              className="px-5 py-2 text-base text-white capitalize transition duration-200 ease-in-out transform bg-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-800 hover:border-blue-900"
            >
              Make Admin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
