import { useState } from "react"
import TransactionForm from "./TransactionForm"

const OverviewComponent = ({incomeProps,expenseProps,AddTrancsactionProp}) => {
    const [isShow , setIsShow] = useState(false)

    return (
        <>
             <div className="topSection">
                <p>Balance : {incomeProps - expenseProps}</p>
                <button onClick = {()=>setIsShow((prevState) => !prevState)}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransactionForm addTrancsaction={AddTrancsactionProp}/>}
            <div className="resultSection">
                <div>Expense : {expenseProps}</div>
                <div>income : {incomeProps}</div>
            </div>

        </>
    )
}

export default OverviewComponent