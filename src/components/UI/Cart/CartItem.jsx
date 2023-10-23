import React from "react";
import { BsPlus, BsDash, BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/shopping-cart/cartSlices";

const CartItem = ({ item }) => {
  const { id, title, price, image1, quantity, totalPrice } = item;

  const dispacth = useDispatch();

  const incrementItem = () => {
    dispacth(
      cartActions.addItem({
        id,
        title,
        image1,
        price,
        quantity,
        totalPrice,
      })
    );
  };

  const decreaseItem = () => {
    dispacth(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispacth(cartActions.deleteItem(id));
  };

  return (
    <div className="border-0 mb-[10px] ">
      <div className=" flex gap-2 pb-[10px] mx-4">
        <img
          src={image1}
          alt="product-img"
          className="w-20 h-20 bg-cover object-cover"
        />
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="">
            <h6 className="font-semibold text-lg">{title}</h6>
            <p className="flex items-center gap-5 text-sm">
              x{quantity}{" "}
              <span className="text-base font-semibold text-red-500">
                Rp.{totalPrice}
              </span>
            </p>
            <div className="flex items-center justify-between bg-red-100 py-2 px-3 rounded-md mt-2">
              <span className="cursor-pointer" onClick={incrementItem}>
                <BsPlus />
              </span>
              <span>{quantity}</span>
              <span className="cursor-pointer" onClick={decreaseItem}>
                <BsDash />
              </span>
            </div>
          </div>
          <span
            className="font-semibold text-base cursor-pointer"
            onClick={deleteItem}
          >
            <BsX style={{ fontWeight: "700", margin: "0 4px" }} size="20px" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
