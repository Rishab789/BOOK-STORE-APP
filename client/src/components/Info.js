import React from "react";
import { contact } from "../services/contact";

const Info = () => {
  return (
    <div className="lg:flex lg:justify-around   p-5 md:grid md:grid-cols-2 md:gap-5 grid grid-cols-1 gap-5  ">
      {contact.map(({ title, subTitle, icon }) => (
        <div className="flex items-center gap-1">
          <img src={icon} width={30} />
          <div>
            <p>{title}</p>
            <p>{subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
