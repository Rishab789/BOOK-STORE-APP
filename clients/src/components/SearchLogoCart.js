import React from "react";
import { IoIosCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./SearchLogoCart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchLogoCart = () => {
  const length = useSelector((state) => state.cart);

  return (
    <section className=" w-full">
      <div className="flex flex-col  md:flex-row lg:flex-row justify-between items-center   paddingClass">
        {/* search  */}
        <div className="flex ">
          <input
            type="text"
            placeholder="Search Books"
            className="rounded-tl  rounded-bl h-10  bg-[#dedede] pl-2"
            id="search"
          />
          <button className=" rounded-tr rounded-br pr-3 pl-3 bg-secondary-color  text-white">
            <FaSearch />
          </button>
        </div>

        {/* logo  */}
        <div>
          <Link to="/">
            <p className="text-4xl">Logo</p>
          </Link>
        </div>

        {/* cart  */}
        <Link to="/cart">
          <div className="flex items-center hover:text-secondary-color hover:cursor-pointer">
            <div className="relative">
              <IoIosCart style={{ fontSize: 45 }} />
              <div className="absolute -bottom-4  -right-2 bg-secondary-color text-white h-8 w-8 flex justify-center items-center rounded-full">
                {length.length}
              </div>
            </div>
            <p>MY CART</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SearchLogoCart;
