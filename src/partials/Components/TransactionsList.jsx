import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from '../../sass/Module/TransactionsList.module.css';
import TransactionsItem from "./TransactionsItem";
import useModal from "../../hooks/useModal";
import ModalAddTransactions from "./ModalAddTransactions";
import { getTransactions } from "../../redux/transactions/operations";
import { selectorError, selectorIsLoading, selectorTransactions } from "../../redux/transactions/selectors";
import ButtonAddTransactions from "./ButtonAddTransactions";
import Loader from "./Loader";

const TransactionsList = () => {
    const headerMobile = ["Date", "Type", "Category", "Comment", "Sum"];
    const { isOpen, openModal, closeModal } = useModal();
    const dispatch = useDispatch();
    const transactions = useSelector(selectorTransactions);
    const isLoading = useSelector(selectorIsLoading);
    const error = useSelector(selectorError);
    const hasTransaction = transactions.length > 0;

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch]);

    if(isLoading){
        return <Loader/>;
    }
    
    if(error){
        return <div className={css.error}>Error: {error}</div>;
    }

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
                            <TransactionsItem key={transaction.id} transaction={transaction} isMobile headerMobile={headerMobile}  />
                        ))}
                    </div>
                </>
            ) : (
                <div className={css.placeholder}>
                    No transactions
                </div>
            )}
            <ButtonAddTransactions onClick={openModal} />
            {isOpen && <ModalAddTransactions closeModal={closeModal} />}
        </div>
    );
};

export default TransactionsList;
