import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeBalance = () => {
  const { transaction } = useContext(GlobalContext);

  const amount = transaction.map((transaction) => transaction.amount);

  // income balance
  const income = amount
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);
  // expense
  const expense = amount
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4>INCOME</h4>
        <p id="money-plus" className="money plus">
          $0.00
        </p>
      </div>
      <div className="exp">
        <h4>EXPENSE</h4>
        <p id="money-minus" className="money minus">
          $0.00
        </p>
      </div>
    </div>
  );
};

export default IncomeBalance;
