import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [errMsg, setErrMsg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checkbox: "",
    confirmPassword: "",
  });

  //state untuk mengecek apakah form valid
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // memantau perubahan pada errMsg dan memperbarui isFormValid
    const isFormValid = Object.values(errMsg).every((error) => !error);
    setIsFormValid(isFormValid);
  }, [errMsg]);

  const validateFormRegister = (e) => {
    const { name, value, checked } = e.target;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name === "firstName") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          firstName: "First Name tidak boleh kosong",
        });
      } else if (value.length < 3 || value.length > 10) {
        setErrMsg({
          ...errMsg,
          firstName:
            "First Name tidak boleh kurang dari 3 dan melebihi 10 character",
        });
      } else {
        setErrMsg({
          ...errMsg,
          firstName: "",
        });
      }
    } else if (name === "lastName") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          lastName: "Last Name tidak boleh kosong",
        });
      } else if (value.length < 3 || value.length > 10) {
        setErrMsg({
          ...errMsg,
          lastName:
            "Last Name tidak boleh kurang dari 3 dan melebihi 10 character",
        });
      } else {
        setErrMsg({
          ...errMsg,
          lastName: "",
        });
      }
    } else if (name === "email") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          email: "email tidak boleh kosong",
        });
      } else if (!emailRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          email: "email anda tidak valid",
        });
      } else {
        setErrMsg({
          ...errMsg,
          email: "",
        });
      }
    } else if (name === "password") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          password: "password tidak boleh kosong",
        });
      } else if (!passwordRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          password:
            "password harus min 8 character, huruf besar, huruf kecil, angka, dan karakter spesial",
        });
      } else {
        setErrMsg({
          ...errMsg,
          password: "",
        });
      }
    } else if (name === "confirmPassword") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          confirmPassword: "Confirm Password tidak boleh kosong",
        });
      } else if (value !== formInput.password) {
        setErrMsg({
          ...errMsg,
          confirmPassword: "Konfirmasi password harus sesuai dengan password",
        });
      } else {
        setErrMsg({
          ...errMsg,
          confirmPassword: "",
        });
      }
    } else {
      if (!checked) {
        setErrMsg({
          ...errMsg,
          checkbox: "anda harus menyetujui syarat dan aturan",
        });
      } else {
        setErrMsg({
          ...errMsg,
          checkbox: "",
        });
      }
    }
  };

  const handleInputRegister = (e) => {
    const { name, value } = e.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });

    validateFormRegister(e);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      toast.success("Registrasi Berhasil!");

      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    }
  };
  return (
    <div>
      <form action="#" className="" onSubmit={handleSumbit}>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              value={formInput.firstName}
              onChange={handleInputRegister}
              className={`peer border ${
                errMsg.firstName ? "border-red-500" : ""
              } rounded-md text-base py-2 px-2 w-full outline-none focus:border-blue-500 transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="firstName"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              First Name
            </label>
            {errMsg.firstName && (
              <div className="text-red-500 text-sm">{errMsg.firstName}</div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              value={formInput.lastName}
              onChange={handleInputRegister}
              className={`peer border ${
                errMsg.lastName ? "border-red-500" : ""
              } rounded-md text-base py-2 px-2 w-full outline-none focus:border-blue-500 transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="lastName"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              Last Name
            </label>
            {errMsg.lastName && (
              <div className="text-red-500 text-sm">{errMsg.lastName}</div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="email"
              name="email"
              id="email"
              value={formInput.email}
              onChange={handleInputRegister}
              className={`peer border ${
                errMsg.email ? "border-red-500" : ""
              } rounded-md text-base py-2 px-2 w-full outline-none focus:border-blue-500 transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="email"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              Email Address
            </label>
            {errMsg.email && (
              <div className="text-red-500 text-sm">{errMsg.email}</div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="password"
              name="password"
              id="password"
              value={formInput.password}
              onChange={handleInputRegister}
              className={`peer border ${
                errMsg.password ? "border-red-500" : ""
              } rounded-md text-base py-2 px-2 w-full outline-none focus:border-blue-500 transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="password"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              Password
            </label>
            {errMsg.password && (
              <div className="text-red-500 text-sm">{errMsg.password}</div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formInput.confirmPassword}
              onChange={handleInputRegister}
              className={`peer border ${
                errMsg.confirmPassword ? "border-red-500" : ""
              } rounded-md text-base py-2 px-2 w-full outline-none focus:border-blue-500 transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              Confirm Password
            </label>
          </div>
          {errMsg.confirmPassword && (
            <div className="text-red-500 text-sm">{errMsg.confirmPassword}</div>
          )}
        </div>
        <div className="flex items-center mt-5">
          <input
            required
            type="checkbox"
            name="checkbox"
            className="w-4 h-4 mr-2"
            value={formInput.checkbox}
            onChange={handleInputRegister}
          />
          <p className="text-sm">
            I agree to the{" "}
            <span className="underline underline-offset-2">
              <a href="#">Terms of Service</a>
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-2">
              {" "}
              <a href="">Privacy Policy</a>{" "}
            </span>
          </p>
        </div>
        {errMsg.checkbox && (
          <div className="text-red-500 text-sm">{errMsg.checkbox}</div>
        )}
        <div className="mt-5">
          <button
            disabled={!isFormValid}
            type="submit"
            className={`w-full bg-red-500 font-semibold ${
              !isFormValid ? "bg-red-300 hover:cursor-default" : ""
            } text-center py-2 text-white rounded-md hover:cursor-pointer`}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
