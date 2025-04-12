import React, { useState } from "react";

function Form({ resetForm, onAddExpense }) {
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      expenseDescription,
      expenseCategory,
      expenseAmount,
      expenseDate,
    };
    console.log("New Expense:", newExpense);
    onAddExpense(newExpense);

    setExpenseDescription("");
    setExpenseCategory("");
    setExpenseAmount("");
    setExpenseDate("");

    event.target.reset();
    resetForm();
  }
  function handleButtonClick() {
    console.log("Submit Button clicked");
  }
  return (
    <section id="expense-form" className="card p-4 shadow-sm rounded-4 mb-5">
      <h5>Add Expense</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="expense-description">
            Expense Description
            <input
              type="text"
              name="expense-description"
              value={expenseDescription}
              onChange={(e) => setExpenseDescription(e.target.value)}
              className="form-control"
              id="expense-description"
              placeholder="Enter expense description"
            />
          </label>
        </div>
        <div className="mb-3">
        <label htmlFor="expense-category">
          Expense Category
          <input
            type="text"
            name="expense-category"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            className="form-control"
            id="expense-category"
            placeholder="Enter expense category"
          />
        </label>
        </div>
        <div className="mb-3">
        <label htmlFor="expense-amount">
          Expense Amount
          <input
            type="number"
            name="expense-amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="form-control"
            id="expense-amount"
            placeholder="Enter expense amount"
          />
        </label>
        </div>
        <div className="mb-3">
        <label htmlFor="expense-date">
          Expense Date
          <input
            type="date"
            name="expense-date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
            className="form-control"
            id="expense-date"
            placeholder="Enter expense date"
          />
        </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
