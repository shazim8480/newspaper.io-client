import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import {
  handleGoogleSignIn,
  initializeLoginFramework,
  createUserWithEmailAndPassword,
} from "./LoginManager.js";
// import { auth } from "firebase/app";

initializeLoginFramework();

const Login = () => {
  // use context api from app.js////////////////////
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // use form hook destructuring//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // this triggers validation event on change//
  });

  // to redirect to destination page after authentication//
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // default //
  const [user, setUser] = useState({
    isSignedIn: false,
    email: "",
    password: "",
    error: "",
  });

  //handle submit function //
  const onSubmit = (e) => {
    //  not new user, so sign in using only email and password//
    if (user.email && user.password) {
      createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          handleResponse(res, true);
          console.log(res.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(e);
    // e.preventDefault();
  };
  const handleChange = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };

  //google sign in handler by import//
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      handleResponse(res, true);
    });
  };

  // function for handling response //
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res); // from context api//
    if (redirect) {
      history.replace(from); // to replace the location after sign in//
    }
  };
  /////////////////////////////////////////////
  return (
    <section className="flex items-center justify-center mt-20">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Easy Account with Newspaper.io
        </div>
        <div className="flex gap-4 item-center">
          <button
            onClick={googleSignIn}
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Sign In With Google
          </button>
        </div>

        {/* form starts here */}
        <div className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
            <div className="flex flex-col mb-2">
              <div className="relative flex ">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={loggedInUser.email}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your email"
                  {...register("email", {
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid e-mail address",
                    },
                    required: "*E-mail is required",
                  })}
                  error={Boolean(errors.email)}
                />
              </div>
              <p className="text-center text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex flex-col mb-6">
              <div className="relative flex ">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  name="password"
                  type="password"
                  id="password"
                  value={loggedInUser.password}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your password"
                  {...register("password", {
                    required: "*Password is required",
                  })}
                  error={Boolean(errors.password)}
                />
              </div>
              <p className="text-center text-red-500">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <Link
                  to="/"
                  className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                >
                  Forgot Your Password?
                </Link>
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                // className={classes.submit}
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
