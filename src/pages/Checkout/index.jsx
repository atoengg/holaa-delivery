import React, { useState } from "react";
import CommonSection from "../../components/UI/Common/CommonSection";
import { useSelector } from "react-redux";
import FormCheckout from "../../components/Form/FormCheckout";

const Checkout = () => {
  const cartTotalPembayaran = useSelector((state) => state.cart.totalAmount);

  const ongkir = 3000;

  const totalAmount = cartTotalPembayaran + Number(ongkir);

  return (
    <div>
      <CommonSection title={"Checkout"} />

      <section className="container mx-auto px-8 py-12 md:px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-6/12 shadow-md rounded-md shadow-slate-300/50 p-8 ">
            <h1 className="font-bold text-xl">Alamat Pengiriman</h1>
            <FormCheckout />
          </div>

          <div className="w-4/12 h-1/2 flex flex-col shadow-slate-300/50 shadow-md rounded-md  bg-white">
            <div className="p-8 w-full relative ">
              <h2 className="font-bold text-xl mb-3">Summary</h2>
              <div className="flex justify-between mb-2">
                <h2>SubTotal:</h2>
                <p>
                  Rp.<span>{cartTotalPembayaran}</span>
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <h3>Ongkir:</h3>
                <p>
                  Rp.<span>{ongkir}</span>
                </p>
              </div>
              <hr className="mb-2" />
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg">Total:</h1>
                <h1 className="font-semibold text-lg">
                  Rp.<span>{totalAmount}</span>
                </h1>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-4 text-lg text-center font-semibold rounded-md hover:transition hover:duration-200 hover:bg-red-300"
                >
                  Checkout Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
