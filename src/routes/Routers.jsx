import React, { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import MenuDetails from "../pages/MenuDetails";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Checkout from "../pages/Checkout";
import CheckoutSucces from "../pages/CheckoutSucces";
import Protected from "./Protected";
import { Context } from "../context/AuthContext";

// const MainLayout = () => {
//   return (
//     <div>
//       {/* Tambahkan elemen layout utama di sini, seperti header atau footer */}
//       {/* <Layout /> */}

//       <Header />
//       <div className="">
//         <Outlet />
//       </div>
//       <Footer />

//       {/* Tambahkan elemen layout utama di sini, seperti footer */}
//     </div>
//   );
// };

const Routers = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <HomePage />
          </Protected>
        }
      />
      <Route
        path="/home"
        element={
          <Protected>
            <HomePage />
          </Protected>
        }
      />

      <Route
        path="/menu"
        element={
          <Protected>
            <Menu />
          </Protected>
        }
      />
      <Route
        path="/menuDetails/:id"
        element={
          <Protected>
            <MenuDetails />
          </Protected>
        }
      />
      <Route
        path="/cart"
        element={
          <Protected>
            <Cart />
          </Protected>
        }
      />
      <Route
        path="/contact"
        element={
          <Protected>
            <Contact />
          </Protected>
        }
      />
      <Route
        path="/checkout"
        element={
          <Protected>
            <Checkout />
          </Protected>
        }
      />
      <Route path="/checkoutSucces" element={<CheckoutSucces />} />
      <Route
        path="/Register"
        element={user ? <Navigate to={"/Register"} /> : <Register />}
      />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
