import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      id="transaction-list"
    >
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
