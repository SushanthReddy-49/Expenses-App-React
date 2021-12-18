import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem"; 

const ExpensesList = (props) => {
  let expensesContent = <p>No Expenses Found.</p>;
  if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  }
  return <div>
      <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        amount={expense.amount}
        title={expense.title}
      />
    ))}
      </ul>
  </div>;
};

export default ExpensesList;
