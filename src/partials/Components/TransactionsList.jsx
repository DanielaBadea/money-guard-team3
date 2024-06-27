import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from '../../sass/Module/TransactionsList.module.css';
import TransactionsItem from "./TransactionsItem";
import useModal from "../../hooks/useModal";
import ModalAddTransactions from "./ModalAddTransactions";
import { getTransactions } from "../../redux/transactions/operations";
import { selectorTransactions } from "../../redux/transactions/selectors";

const TransactionsList = () => {
    const headerMobile = ["Date", "Type", "Category", "Comment", "Sum"];
    const { isOpen, openModal, closeModal } = useModal();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactions());
    }, []);
    
    const transactions = useSelector(selectorTransactions);
    const hasTransaction = transactions.length > 0;

    return (
        <div className={css.wrapper}>
            {hasTransaction ? (
                <>
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
                    <div className={css.tableMobile}>
                        {transactions.map((transaction) => (
                            <TransactionsItem key={transaction.id} transaction={transaction} isMobile headerMobile={headerMobile} />
                        ))}
                     </div>
                    {/* <button type="button" onClick={openModal}>
                        +
                    </button> */}
                </>
            ) : (
            <div className={css.placeholder}>No transactions
              {/* <button type="button" onClick={openModal}>
                +
              </button> */}
            </div>
              
        )}
        {isOpen && <ModalAddTransactions closeModal={closeModal} />}
        </div>
    );
};

export default TransactionsList;
