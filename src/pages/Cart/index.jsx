import React from "react";
import CommonSection from "../../components/UI/Common/CommonSection";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/shopping-cart/cartSlices";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPembayaran = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <CommonSection title={"Keranjang"} />

      <section className="container mx-auto max-w-full px-8 py-12 md:px-6">
        <div className=" grid grid-rows-1">
          {cartItems.length === 0 ? (
            <h5 className="text-center font-semibold">
              Kamu Belum Menambahkan Menu ke Keranjang
            </h5>
          ) : (
            <table className="">
              <thead className="border-collapse border-b border-slate-500 bg-slate-200">
                <tr className="">
                  <th className="p-3 font-semibold text-lg tracking-wide">
                    Gambar
                  </th>
                  <th className=" p-3 font-semibold text-lg tracking-wide">
                    Nama Menu
                  </th>
                  <th className=" p-3 font-semibold text-lg tracking-wide">
                    Harga
                  </th>
                  <th className=" p-3 font-semibold text-lg tracking-wide">
                    Jumlah
                  </th>
                  <th className=" p-3 font-semibold text-lg tracking-wide">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <Tr item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          )}

          <div className="mt-6">
            <h6 className="font-semibold text-base">
              SubTotal:
              <span className="font-bold text-2xl text-red-500 ml-2">
                Rp.
                {totalPembayaran}
              </span>
            </h6>
            <p>Ongkir akan dihitung saat checkout</p>

            <div className="mt-4">
              <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:transition hover:duration-200 hover:bg-red-300 mr-4">
                <Link to={"/menu"}>Pesan Lagi</Link>
              </button>
              <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:transition hover:duration-200 hover:bg-red-300">
                <Link to={"/checkout"}>Lanjut ke Pembayaran</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Tr = (props) => {
  const { id, image1, title, quantity, price } = props.item;
  const dispatch = useDispatch();

  const deleteCartItems = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Kamu Ingin Menghapus Menu ${title} dari keranjangmu!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cartActions.deleteItem(id));
        Swal.fire(
          "Deleted!",
          `Menu ${title} berhasil dihapus dari keranjang.`,
          "success"
        );
      }
    });
  };
  return (
    <tr className="border-b-2 border-slate-200">
      <td className="text-center text-sm p-3 text-slate-700 w-32">
        <img src={image1} alt="img-product" className="w-full" />
      </td>
      <td className="text-center text-sm  text-slate-700">{title}</td>
      <td className="text-center text-sm text-slate-700">{price}</td>
      <td className="text-center text-sm text-slate-700">{quantity}</td>
      <td
        className="text-center text-sm text-slate-700 flex justify-center items-center mt-9"
        onClick={deleteCartItems}
      >
        <BsTrashFill style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default Cart;
