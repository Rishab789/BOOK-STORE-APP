import React from "react";
import StripeBanners from "./../assets/stripeBanner.png";
import "./StripeBanner.css";

const StripeBanner = () => {
  return (
    <div className="bg-image  border border-black h-[20vh] m-auto w-[85vw] cursor-pointer  mb-20 relative">
      <p className="text-white text-xl font-bold absolute left-36 top-2">
        G. Meyer Book Depot
      </p>
      <p className="text-white text-3xl uppercase absolute top-9 left-72 text-black">
        Sale up to 30% off
      </p>
    </div>
  );
};

export default StripeBanner;
