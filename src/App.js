import ExpensesBoard from "./components/Features/ExpensesBoard";
import NewExpense from "./components/NewExpenseInputs/NewExpense";
import { useState } from "react";

const defaultData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(defaultData)

  const newExpenseHandler=(newExpenseData)=>{
    console.log("hello")
    setExpenses((prevData)=>{
      return [newExpenseData,...prevData]
    })
  }

  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler} />
      <ExpensesBoard items={expenses}/>
    </div>
  );
}

export default App;
