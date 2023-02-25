import React from "react";
const IncomeBalance = () => {
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
