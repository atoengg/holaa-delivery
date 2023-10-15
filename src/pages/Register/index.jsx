import React from "react";
import imgRegister from "../../assets/img/imgRegister.jpg";
import googleLogo from "../../assets/img/google-logo.png";
import facebookLogo from "../../assets/img/facebook-logo.jpg";
import { FaArrowLeft } from "react-icons/fa";
import FormRegister from "../../components/Form/FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-5/12 h-full flex flex-col">
        <div className="absolute top-4 left-4 flex flex-col">
          <div className="bg-slate-400 opacity-70 text-white flex items-center justify-center rounded-md py-2 px-4 hover:cursor-pointer">
            <FaArrowLeft />
            <p className="ml-2">Back</p>
          </div>
        </div>
        <img
          src={imgRegister}
          className="w-full h-full object-cover"
          alt="imgRegister"
        />
      </div>

      <div className="w-7/12 h-full flex flex-col px-32 py-20">
        <h2 className="font-semibold text-4xl mb-5">Register</h2>

        <div className="flex items-center gap-3 mb-4">
          <div className="border flex items-center justify-center border-red-500 bg-transparent rounded-md p-3 hover:cursor-pointer w-full">
            <img src={googleLogo} alt="logo Google" className="h-5" />
            <p className="font-normal text-sm ml-1">SignUp With Google</p>
          </div>
          <div className="border flex items-center justify-center border-red-500 bg-transparent rounded-md p-3 hover:cursor-pointer w-full">
            <img src={facebookLogo} alt="facebookLogo" className="h-5" />
            <p className="font-normal text-sm ml-1">SignUp With facebook</p>
          </div>
        </div>

        <p className="text-center font-semibold text-base">or</p>

        <FormRegister />

        <p className="text-base font-normal text-slate-400 mt-4">
          Already Have An Account?{" "}
          <a href="#" className="font-bold text-black">
            <Link to={"/Login"}>Login</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
