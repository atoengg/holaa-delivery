import React from "react";
import Header from "../Header/Header";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Cart from "../UI/Cart/Cart";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />

      {showCart && <Cart />}

      <div className="">
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
