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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis possimus unde maiores provident doloribus, aliquam exercitatione velit consequuntur quibusdam quas, architecto beatae dolore atque, deserunt ex. Officia possimus ex corporis?",
      alamat: "Gresik, Indonesia",
    },
    {
      imgUrl: testimoni2Img,
      name: "Surti Dwi Inasari",
      testi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis possimus unde maiores provident doloribus, aliquam exercitatione velit consequuntur quibusdam quas, architecto beatae dolore atque, deserunt ex. Officia possimus ex corporis?",
      alamat: "Jombang, Indonesia",
    },
    {
      imgUrl: testimoni3Img,
      name: "Thierry Henry",
      testi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis possimus unde maiores provident doloribus, aliquam exercitatione velit consequuntur quibusdam quas, architecto beatae dolore atque, deserunt ex. Officia possimus ex corporis?",
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
