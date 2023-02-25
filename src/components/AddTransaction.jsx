import React, { useState } from "react";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amout, setAmount] = useState(0);
  return (
    <>
      <h3 className="add-new">Add New Transaction</h3>
      <form action="" className="form">
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
            value={amout}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
