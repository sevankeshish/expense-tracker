const TransActionComponent = ({transactionsProps}) => {
    return ( 
        <section>
            {transactionsProps.map((t) => (
                <div key={t.id}>{t.desc}</div>
            ))}
        </section>
     );
}
 
export default TransActionComponent;