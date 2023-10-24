import React from "react";
import imgContact from "../../assets/img/img-contact.jpg";
import FormContact from "../../components/Form/FormContact";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <div>
      <section
        className=""
        style={{
          background: `url(${imgContact})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <div
          className="container mx-auto h-full py-[148px] "
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex justify-between ">
            <div className="w-6/12">
              <h3 className="text-[#f3fff4] font-bold text-5xl">
                Hubungi Kami!
              </h3>
              <div className="mt-5">
                <p className="text-[#f3fff4ac] text-base leading-6">
                  jika anda mempunyai masukan atau saran dari caffee kami, anda
                  dapat memberikan saran dengan mengisi form di samping. saran
                  atau masukan anda bersifat anonymous(rahasia).
                </p>
              </div>
            </div>

            <div className="w-6/12">
              <div className="w-full h-full py-[50px] px-10 rounded-md">
                <FormContact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
