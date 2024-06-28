import React from "react";
import css from '../../sass/Module/AddTransactionForm.module.css'
import { IoMdAdd } from "react-icons/io";

const ButtonAddTransactions = ({onClick}) =>{
    return(
        <>
        <button type="button" className={css.btnAdd} onClick={onClick}>
            <IoMdAdd className={css.iconAdd}/>
            </button>
        </>
    )
};

export default ButtonAddTransactions;