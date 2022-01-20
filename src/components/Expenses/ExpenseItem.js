import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from '../UI/Card'

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log("Click");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
          <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amout}</div>
      </div>
      <button onClick={clickHandler}>Change</button>             
    </Card>
  );
}

export default ExpenseItem;
