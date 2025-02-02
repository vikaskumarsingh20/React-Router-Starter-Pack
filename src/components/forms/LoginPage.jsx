// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";

function LoginPage() {
  return (
    <>
      <Navbar />

    <div className="flex justify-center items-center min-h-screen bg-gray-100 light:bg-gray-900 bg-gradient-to-r from-purple-500 to-pink-500">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h2  className="text-2xl font-bold text-gray-400 text-center mb-6 underline">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="text-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="text-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-400"
            >
              Remember Me
            </label>
          </div>
          <Link to="/forgetpassword" className="inline-block align-baseline text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400">
            Forgot Password?
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Do not have an account?{" "}
          <Link
            to="/signup"
            className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default LoginPage;
