import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import ScaleLoader from "react-spinners/ScaleLoader";

const FormLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [errMsg, setErrMsg] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // memantau perubahan pada errMsg dan memperbarui isFormValid
    const isFormValid = Object.values(errMsg).every((error) => !error);
    setIsFormValid(isFormValid);
  }, [errMsg]);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        email: savedEmail,
        password: savedPassword,
      }));
    }
  }, []);

  const handleInputLogin = (e) => {
    const { name, value, type, checked } = e.target;

    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [name]: type === "checkbox" ? checked : value,
    }));

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
    } else {
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      if (formInput.checkbox) {
        localStorage.setItem("email", formInput.email);
        localStorage.setItem("password", formInput.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      setIsLoading(true);

      signInWithEmailAndPassword(auth, formInput.email, formInput.password)
        .then((userCredential) => {
          // Berhasil login
          const user = userCredential.user;
          const userId = user.uid; // Mengambil ID pengguna Firebase
          console.log("UserID: ", userId);

          // Simpan ID pengguna ke local storage
          localStorage.setItem("userId", userId);

          toast.success("Login Berhasil!");
          setTimeout(() => {
            setIsLoading(false);
            navigate("/home");
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Email dan Password tidak sesuai");
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
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

          {isLoading ? (
            <div className="text-center mt-3">
              <ScaleLoader
                color="#ef4444"
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div className="mt-5">
              <button
                disabled={!isFormValid}
                type="submit"
                className={`w-full  font-semibold ${
                  isFormValid === false
                    ? "bg-red-300 hover:cursor-default"
                    : "bg-red-500"
                } text-center py-2 text-white rounded-md hover:cursor-pointer`}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
