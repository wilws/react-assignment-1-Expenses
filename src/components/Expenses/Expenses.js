import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js"
import "./Expenses.css";


function Expenses(props) {
  const expenses = props.expenses
  return (
    <Card className="expenses">
      {
        expenses.map((el)=>{
          return <ExpenseItem
            title={el.title}
            amount={el.amount}
            date={el.date}
            key={el.id}
          ></ExpenseItem>
        })
      }
    </Card>
  );
}


export default Expenses;