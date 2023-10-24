import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FormContact = () => {
  const [inputForm, setInputForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const isFormValid = Object.values(errMsg).every((error) => !error);
    setIsFormValid(isFormValid);
  }, [errMsg]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value,
    });

    validateInput(e);
  };

  const validateInput = (e) => {
    const { name, value } = e.target;

    const usernameRegex = /^[a-zA-Z]/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "username") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          username: "username tidak boleh kosong!",
        });
      } else if (!usernameRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          username: "username hanya boleh huruf!",
        });
      } else {
        setErrMsg({
          ...errMsg,
          username: "",
        });
      }
    } else if (name === "email") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          email: "email tidak boleh kosong!",
        });
      } else if (!emailRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          email: "email harus sesuai format!",
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
          message: "message tidak boleh kosong!",
        });
      } else {
        setErrMsg({
          ...errMsg,
          message: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      toast.success("Pesanmu Berhasil Dikirim");
    }
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            type="text"
            name="username"
            id="username"
            value={inputForm.username}
            onChange={handleInputChange}
            className="w-full outline-none bg-transparent text-base border-solid border py-3 px-3 rounded-md text-[#f3fff4] focus:border-slate-200"
            placeholder="Masukan Nama / username"
          />
          {errMsg.username && (
            <div className="text-red-500 text-sm">{errMsg.username}</div>
          )}
        </div>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            id="email"
            value={inputForm.email}
            onChange={handleInputChange}
            className="w-full outline-none bg-transparent text-base border-solid border py-3 px-3 rounded-md text-[#f3fff4] focus:border-slate-200"
            placeholder="Masukan Email Anda"
          />
          {errMsg.email && (
            <div className="text-red-500 text-sm">{errMsg.email}</div>
          )}
        </div>
        <div className="">
          <textarea
            name="message"
            id="message"
            value={inputForm.message}
            onChange={handleInputChange}
            className="w-full outline-none bg-transparent text-base border-solid border py-3 px-3 rounded-md text-[#f3fff4] focus:border-slate-200"
            cols="20"
            rows="5"
            placeholder="masukan pesan / saranmu disini..."
          ></textarea>
          {errMsg.message && (
            <div className="text-red-500 text-sm">{errMsg.message}</div>
          )}
        </div>
        <button
          type="submit"
          name="btnSubmit"
          disabled={!isFormValid}
          className={`w-full border-none mt-3  ${
            isFormValid === false
              ? "bg-red-300 hover:cursor-default"
              : "bg-red-500"
          } font-semibold text-[#f3fff4] py-2 rounded-md text-base `}
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default FormContact;
