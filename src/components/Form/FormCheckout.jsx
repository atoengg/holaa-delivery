import React, { useEffect, useState } from "react";
import iconDana from "../../assets/logo/dana.png";
import iconGoPay from "../../assets/logo/goPay.png";
import iconShopeePay from "../../assets/logo/shopeePay.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { paymentActions } from "../../redux/slices/payments-details/paymentSlices";

const FormCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const split = uuidv4().split("-").join("");

  const [input, setInput] = useState({
    id: split,
    name: "",
    email: "",
    noTelepon: "",
    desa: "",
    kodePos: "",
    payments: "",
  });
  const [errMsg, setErrMsg] = useState({
    name: "",
    email: "",
    noTelepon: "",
    desa: "",
    kodePos: "",
    payments: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // memantau perubahan pada errMsg dan memperbarui isFormValid
    const isFormValid = Object.values(errMsg).every((error) => !error);
    setIsFormValid(isFormValid);
  }, [errMsg]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });

    validateInput(e);
  };

  const validateInput = (e) => {
    const { name, value } = e.target;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const noTelponRegex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;

    if (name === "name") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          name: "Nama tidak boleh kosong",
        });
      } else {
        setErrMsg({
          ...errMsg,
          name: "",
        });
      }
    } else if (name === "email") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          email: "Email tidak boleh kosong",
        });
      } else if (!emailRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          email: "Masukan Email yang sesuai",
        });
      } else {
        setErrMsg({
          ...errMsg,
          email: "",
        });
      }
    } else if (name === "noTelepon") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          noTelepon: "No.Telepon tidak boleh kosong",
        });
      } else if (!noTelponRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          noTelepon: "Masukan No.Telepon yang sesuai",
        });
      } else {
        setErrMsg({
          ...errMsg,
          noTelepon: "",
        });
      }
    } else if (name === "desa") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          desa: "alamat desa tidak boleh kosong",
        });
      } else {
        setErrMsg({
          ...errMsg,
          desa: "",
        });
      }
    } else {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          kodePos: "kode pos tidak boleh kosong",
        });
      } else {
        setErrMsg({
          ...errMsg,
          kodePos: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFormValid) {
      Swal.fire("Chekout Berhasil!", "You clicked the button!", "success");
      dispatch(paymentActions.addPayment(input));

      setTimeout(() => {
        navigate("/checkoutSucces");
      }, 2000);
    }
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-5">
          <div className="relative">
            <input
              required
              type="text"
              name="name"
              id="name"
              value={input.name}
              onChange={handleInputchange}
              className={`peer border-b ${
                errMsg.name ? "border-red-500" : ""
              } text-base py-2 px-2 w-full outline-none focus:border-blue-500 focus:border-b transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="name"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              Nama Anda
            </label>
            {errMsg.name && (
              <div className="text-red-500 text-sm">{errMsg.name}</div>
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
              value={input.email}
              onChange={handleInputchange}
              className={`peer border-b ${
                errMsg.email ? "border-red-500" : ""
              } text-base py-2 px-2 w-full outline-none focus:border-blue-500 focus:border-b transition duration-200 placeholder-transparent`}
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
              type="number"
              name="noTelepon"
              id="noTelepon"
              value={input.noTelepon}
              onChange={handleInputchange}
              className={`peer border-b ${
                errMsg.noTelepon ? "border-red-500" : ""
              } text-base py-2 px-2 w-full outline-none focus:border-blue-500 focus:border-b transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            />
            <label
              htmlFor="noTelepon"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            >
              No. Telepon
            </label>
            {errMsg.noTelepon && (
              <div className="text-red-500 text-sm">{errMsg.noTelepon}</div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <div className="relative">
            <select
              required
              name="desa"
              id="desa"
              value={input.desa}
              onChange={handleInputchange}
              className={`peer border ${
                errMsg.desa ? "border-red-500" : ""
              } text-base py-2 px-2 w-full outline-none focus:border-blue-500 focus:border-b transition duration-200 placeholder-transparent`}
              placeholder="john smitch"
            >
              <option value="">Pilih Desa</option>
              <option value="Siwalan">Siwalan</option>
              <option value="Sono">Sono</option>
              <option value="Bejan">Bejan</option>
              <option value="Sumurber">Sumurber</option>
            </select>
            <label
              htmlFor="noTelepon"
              className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
            ></label>
            {errMsg.desa && (
              <div className="text-red-500 text-sm">{errMsg.desa}</div>
            )}
          </div>

          <div className="mt-5">
            <div className="relative">
              <input
                required
                type="number"
                name="kodePos"
                id="kodePos"
                value={input.kodePos}
                onChange={handleInputchange}
                className={`peer border-b ${
                  errMsg.kodePos ? "border-red-500" : ""
                } text-base py-2 px-2 w-full outline-none focus:border-blue-500 focus:border-b transition duration-200 placeholder-transparent`}
                placeholder="john smitch"
              />
              <label
                htmlFor="kodePos"
                className="absolute left-2 -top-2.5 text-slate-500 text-sm px-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:text-blue-500 peer-focus:bg-white transition-all duration-200"
              >
                Kode Pos
              </label>
              {errMsg.kodePos && (
                <div className="text-red-500 text-sm">{errMsg.kodePos}</div>
              )}
              <div className="mt-5">
                <p className="font-bold text-lg">Pilih Metode Pembayaran:</p>

                <div className="flex items-center border px-4 py-2 rounded-md mt-4 bg-slate-200/50">
                  <input
                    type="radio"
                    value="dana"
                    name="payments"
                    required
                    checked={input.payments === "dana"}
                    onChange={handleInputchange}
                  />
                  <img
                    src={iconDana}
                    alt="dana-icon"
                    className="w-12 h-12 mx-2"
                  />
                  <label htmlFor="payments" className="font-semibold">
                    Dana
                  </label>
                </div>
                <div className="flex items-center border px-4 py-2 rounded-md mt-4 bg-slate-200/50">
                  <input
                    type="radio"
                    value="gopay"
                    name="payments"
                    required
                    checked={input.payments === "gopay"}
                    onChange={handleInputchange}
                  />
                  <img
                    src={iconGoPay}
                    alt="gopay-icon"
                    className="w-10 h-10 mx-2"
                  />
                  <label htmlFor="payments" className="font-semibold">
                    GoPay
                  </label>
                </div>
                <div className="flex items-center border px-4 py-2 rounded-md mt-4 bg-slate-200/50">
                  <input
                    type="radio"
                    value="shopeePay"
                    name="payments"
                    required
                    checked={input.payments === "shopeePay"}
                    onChange={handleInputchange}
                  />
                  <img
                    src={iconShopeePay}
                    alt="shopee-icon"
                    className="w-8 h-8 mx-2"
                  />
                  <label htmlFor="payments" className="font-semibold">
                    ShopeePay
                  </label>
                </div>
              </div>
              <div className="mt-5">
                <button
                  disabled={!isFormValid}
                  type="submit"
                  className={`w-full ${
                    isFormValid === false
                      ? "bg-red-300 hover:cursor-default"
                      : "bg-red-500"
                  } text-white py-4 text-lg text-center font-semibold rounded-md hover:transition hover:duration-200 hover:bg-red-300`}
                >
                  Checkout Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
