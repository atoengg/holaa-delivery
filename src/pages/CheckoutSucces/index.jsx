import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo/logo.png";
import { BsShare, BsDownload } from "react-icons/bs";

const CheckoutSucces = () => {
  // state untuk melacak apakah transaksi berhasil
  const [transactionCompleted, setTransactionCompleted] = useState(false);

  const currentDate = new Date();

  // Format tanggal
  const optionsDate = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  // Format waktu
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = currentDate.toLocaleDateString("id-ID", optionsDate);
  const formattedTime = currentDate.toLocaleTimeString("id-ID", optionsTime);

  const payments = useSelector((state) => state.payments.payments);
  const subTotal = useSelector((state) => state.cart.totalAmount);

  const ongkir = 3000;

  const totalAmount = subTotal + Number(ongkir);

  return (
    <div className="flex justify-center">
      <div className=" mt-32 bg-white rounded-md flex flex-col shadow-md shadow-slate-500/50 p-7 h-full min-w-[600px]">
        <div className="text-center flex items-center justify-center mb-3">
          <img src={logo} alt="logo-img" />
          <h2 className="ml-2 font-bold text-xl">
            Holaa.<span className="text-red-600">Delivery</span>{" "}
          </h2>
        </div>
        <h2 className="text-center text-teal-500 font-semibold">
          Transaksi Anda Berhasil Diproses
        </h2>

        <div className="text-center text-sm my-1">
          <p>
            {formattedDate} - {formattedTime} WIB
          </p>
        </div>

        <hr className="my-2" />
        <div className="flex justify-between mb-2 text-sm">
          <p>ID Transaksi</p>
          <p>{payments.id} </p>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <p>Nama</p>
          <p>{payments.name}</p>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <p>Email</p>
          <p>{payments.email}</p>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <p>No.Telepon</p>
          <p>{payments.noTelepon}</p>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <p>Alamat Desa</p>
          <p>{payments.desa}</p>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <p>Kode Pos</p>
          <p>{payments.kodePos}</p>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <p>Metode Pembayaran</p>
          <p>{payments.payments}</p>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <p>SubTotal</p>
          <p>{subTotal}</p>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <p>Ongkir</p>
          <p>{ongkir}</p>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between mb-2 text-sm font-semibold font">
          <p>Total Pembayaran</p>
          <p>Rp.{totalAmount}</p>
        </div>

        <div className=" mt-20 flex justify-between">
          <BsShare
            style={{ cursor: "pointer", fontWeight: "700" }}
            color="#ef4444"
            size="20px"
          />
          <BsDownload
            style={{ cursor: "pointer", fontWeight: "700" }}
            color="#ef4444"
            size="20px"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSucces;
