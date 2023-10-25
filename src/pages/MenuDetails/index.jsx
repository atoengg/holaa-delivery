import React, { useEffect, useState } from "react";
import CommonSection from "../../components/UI/Common/CommonSection";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/UI/Product-Card/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/shopping-cart/cartSlices";
import CardSkeleton from "../../components/UI/ProductCard-Skeleton/CardSkeleton";

const MenuDetails = () => {
  const [product, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const [previewImg, setPreviewImg] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product.title,
        image1: product.image1,
        price: product.price,
      })
    );
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${apiUrl}/products/${id}`)
      .then((res) => {
        setProducts(res.data);
        setPreviewImg(res.data.image1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // Permintaan untuk produk terkait berdasarkan kategori
    axios
      .get(`${apiUrl}/products?category=${product.category}`)
      .then((res) => {
        setRelatedProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id, product.category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div>
      <CommonSection title={"Menu Details"} />

      <section className="container mx-auto px-8 py-12 md:px-6">
        <div className="grid grid-rows-1 ">
          <div className="grid grid-cols-4 ">
            <div className="">
              <div
                className="mb-4"
                onClick={() => setPreviewImg(product.image1)}
              >
                <img src={product.image1} className="w-1/2" alt="productImg" />
              </div>
              <div
                className="mb-4"
                onClick={() => setPreviewImg(product.image2)}
              >
                <img src={product.image2} className="w-1/2" alt="productImg" />
              </div>
              <div
                className="mb-4"
                onClick={() => setPreviewImg(product.image3)}
              >
                <img src={product.image3} className="w-1/2" alt="productImg" />
              </div>
            </div>

            <div className="">
              <img src={previewImg} className="w-full" alt="productImg" />
            </div>

            <div className="col-span-2 pl-12">
              <h2 className="font-bold text-5xl mb-8">{product.title}</h2>
              <p className="text-red-500 font-semibold  text-xl mb-4">
                Harga:
                <span className="text-2xl font-bold ml-2">
                  {" "}
                  Rp.
                  {product.price}
                </span>
              </p>
              <p className="font-semibold mb-10 text-xl flex items-center">
                Category:{" "}
                <span className="bg-red-200 py-1 px-4 rounded-md font-bold text-xl ml-3">
                  {product.category}
                </span>
              </p>
              <button
                className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-300 hover:transition hover:duration-200"
                onClick={addToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 py-3 mt-20 border-b border-slate-200">
            <h6 className="text-red-500 font-semibold text-lg">
              Deskripsi Menu
            </h6>
          </div>

          <div className="py-7 px-0">
            <p className="leading-7">{product.desc}</p>
          </div>

          <div className="mt-4">
            <h2 className="font-bold text-2xl">Kamu Mungkin Juga Suka</h2>
            <div className="grid grid-cols-4 gap-4 mt-8">
              {loading ? (
                <CardSkeleton cards={8} />
              ) : (
                relatedProduct.map((item) => (
                  <div
                    className="border border-solid shadow-md rounded-lg"
                    key={item.id}
                  >
                    <ProductCard item={item} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuDetails;
