import React from "react";
const AddTransaction = () => {
  return (
    <>
      <h3 className="add-new">Add New Transaction</h3>
      <form action="" className="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text" />
        </div>
        <div className="form-control">
          <label htmlFor="">
            Amount
            <br />
            (negative-expense ,positive-income)
          </label>
          <input type="text" placeholder="Enter amount" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
