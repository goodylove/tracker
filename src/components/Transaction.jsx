import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      id="transaction-list"
    >
      <button className="delete-btn">x</button>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
