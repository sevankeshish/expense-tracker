import { useState } from "react"
import TransactionForm from "./TransactionForm"

const OverviewComponent = ({incomeProps,expenseProps,AddTrancsactionProp}) => {
    const [isShow , setIsShow] = useState(false)

    return (
        <>
             <div className="topSection">
                <p>Balance : ${incomeProps - expenseProps}</p>
                <button onClick = {()=>setIsShow((prevState) => !prevState)} className={`btn ${isShow && "cancel"}`}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransactionForm addTrancsaction={AddTrancsactionProp} setIsShowprops={setIsShow}/>}
            <div className="resultSection">
                <div className="expenseBox">
                    Expense : <span style={{color:"red"}}>${expenseProps}</span>
                </div>
                <div className="expenseBox">
                    income : <span>${incomeProps}</span>
                </div>
            </div>

        </>
    )
}

export default OverviewComponent