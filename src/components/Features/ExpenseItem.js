import "./ExpenseItem.css";
import Calendar from "./Calendar";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <Calendar cal={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click Me</button> */}
    </Card>
  );
};

export default ExpenseItem;
