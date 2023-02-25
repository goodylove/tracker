import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  const amount = transaction.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

  return (
    <>
      <h4 className="balance">YOUR BALANCE</h4>
      <h4 className="balance">${total}</h4>
    </>
  );
};

export default Balance;
