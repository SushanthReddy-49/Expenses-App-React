import "./ExpensesBoard.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const ExpensesBoard = (props) => {
  const [year, setYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense=>{
      return expense.date.getFullYear().toString() === year
  })
  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter default={year} onFilterChange={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
  );
};

export default ExpensesBoard;
