import { useState } from "react";

const TransactionForm = ({addTrancsaction, setIsShowprops}) => {
    const [formValues, setFormValues]= useState({desc:"",amount:0,type:"expense"})

    const changeHandler = (e) =>{
        setFormValues({ ...formValues, [e.target.name] : e.target.value})
        console.log(formValues);
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        // console.log("object");
        addTrancsaction(formValues)
        setIsShowprops(false)
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc}/>
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount}/>
            <div className="radioBox">
                <input id="expense" type="radio" value="expense" name="type" onChange={changeHandler} checked={formValues.type ==="expense"}/>
                <label htmlFor="expense">Expense</label>
                <input id="income" type="radio" value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"}/>
                <label htmlFor="income">Income</label>
            </div>
            <button className="btn primary" type="submit">Add Transaction</button>
        </form>
     );
}
 
export default TransactionForm;