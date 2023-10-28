import React from "react";
import Slider from "react-slick";
import testimoni1Img from "../../../assets/img/testimoni1.jpg";
import testimoni2Img from "../../../assets/img/testimoni2.jpg";
import testimoni3Img from "../../../assets/img/testimoni3.jpg";

const Testimoni = () => {
  const testi_item = [
    {
      imgUrl: testimoni1Img,
      name: "Sulaimain",
      testi:
        "Terima kasih Cafe Holaa Delivery! Saya benar-benar terkesan dengan hidangan yang luar biasa dan layanan yang ramah. Rasanya seperti membawa restoran favorit saya ke dalam rumah. Saya pasti akan kembali lagi untuk mencoba lebih banyak hidangan lezat!",
      alamat: "Gresik, Indonesia",
    },
    {
      imgUrl: testimoni2Img,
      name: "Surti Dwi Inasari",
      testi:
        "Wow! Saya sangat senang dengan pengalaman pesan antar dari Cafe Holaa Delivery. Hidangan mereka selalu tiba dalam kondisi segar dan rasa yang lezat. Ini adalah solusi sempurna untuk hari-hari sibuk ketika saya ingin makan enak tanpa harus keluar rumah. Terima kasih Holaa Delivery!",
      alamat: "Bejan-Panceng-Gresik",
    },
    {
      imgUrl: testimoni3Img,
      name: "Thierry Henry",
      testi:
        "Saya telah menjadi pelanggan setia Cafe Holaa Delivery selama beberapa bulan terakhir, dan saya belum pernah kecewa. Hidangan mereka selalu penuh rasa, dengan bahan-bahan segar dan berkualitas. Saya juga sangat menghargai pelayanan cepat dan ramah dari tim pengantaran mereka. Holaa Delivery adalah pilihan terbaik untuk makanan lezat di kenyamanan rumah saya.",
      alamat: "Jakarta, Indonesia",
    },
  ];

  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoPlaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {testi_item?.map((item, index) => (
          <div
            className="border-solid shadow-md shadow-slate-500 bg-white rounded-3xl px-32 py-20 my-10"
            key={index}
          >
            <div className="flex flex-row">
              <img
                src={item.imgUrl}
                alt="testimoni-img"
                className="w-32 h-32 rounded-full"
              />
              <p className="text-start text-base ml-8">{item.testi}</p>
            </div>

            <div className="text-start px-40">
              <h4 className="text-red-500 font-bold text-xl">{item.name}</h4>
              <p className="text-sm">{item.alamat}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimoni;
