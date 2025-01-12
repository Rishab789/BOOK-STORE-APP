import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItems,
  increaseCartItems,
} from "../store/slices/cartSlice";

const Counter = ({ counter, productId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="font-bold text-2xl"
        onClick={() => {
          dispatch(decreaseCartItems({ productId }));
        }}
      >
        -
      </button>
      {counter}
      <button
        className="font-bold text-2xl"
        onClick={() => {
          dispatch(increaseCartItems({ productId }));
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
