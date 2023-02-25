import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTraction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTraction);
  };
  return (
    <>
      <h3 className="add-new">Add New Transaction</h3>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            value={text}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">
            Amount
            <br />
            (negative-expense ,positive-income)
          </label>
          <input
            type="text"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
