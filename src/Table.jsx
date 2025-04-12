import React, { useState } from "react";
import Filter from "./Filter";

function Table({ expenses }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const filteredExpenses = expenses.filter((expense) =>
    `${expense.expenseDate} ${expense.expenseCategory} ${expense.expenseDescription} ${expense.expenseAmount}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
    <div>
      <Filter onSearchChange={handleSearchChange} search={search}/>
      <div>
        
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.expenseDate}</td>
                <td>{expense.expenseCategory}</td>
                <td>{expense.expenseDescription}</td>
                <td>${expense.expenseAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
