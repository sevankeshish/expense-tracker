import { useState } from "react"
import TransActionComponent from "./TransactionComponent";
import OverviewComponent from "./OverviewComponent";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0)
    const [transactions, setTransactions] = useState([])

    return (
        <section className="container">
            <OverviewComponent expenseProps={expense} incomeProps={income}/>
            <TransActionComponent transactionsProps={transactions}/>
        </section>
    )
}

export default ExpenseApp