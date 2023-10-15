import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import imgLogin from "../../assets/img/imgLogin.jpg";
import googleLogo from "../../assets/img/google-logo.png";
import facebookLogo from "../../assets/img/facebook-logo.jpg";
import { Link } from "react-router-dom";
import FormLogin from "../../components/Form/FormLogin";
import { Toaster } from "react-hot-toast";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <div className="relative w-5/12 h-full flex flex-col">
        <div className="absolute top-4 left-4 flex flex-col">
          <div className="bg-slate-400 opacity-70 text-white flex items-center justify-center rounded-md py-2 px-4 hover:cursor-pointer">
            <FaArrowLeft />
            <p className="ml-2">Back</p>
          </div>
        </div>
        <img
          src={imgLogin}
          className="w-full h-full object-cover"
          alt="imgLogin"
        />
      </div>
      <div className="w-7/12 h-full flex flex-col px-32 py-20">
        <h2 className="font-semibold text-4xl mb-5">Login</h2>

        <div className="flex items-center gap-3 mb-4">
          <div className="border flex items-center justify-center border-red-500 bg-transparent rounded-md p-3 hover:cursor-pointer w-full">
            <img src={googleLogo} alt="logo Google" className="h-5" />
            <p className="font-normal text-sm ml-1">SignIn With Google</p>
          </div>
          <div className="border flex items-center justify-center border-red-500 bg-transparent rounded-md p-3 hover:cursor-pointer w-full">
            <img src={facebookLogo} alt="facebookLogo" className="h-5" />
            <p className="font-normal text-sm ml-1">SignIn With facebook</p>
          </div>
        </div>

        <p className="text-center font-semibold text-base">or</p>

        <FormLogin />

        <p className="text-base font-normal text-slate-400 mt-4">
          Don't Have An Account?{" "}
          <a href="#" className="font-bold text-black">
            <Link to={"/Register"}>Register</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
