const TransActionComponent = ({transactionsProps}) => {
    return ( 
        <section>
            {transactionsProps.map((t) => (
                <div className="transaction" style={{borderRight: t.type === "expense" && "4px solid red"}} key={t.id}>
                    <span>{t.desc}</span>
                    <span>$ {t.amount}</span>
                </div>
            ))}
        </section>
     );
}
 
export default TransActionComponent;