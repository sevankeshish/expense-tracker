import { useEffect, useState } from "react";

const TransActionComponent = ({transactionsProps}) => {
    const [searchItem,setSearchItem] = useState("")
    const [filteredTnx, setFilteredTxn] = useState(transactionsProps)

    const changeHandler = (e) =>{
        setSearchItem(e.target.value)
        filterTransactions(e.target.value)
    }

    const filterTransactions = (search) => {
        if(!search || search ===""){
            setFilteredTxn(transactionsProps)
            return;
        }
        const filtered = transactionsProps.filter((t) =>
         t.desc.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredTxn(filtered);
    }

    useEffect(()=>{
        filterTransactions(searchItem)
    },[transactionsProps])

    if(!transactionsProps.length) return <h3>add some transactions</h3>

    return ( 
        <section>
            <input type="text" className="search" value={searchItem} onChange={changeHandler} placeholder="search fro transactions ..."/>
            {filteredTnx.length ? 
            filteredTnx.map((t) => (
                <div className="transaction" style={{borderRight: t.type === "expense" && "4px solid red"}} key={t.id}>
                    <span>{t.desc}</span>
                    <span>$ {t.amount}</span>
                </div>
            ))
            : "no item matchs !"
        }
        </section>
     );
}
 
export default TransActionComponent; 