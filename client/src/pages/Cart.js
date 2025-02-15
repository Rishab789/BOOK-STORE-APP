import React from "react";
import CartDetails from "../components/CartDetails";
import EmptyCart from "../components/EmptyCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);

  return (
    <section className="px-10 md:px-20 lg:px-20 my-20 ">
      <div className="rufina1 text-3xl">Cart</div>
      {cartData.length == 0 ? (
        <EmptyCart />
      ) : (
        <CartDetails cartData={cartData} />
      )}
      ;
    </section>
  );
};

export default Cart;
