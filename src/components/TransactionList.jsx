import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3 className="transactin-h">History</h3>
      <ul id="list">
        {transaction.map((transation) => {
          return <Transaction key={transation.id} transaction={transation} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
