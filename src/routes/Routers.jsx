import React from "react";
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
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menuDetails/:id" element={<MenuDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} /> */}
    </Routes>
  );
};

export default Routers;
