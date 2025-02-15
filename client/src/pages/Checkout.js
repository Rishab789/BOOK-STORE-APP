import React from "react";
import Button from "../components/Button";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="rufina1">
      <div className="md:px-12 lg:px-14">
        <p className="text-3xl border-b-2 w-32 pt-5">Checkout</p>
        <div className="flex flex-col md:flex-row lg:flex-row ">
          {/* Billing Details  */}
          <div className="md:w-1/2 lg:w-1/2 px-5 py-5 mt-20 mb-36">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-4xl mb-5 border-b-2">
              BILLING DETAILS
            </p>
            <form>
              <div className="flex flex-col md:flex-row lg:flex-row  gap-5 mb-5">
                <div className="flex flex-col md:w-1/2 lg:w-1/2">
                  <p>
                    {" "}
                    First Name <span>*</span>
                  </p>
                  <input type="text" className="h-10 border  border-black" />
                </div>
                <div className="flex flex-col md:w-1/2 lg:w-1/2">
                  <p>
                    Last Name <span>*</span>
                  </p>
                  <input type="text" className="h-10 border border-black " />
                </div>
              </div>
              <div className="">
                <p>
                  Address <span>*</span>
                </p>
                <input
                  type="text"
                  className="h-10 border w-full mb-5 border-black"
                  placeholder="Street address"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="h-10 border w-full mb-5 border-black"
                  placeholder="Apartment,suit (optional)"
                />
              </div>
              <div className="mb-5">
                <p>
                  Town/City <span>*</span>
                </p>
                <input
                  type="text"
                  className="h-10 border w-full border-black"
                />
              </div>
              <div className="mb-5">
                <p>
                  Landmark <span>*</span>
                </p>
                <input
                  type="text"
                  className="h-10 border w-full border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
                <div className="flex flex-col md:w-1/2 lg:w-1/2">
                  <p>
                    State <span>*</span>
                  </p>
                  <input type="text" className="h-10 border border-black" />
                </div>
                <div className="flex flex-col md:w-1/2 lg:w-1/2">
                  <p>
                    PostCode/Zip <span>*</span>
                  </p>
                  <input type="text" className="h-10 border border-black" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                <div className="flex flex-col md:w-1/2 lg:w-1/2">
                  <p>
                    Email Address <span>*</span>
                  </p>
                  <input type="email" className="h-10 border border-black" />
                </div>
                <div className="flex flex-col md:w-1/2 lg:w-1/2">
                  <p>
                    Phone <span>*</span>
                  </p>
                  <input type="text" className="h-10 border border-black " />
                </div>
              </div>
            </form>
          </div>
          {/* Your Order  */}
          <div className="bg-[#f2f2f2] md:w-1/2 lg:w-1/2  justify-center md:mt-40 lg:mt-40 mb-36 px-10">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-4xl py-5">
              YOUR ORDER
            </p>
            <table className="w-full  ">
              <tr className="">
                <td>PRODUCT</td>
                <td>TOTAL</td>
              </tr>
              <tr className="">
                <td>Vestibulum suscipit x {5}</td>
                <td>£165.00</td>
              </tr>
              <tr className="">
                <td>Cart Subtotal</td>
                <td>£215.00</td>
              </tr>
              <tr className="">
                <td>Shipping</td>
                <td>₹200/-</td>
              </tr>
              <tr className="">
                <td>ORDER TOTAL</td>
                <td>£215.00</td>
              </tr>
            </table>
            <Button
              value="PLACE ORDER"
              color="secondary-color"
              className="w-full mt-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
