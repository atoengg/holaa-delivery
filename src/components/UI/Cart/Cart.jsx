import React from "react";
import { FaWindowClose } from "react-icons/fa";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../redux/slices/shopping-cart/cartUiSlices";

const Cart = () => {
  const dispacth = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const totalPembayaran = useSelector((state) => state.cart.totalAmount);

  const toogleCartClose = () => {
    dispacth(cartUiActions.toggle());
  };
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-[#000000A3] z-[99999]">
      <div className="absolute top-0 right-0 w-[400px] h-full bg-white z-[99999]">
        <span
          className="cursor-pointer w-full h-[50px] "
          onClick={toogleCartClose}
        >
          <FaWindowClose
            style={{
              padding: "2px 4px",
              marginBottom: "6px",
            }}
            size="35px"
          />
        </span>

        <div className="cart__item-list overflow-y-scroll">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">
              Anda Belum Menambahkan ke keranjang
            </h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          )}
        </div>

        <div className="absolute flex items-center justify-between bg-red-500 bottom-0 left-0 py-[10px] px-5 w-full h-20">
          <h6 className="text-white font-semibold text-lg">
            Total Pembayaran: <span>Rp.{totalPembayaran}</span>
          </h6>
          <button className="bg-white font-bold px-4 py-2 rounded-md">
            {" "}
            <Link to={"/checkout"}>Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
