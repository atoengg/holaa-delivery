import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [errMsg, setErrMsg] = useState({
    email: "",
    password: "",
    checkbox: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // memantau perubahan pada errMsg dan memperbarui isFormValid
    const isFormValid = Object.values(errMsg).every((error) => !error);
    setIsFormValid(isFormValid);
  }, [errMsg]);

  const handleInputLogin = (e) => {
    const { name, value } = e.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });

    validateFormLogin(e);
  };

  const validateFormLogin = (e) => {
    const { name, value, checked } = e.target;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name === "email") {
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

  const handleSumbit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      alert("Login berhasil");

      navigate("/");
    }
  };

  return (
    <div>
      <form action="#" onSubmit={handleSumbit}>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="email"
              name="email"
              id="email"
              value={formInput.email}
              onChange={handleInputLogin}
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
              onChange={handleInputLogin}
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

          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
              <input
                required
                type="checkbox"
                name="checkbox"
                className="w-4 h-4 mr-2"
                value={formInput.checkbox}
                onChange={handleInputLogin}
              />
              <p className="text-sm">keep me logged in</p>
            </div>

            <p className="text-sm font-semibold text-slate-500">
              <a href="#">Forgot Password?</a>
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
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
