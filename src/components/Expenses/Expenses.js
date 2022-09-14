import React , {useState} from 'react'

import Card from "../UI/Card.js"
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart.js';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredExpenses = props.expenses.filter((e)=>{
      return e.date.getFullYear() === +filteredYear ;
   
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}


export default Expenses;