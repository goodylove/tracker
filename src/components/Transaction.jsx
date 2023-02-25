import React from "react";
const Transaction = () => {
  return (
    <>
      <h3 className="transactin-h">History</h3>
      <ul id="list">
        <li className="transaction-list">
          Cash <span>-$400</span>
          {/* <button className="delete-btn">x</button> */}
        </li>
      </ul>
    </>
  );
};

export default Transaction;
