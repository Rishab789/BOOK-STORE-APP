import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItems } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const cartData = useSelector((state) => state.cart);
  console.log("data cming from product details", cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [counter, setCounter] = useState(1);

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="my-10 ">
      <div className="overflow-x-auto">
        <table className="m-auto  sm:w-1/2 md:w-full lg:w-full ">
          <tr>
            <th>IMAGE</th>
            <th className="w-[40%]">PRODUCT</th>
            <th className="w-[20%] ">PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>

          {cartData.map(({ productId, image, price, quantity, title }) => (
            <tr key={productId}>
              <>
                <td>
                  <img src={image} width={100} />
                </td>
                <td>{title}</td>
                <td>₹ {price}/-</td>
                <td>
                  <div className="border border-black flex items-center justify-between px-2">
                    <Counter counter={quantity} productId={productId} />
                  </div>
                </td>
                <td>₹ 200/-</td>
                <td
                  className="cursor-pointer"
                  onClick={() => dispatch(removeCartItems({ productId }))}
                >
                  <MdDelete />
                </td>
              </>
            </tr>
          ))}
        </table>
      </div>
      <div className="flex justify-center md:justify-end lg:justify-end my-10">
        <div className="  rufina1 ">
          <p className="text-3xl border-b-2 border-black"> Cart Totals</p>
          <div className="flex justify-between my-2">
            <p>SUBTOTAL</p>
            <p>₹{100}</p>
          </div>
          <div className="flex justify-between">
            <p>SHIPPING</p>
            <p>₹{20}</p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-2xl">TOTAL</p>
            <p className="text-2xl text-secondary-color ">₹{200}</p>
          </div>
          {/* <button>PROCEED TO CHECKOUT</button> */}
          <Button
            value="Proceed to checkout"
            color="secondary-color"
            onClick={handleCheckoutClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
