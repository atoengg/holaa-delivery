import React, { useContext } from "react";
import Logo from "../../assets/logo/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaArrowRight,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../redux/slices/shopping-cart/cartUiSlices";
import { signOut, getAuth } from "firebase/auth";
import { Context } from "../../context/AuthContext";

const Header = () => {
  const dispacth = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  const { user } = useContext(Context);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const location = useLocation();

  const toggleCart = () => {
    dispacth(cartUiActions.toggle());
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Hapus token pengguna dari local storage
      localStorage.removeItem("userId");
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  const nav_item = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Menu",
      path: "/menu",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <header className="bg-transparent top-0 left-0 w-full absolute">
        <nav className=" container mx-auto px-8 md:px-6 max-w-full flex justify-between w-full items-center bg-white fixed z-[999] py-2 navbar-fixed">
          <div className="flex items-center">
            <img src={Logo} alt="logo" />
            <h2 className="ml-3 font-bold text-xl">
              Holaa.<span className="text-red-600">Delivery</span>{" "}
            </h2>
          </div>
          <div className="">
            <ul className="flex items-center gap-[4vw]">
              {nav_item?.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    activeClassName="active"
                    className="hover:text-red-500 font-semibold"
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            {location.pathname !== "/checkoutSucces" &&
              location.pathname !== "/Login" &&
              location.pathname !== "/Register" && (
                <div
                  className="relative mr-10 cursor-pointer"
                  onClick={toggleCart}
                >
                  <FaShoppingCart />
                  <span className="bg-red-600 text-white rounded-full flex items-center justify-center -top-3 -right-3 w-4 h-4 text-sm absolute">
                    {totalQuantity}
                  </span>
                </div>
              )}

            {!user ? (
              <Link to={"/Login"}>
                <button className="py-3 px-4 gap-3 bg-red-500 flex items-center rounded-full text-white hover:bg-red-300 hover:transition hover:duration-200">
                  Sign In
                  <FaArrowRight />
                </button>
              </Link>
            ) : (
              <button
                className="py-3 px-4 gap-3 bg-red-500 flex items-center justify-center rounded-full font-semibold text-white hover:bg-red-300 hover:transition hover:duration-200"
                onClick={handleLogout}
              >
                <p>LogOut</p>

                <FaArrowAltCircleRight />
              </button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
