import React from "react";
import EBookProducts from "./EBookProducts";
import { booksData } from "../services/booksData";

const EBookPage = () => {
  return (
    <section className="">
      <div className="py-10 px-5">
        <p className="rufina1 text-4xl ">e-Books</p>

        <div className="grid grid-cols-4 my-14 gap-10 px-10">
          {booksData.map((item) => (
            <EBookProducts product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EBookPage;
