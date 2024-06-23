import React from "react";
import css from '../../sass/Module/TransactionsList.module.css';
import transactions from "../../helpers/transactionsFacke";
import TransactionsItem from "./TransactionsItem";

const TransactionsList = () => {
    const hasTransaction = transactions.length>0
  return (
    <div className={css.wrapper}>
        {
            hasTransaction ? 
            (
            <table className={css.table}>
             <thead className={css.header}>
        <tr className={css.col}>
            <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {transactions.map((transaction) => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
      </table>
      )
            :
            (<div className={css.placeholder}>No transactions</div>)
        }
    </div>
  );
};

export default TransactionsList;
