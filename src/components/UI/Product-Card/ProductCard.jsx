import React from "react";

import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/shopping-cart/cartSlices";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image1,
        price,
      })
    );
  };

  const { id, title, image1, price } = props.item;
  return (
    <div className="group flex flex-col justify-between rounded-lg text-center p-7 h-full min-h-[19rem] hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-200">
      <div className="flex justify-center">
        <img src={image1} alt="product-img" className="rounded-lg w-1/2" />
      </div>

      <h5 className="text-lg font-semibold">
        <Link to={`/menuDetails/${id}`}>{title}</Link>
      </h5>

      <div className="flex items-center justify-between">
        <span className="font-bold">Rp.{price}</span>
        <button
          className="flex items-center gap-2 bg-red-500 rounded-md py-1 px-4 text-white group-hover:bg-white group-hover:text-black "
          onClick={addToCart}
        >
          <FaShoppingBag />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
