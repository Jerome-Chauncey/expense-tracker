import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import expensesData from "./data/expensesData";
import Header from "./Header";

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const resetForm = () => {
    console.log("Form reset");
  };
  return (
    <>
      <Header />
      <div id="app" className="container-fluid px-2">
        <div className="row no-gutters"> 
          <div className="col-md-3">
            <Form onAddExpense={handleAddExpense} resetForm={resetForm} />
          </div>
          <div className="col-md-9">
            <Table expenses={expenses} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
