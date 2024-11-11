import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const navigate = useNavigate();
  const [sign, setSign] = useState("Sign Up");
  const [loginError, setLoginError] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const url =
        sign === "Sign Up"
          ? "http://localhost:5000/signup"
          : "http://localhost:5000/signin";
      const formRes =
        sign === "Sign Up"
          ? {
              name: data.name,
              email: data.email,
              password: data.password,
            }
          : {
              email: data.email,
              password: data.password,
            };
      const response = await axios.post(url, formRes);

      if (response) {
        navigate("/");
      }
    } catch (err) {
      setServerResponse(err.response.data.message);
      console.log("error found while submitting data", err.message);
    }
  };

  const getValidationRules = (field) => {
    switch (field) {
      case "name":
        if (sign === "Sign Up") {
          return { required: "Full name is required" };
        }
        return {};
      case "confirmPassword":
        if (sign === "Sign Up") {
          return {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          };
        }
        return {};
      default:
        return { required: `${field} is required` };
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link to="/">
        <button className="absolute top-4 left-4 px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">
          Go Home
        </button>
      </Link>

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {sign === "Sign Up" ? (
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign Up
          </h2>
        ) : (
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign In
          </h2>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {sign === "Sign Up" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", getValidationRules("name"))}
                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="********"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {sign === "Sign Up" && (
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                {...register(
                  "confirmPassword",
                  getValidationRules("confirmPassword")
                )}
                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="********"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {sign === "Sign Up" ? "Create Account" : "Sign In"}
            </button>
            {serverResponse !== "" && (
              <p className=" text-sm text-red-600 text-center mt-4">
                {serverResponse}
              </p>
            )}
          </div>
        </form>

        {sign === "Sign Up" ? (
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              onClick={() => setSign("Sign In")}
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Sign in
            </a>
          </p>
        ) : (
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a
              onClick={() => setSign("Sign Up")}
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Sign up
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Sign;
