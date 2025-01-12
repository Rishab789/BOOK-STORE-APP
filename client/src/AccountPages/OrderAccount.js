import React from "react";
import Button from "./../../../client/src/components/Button";

const OrderAccount = () => {
  return (
    <div>
      <p className="text-2xl border-b-2 mb-5">Orders</p>
      <div>
        <table className="w-full text-center">
          <tr>
            <td>Order</td>
            <td>Date</td>
            <td>Status</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Aug 22, 2018</td>
            <td>Pending </td>
            <td>₹3000/-</td>
            <td>
              <Button value="View" color="sign-color" className="w-16" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OrderAccount;
