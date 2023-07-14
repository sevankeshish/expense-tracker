import { useEffect, useState } from "react"
import TransActionComponent from "./TransactionComponent";
import OverviewComponent from "./OverviewComponent";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0)
    const [transactions, setTransactions] = useState([])

    const AddTrancsaction = (formValues) => {
        console.log(formValues);
        const data = {...formValues, id: Date.now()}
        setTransactions([...transactions, data])
    }

    useEffect(()=>{
        let exp = 0;
        let inc = 0;
        transactions.forEach((t) => {
            t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
        });
        setExpense(exp)
        setIncome(inc)
    },[transactions]);

    return (
        <section className="container">
            <OverviewComponent expenseProps={expense} incomeProps={income} AddTrancsactionProp = {AddTrancsaction}/>
            <TransActionComponent transactionsProps={transactions}/>
        </section>
    )
}

export default ExpenseApp