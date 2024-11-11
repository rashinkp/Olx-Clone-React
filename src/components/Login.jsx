import React from "react";

const Login = ({ toggleModal }) => {
  return (
    <div>
      <div
        id="default-modal"
        tabIndex="-1"
        className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50 "
      >
        <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={toggleModal}
            className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-4 mt-8 md:p-5 space-y-4">
            <p className="text-base leading-relaxed font-medium text-gray-500 dark:text-gray-400 text-center">
              Help us to become one of the safest places to buy and sell
            </p>
            <div className="flex flex-col">
              <button className="border-gray-200 m-2 border-2 p-2 text-gray-100">
                Google
              </button>
              <button className="border-gray-200 border-2 m-2 p-2 text-gray-100">
                Phone Number
              </button>
            </div>
            <h1 className="text-center mt-3 text-white">OR</h1>
            <h1 className="text-center text-white mt-3 underline cursor-pointer">
              Login with Email
            </h1>

            <div className="footer-section pt-20">
              <p className="text-gray-300 text-center text-sm">
                All your personal details are safe with us.
              </p>
              <p className="text-gray-300 text-center mt-5 text-sm">
                If you continue, you are accepting OLX Terms and Conditions and
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
