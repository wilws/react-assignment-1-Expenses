import React , {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js"
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";


const Expenses = (props) => {
  const expenses = props.expenses

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    console.log("Enpense.js");
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        {expenses.map((el) => {
          return (
            <ExpenseItem
              title={el.title}
              amount={el.amount}
              date={el.date}
              key={el.id}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}


export default Expenses;