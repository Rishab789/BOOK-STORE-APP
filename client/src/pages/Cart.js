import React from "react";
import CartDetails from "../components/CartDetails";

const Cart = () => {
  return (
    <section className="px-10 md:px-20 lg:px-20 my-20 ">
      <div className="rufina1 text-3xl">Cart</div>
      <CartDetails />;
    </section>
  );
};

export default Cart;
