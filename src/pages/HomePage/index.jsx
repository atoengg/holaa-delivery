import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import heroSection from "../../assets/img/hero-section.png";
import easyOrderImg from "../../assets/img/easy-order.png";
import fastedDeliveryImg from "../../assets/img/fasted-delivery.png";
import bestQualityImg from "../../assets/img/best-quality.png";
import catagoryFood from "../../assets/logo/food.png";
import catagoryDrink from "../../assets/logo/drink.png";
import fliterImg from "../../assets/logo/filter.png";
import appImg from "../../assets/img/appImg.png";
import googlePlayImg from "../../assets/logo/google-play.png";
import appleImg from "../../assets/logo/apple.png";
import ProductCard from "../../components/UI/Product-Card/ProductCard";
import Testimoni from "../../components/UI/Corousel/Testimoni";
import CardSkeleton from "../../components/UI/ProductCard-Skeleton/CardSkeleton";
import ChatAI from "../../components/UI/ChatAI/ChatAI";
import AOS from "aos";

const HomePage = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-in-out",
      delay: 300,
    });
  });

  useEffect(() => {
    setLoading(true);

    if (category === "ALL") {
      axios
        .get(`${apiUrl}/products`)
        .then((res) => {
          setAllProducts(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      axios
        .get(`${apiUrl}/products?category=${category}`)
        .then((res) => {
          setAllProducts(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [category]);

  const services_item = [
    {
      title: "Easy To Order",
      imgUrl: easyOrderImg,
      desc: "semuanya dirancang agar Anda dapat memesan makanan dan minuman dengan cepat dan efisien. Kami percaya bahwa kemudahan ini adalah kunci untuk memberikan pengalaman pelanggan yang memuaskan.",
    },
    {
      title: "Fasted Delivery",
      imgUrl: fastedDeliveryImg,
      desc: "kami memberikan layanan unggulan, Anda dapat yakin pesanan Anda akan tiba dengan cepat, tetap segar, dan siap dinikmati. Holaa Delivery memberikan kecepatan yang Anda butuhkan dalam setiap hidangan!",
    },
    {
      title: "Best Quality",
      imgUrl: bestQualityImg,
      desc: "Kami percaya bahwa kualitas adalah kunci kelezatan. Dengan 'Best Quality', Anda dapat yakin bahwa setiap kunjungan ke Cafe kami akan memberikan pengalaman kuliner terbaik yang tak terlupakan.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className=" bg-white relative py-32">
        <div className="container mx-auto px-8 md:px-6">
          <div className="flex items-center justify-between">
            <div className="w-full lg:w-8/12" data-aos="fade-right">
              <h1 className="font-bold text-4xl mb-5 leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Jadi Yang Tercepat Dalam Mengantarkan{" "}
                <span className="text-red-500">Makanan</span> dan{" "}
                <span className="text-red-500">Minuman</span> Anda.
              </h1>
              <p className="text-base text-left text-slate-800 max-w-[480px] mb-8 lg:text-left">
                Holaa Delivery, merupakan layanan terbaru di Cafe kami agar Anda
                dapat dengan mudah memesan hidangan dan minuman favorit kami.
                Dari makanan istimewa hingga minuman segar, semuanya siap untuk
                kami antarkan ke rumah Anda. Nikmati pengalaman pesan antar yang
                praktis dan lezat dengan Holaa Delivery!.
              </p>

              <div className="flex flex-row gap-4">
                <button className="bg-red-500 text-white rounded-full py-2 px-4 text-base hover:bg-red-300 hover:transition hover:duration-200">
                  Order Now
                </button>
                <button className="flex items-center bg-transparent border border-red-500 py-2 px-4 text-base rounded-full text-red-500">
                  <FaPlay />
                  <span className="text-black ml-2">Order Process</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:4/12" data-aos="fade-left">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src={heroSection}
                    alt="hero section"
                    className="max-w-full ml-auto"
                  />

                  <span class="absolute -bottom-10 -top-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125 lg:-bottom-0 lg:top-0">
                    <svg
                      with="400"
                      height="400"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#f87171"
                        d="M36.3,-40.4C49.4,-32.2,64,-23,70.4,-9.1C76.9,4.9,75.1,23.6,64.5,32.7C53.8,41.8,34.3,41.2,18.8,43.1C3.3,45,-8.1,49.4,-19.6,47.9C-31.2,46.3,-42.7,38.8,-48,28.3C-53.3,17.9,-52.3,4.4,-49.4,-8.1C-46.5,-20.6,-41.5,-32.1,-33,-41.1C-24.4,-50.1,-12.2,-56.5,-0.3,-56.2C11.6,-55.8,23.2,-48.6,36.3,-40.4Z"
                        transform="translate(100 100) scale(1.2)"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* services section */}
      <section className="bg-red-100">
        <div className="container mx-auto px-8 py-12 md:px-6">
          <div className="text-center mb-10 lg:mb-6" data-aos="fade-down">
            <span className="text-red-500 font-medium text-sm">
              What We Serve
            </span>
            <h2 className="font-bold text-4xl text-gray-800 sm:text-3xl ">
              Your Favorite Food <br /> Delivery Partner{" "}
            </h2>
          </div>

          <div
            className="my-14 grid gap-8 grid-cols-3 px-20"
            data-aos="fade-up"
          >
            {services_item?.map((item, index) => (
              <div
                className={`bg-white text-center  flex flex-col items-center rounded-md px-8 pb-8 ${
                  index === 1 ? "shadow-serve" : ""
                }`}
                key={index}
              >
                <img
                  src={item.imgUrl}
                  alt="easy order img"
                  className={` ${
                    index === 2 ? "w-20 h-2w-20 mt-4" : "w-20 h-20"
                  }`}
                />

                <h3 className="text-gray-800 text-lg font-semibold mt-4">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-800 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End services section */}

      {/* menu section */}
      <section className="container mx-auto px-8 py-12 md:px-6">
        <div className="text-center mb-10 lg:mb-6">
          <div className="" data-aos="fade-down">
            <span className="text-red-500 font-medium text-sm">Our Menu</span>
            <h2 className="font-bold text-4xl text-gray-800 sm:text-3xl ">
              Menu That Always Make You <br /> To Fall In Love{" "}
            </h2>

            <div className="flex items-center my-6 justify-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-white py-2 px-4 shadow-md shadow-slate-600 ">
                <img src={fliterImg} alt="" className="w-6 h-6" />
              </div>

              <button onClick={() => setCategory("ALL")}>
                <div
                  className={`flex items-center justify-center rounded-lg py-2 px-4 ${
                    category === "ALL"
                      ? "bg-red-500 text-white"
                      : "bg-white shadow-md shadow-slate-600"
                  }  `}
                >
                  <p>All Menus</p>
                </div>
              </button>

              <button onClick={() => setCategory("food")}>
                <div
                  className={`flex items-center justify-center rounded-lg py-1 px-4 ${
                    category === "food"
                      ? "bg-red-500 text-white"
                      : "bg-white shadow-md shadow-slate-600"
                  }  `}
                >
                  <img src={catagoryFood} alt="" className="w-8 h-8" />
                  <p className="ml-3">Food</p>
                </div>
              </button>
              <button onClick={() => setCategory("drink")}>
                <div
                  className={`flex items-center justify-center rounded-lg py-1 px-4 ${
                    category === "drink"
                      ? "bg-red-500 text-white"
                      : "bg-white shadow-md shadow-slate-600"
                  }   `}
                >
                  <img src={catagoryDrink} alt="" className="w-8 h-8" />
                  <p className="ml-3">Drink</p>
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4" data-aos="fade-up">
            {loading ? (
              <CardSkeleton cards={8} />
            ) : (
              allProducts.slice(0, 8).map((item) => (
                <div
                  className="border border-solid shadow-md rounded-lg"
                  key={item.id}
                >
                  <ProductCard item={item} />
                </div>
              ))
            )}
          </div>

          <div className="flex justify-center items-center mt-5">
            <button className=" bg-white shadow-md shadow-slate-500 py-2 px-10 rounded-full text-red-500">
              <Link to={"/menu"}>Show More</Link>
            </button>
          </div>
        </div>
      </section>
      {/*End menu section */}

      {/* testimoni section */}
      <section className="container mx-auto px-8 py-12 md:px-6">
        <div className="text-center mb-10 lg:mb-6">
          <div className="" data-aos="fade-down">
            <h2 className="font-bold text-4xl text-gray-800 mb-4 sm:text-3xl">
              Testimonials About Us
            </h2>
            <span className="bg-red-500 px-10  rounded-full"></span>
            <p className="mt-4 text-lg">
              Cerita Pengalaman Mereka Dalam Merasakan Layanan Holaa Delivery.
            </p>
          </div>

          <div className="" data-aos="fade-up">
            <Testimoni />
          </div>
        </div>
      </section>
      {/* End testimoni section */}

      {/* app section */}
      <section className="bg-red-100">
        <div className="container mx-auto px-8 py-12 md:px-6">
          <div className="flex flex-row justify-center">
            <div className="w-5/12" data-aos="fade-right">
              <img src={appImg} alt="" />
            </div>
            <div
              className="flex flex-col justify-center w-4/12"
              data-aos="fade-left"
            >
              <p className="text-red-500">Donwload our app</p>
              <h2 className="font-bold text-4xl text-gray-800 sm:text-3xl">
                Get The Groceries App Order More Easily.
              </h2>
              <p className="mt-4 text-slate-800 text-sm">
                Rasakan kemudahan Pelayanan Kami, Anda Dapat Unduh aplikasi kami
                sekarang di Play Store atau di App Store dan tingkatkan
                pengalaman bersantap Anda!.
              </p>

              <div className="flex flex-row mt-10 gap-2">
                <div className="bg-black rounded-md py-1 px-5">
                  <div className="flex flex-row items-center text-white">
                    <img
                      src={googlePlayImg}
                      alt="img-google-play"
                      className="w-8 h-8"
                    />
                    <div className="flex flex-col ml-2 ">
                      <p className="text-[10px]">GET IN ON</p>
                      <p className="font-semibold text-xl">Google Play</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-md py-1 px-5">
                  <div className="flex flex-row items-center text-white">
                    <img
                      src={appleImg}
                      alt="img-google-play"
                      className="w-8 h-8"
                    />
                    <div className="flex flex-col ml-2 ">
                      <p className="text-[10px]">Donwload on the</p>
                      <p className="font-semibold text-xl">App Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End app section */}

      <ChatAI />
    </div>
  );
};

export default HomePage;
