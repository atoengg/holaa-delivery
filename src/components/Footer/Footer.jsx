import React from "react";
import logo from "../../assets/logo/logo.png";
import {
  FaLocationArrow,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white pt-32">
        <div className="container mx-auto ">
          <div className="grid gap-16 row-gap-10 lg:grid-cols-6">
            <div className="md:max-w-sm lg:col-span-2">
              <div className="flex items-center">
                <img src={logo} alt="logo" />
                <h2 className="ml-3 font-bold text-xl">
                  Holaa.<span className="text-red-600">Delivery</span>{" "}
                </h2>
              </div>
              <p className="text-sm text-slate-600 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nobis temporibus fuga harum in dolor quo, aperiam
                possimus eos quos.
              </p>
            </div>

            <div className="grid row-gap-8 grid-cols-2 gap-5 md:grid-cols-3 lg:col-span-4">
              <div className="">
                <p className="font-bold text-xl">Delivery Time</p>
                <p className="font-semibold text-base mt-3">Minggu - Kamis</p>
                <p className="font-normal text-sm mt-1">08.00 - 20.30 WIB</p>
                <p className="font-semibold text-base mt-5">Jum'at - Sabtu</p>
                <p className="font-normal text-sm mt-1">Tidak Melayani</p>
              </div>

              <div className="">
                <p className="font-bold text-xl">Contact</p>

                <div className="group flex items-center mt-4 hover:text-red-500">
                  <FaLocationArrow />
                  <a
                    href="https://www.google.com/maps/place/HOLAA+CAFE/@-6.8973909,112.457595,14z/data=!4m15!1m8!3m7!1s0x2e77e7f770a22f0b:0x31eaa2816904dacd!2sHOLAA+CAFE!8m2!3d-6.8972521!4d112.4643102!10e1!16s%2Fg%2F11q4h8dh2n!3m5!1s0x2e77e7f770a22f0b:0x31eaa2816904dacd!8m2!3d-6.8972521!4d112.4643102!16s%2Fg%2F11q4h8dh2n?entry=ttu"
                    className="text-sm text-slate-600 ml-2 group-hover:text-red-500"
                  >
                    Mulyorejo, Dalegan, Kec. Panceng, Kabupaten Gresik, Jawa
                    Timur
                  </a>
                </div>

                <div className="group flex items-center mt-4 hover:text-red-500">
                  <FaWhatsapp />
                  <a
                    href="https://api.whatsapp.com/send?phone=6281232098116"
                    className="text-sm text-slate-600 ml-2 group-hover:text-red-500"
                  >
                    Whatsapp: 081232098116
                  </a>
                </div>
              </div>

              <div className="">
                <p className="font-bold text-xl">Get In Touch</p>

                <p className="text-sm text-slate-600 mt-4">
                  Berlangganan Buletin mingguan kami dan terima pembaruan
                  melalui email
                </p>

                <div className="flex items-center mt-5">
                  <input
                    type="text"
                    name="subscribe"
                    id="subscribe"
                    className="w-full bg-transparent rounded-full border border-red-500 text-xs py-2 px-4 mr-2"
                    placeholder="masukan alamat email anda"
                  />

                  <button className="bg-red-500 p-2 rounded-full flex items-center justify-center text-white">
                    <BsSendFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-10" />
          <div className=" flex justify-between mt-2">
            <p className="text-sm text-slate-500 font-normal">
              All Rights Reserved @ Company 2023
            </p>
            <div className="flex items-center">
              <p className="text-sm text-slate-500 font-normal">
                Social Media:
              </p>
              <div className="">
                <a
                  href="https://www.instagram.com/holaa.indonesia/"
                  className="p-2 flex items-center justify-center bg-red-500 rounded-full text-white ml-2"
                >
                  <span>
                    <FaInstagram />
                  </span>
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.tiktok.com/@holaaindonesia?is_from_webapp=1&sender_device=pc"
                  className="p-2 flex items-center justify-center bg-red-500 rounded-full text-white ml-2"
                >
                  <span>
                    <FaTiktok />
                  </span>
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.facebook.com/profile.php?id=100082032754739&mibextid=ZbWKwL"
                  className="p-2 flex items-center justify-center bg-red-500 rounded-full text-white ml-2"
                >
                  <span>
                    <FaFacebook />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
