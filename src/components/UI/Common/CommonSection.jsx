import React from "react";
import bannerImg from "../../../assets/img/banner.jpg";

const CommonSection = ({ title }) => {
  return (
    <div>
      <section
        className="bg-no-repeat bg-cover bg-center py-20 px-0"
        style={{
          background: `linear-gradient(#212245b2, #212245b2), url(${bannerImg})`,
        }}
      >
        <div className="container mx-auto max-w-full">
          <h2 className="font-bold text-white text-3xl">{title}</h2>
        </div>
      </section>
    </div>
  );
};

export default CommonSection;
