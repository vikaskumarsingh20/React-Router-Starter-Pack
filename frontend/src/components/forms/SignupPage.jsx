// eslint-disable-next-line no-unused-vars
import React, { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ThemeContext } from "../../contexts/Theme";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import logo  from "../../assets/images/Animation-PNG-HD.png"

function FormTailwind() {
  const [dataFrom, setDataFrom] = useState({
    email: "",
    password: "",
    repeatPassword:"",
    remember: "",
    loading: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const {setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setDataFrom((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      console.log("Signup data:", dataFrom);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFrom),
      });
      const data = await response.json();
      console.log(data);
      setDataFrom({ email: "", password: "", repeatPassword: "" });

      if (response.ok) {
        setIsLoggedIn(true);
        navigate("/login");
        toast.success("Signup successful!");
      } else {
        console.log(data.error);
        toast.error(data.error || "Invalid user credentials");
      }
      
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };
  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const toggleRepeatPasswordVisibility = (event) => {
    event.preventDefault();
    setShowRepeatPassword(!showRepeatPassword);
  };

  return (
    <>
      <Navbar />

      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        } 
        flex justify-center items-center min-h-screen sm:flex-col md:flex-row lg:flex-row
        xl:flex-row 2xl:flex-row`}
      >
        <div className=" flex items-center justify-center mx-auto">
          <img
            src={logo}
            alt="Workflow"
            className="hidden sm:block h-auto w-[25%] max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl"
          />
          <form
            onSubmit={handleSubmit}
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            } shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full`}
          >
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-gray-300" : "text-gray-400"
              } text-center mb-6 underline`}
            >
              Register new account
            </h2>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`text-gray-900 border border-gray-300 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                ${
                  darkMode
                    ? "dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:text-white dark:focus:border-blue-500"
                    : ""
                }`}
                placeholder=" Enter your email"
                required
                onClick={handleChange}
              />
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
                className={`text-gray-900 border border-gray-300 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                ${
                  darkMode
                    ? "dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:text-white dark:focus:border-blue-500"
                    : ""
                }`}
                required
                onClick={handleChange}
              />
              <div>
                <button
                  className="absolute right-2 mt-4 top-1/2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="repeat-password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Repeat password
              </label>
              <input
                type={showRepeatPassword ? "text" : "password"}
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Enter Repeat Password"
                className={`text-gray-900 border border-gray-300 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                ${
                  darkMode
                    ? "dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:text-white dark:focus:border-blue-500"
                    : ""
                }`}
                required
                onClick={handleChange}
              />
              <div>
                <button
                  className="absolute right-2 mt-4 top-1/2 transform -translate-y-1/2"
                  onClick={toggleRepeatPasswordVisibility}
                >
                  {showRepeatPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out mr-2"
                />
                <label
                  htmlFor="remember"
                  className=" block text-sm text-gray-900 dark:text-gray-400"
                >
                  I agree with the
                </label>
              </div>
              <label>
                <Link
                  to="/terms-and-conditions"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {dataFrom.loading ? "Loading..." : "Register new account"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormTailwind;
