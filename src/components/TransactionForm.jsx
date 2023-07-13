import { useState } from "react";

const TransactionForm = ({addTrancsaction}) => {
    const [formValues, setFormValues]= useState({desc:"",amount:0,type:"expense"})

    const changeHandler = (e) =>{
        setFormValues({ ...formValues, [e.target.name] : [e.target.value]})
        console.log(formValues);
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        // console.log("object");
        addTrancsaction(formValues)
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc}/>
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount}/>
            <div>
                <input type="radio" value="expense" name="type" onChange={changeHandler} checked={formValues.type ==="expense"}/>
                <label>Expense</label>
                <input type="radio" value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"}/>
                <label>Income</label>
            </div>
            <button type="submit">Add Transaction</button>
        </form>
     );
}
 
export default TransactionForm;