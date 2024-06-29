import React from 'react';
import { useSelector } from 'react-redux';
import css from '../../sass/Module/Balance.module.css';

const CurrentBalance = () => {
  const totalAmount = useSelector(state => state.transactions.totalAmount);

  return (
    <div className={css.balanceContainer}>
      <span>YOUR BALANCE</span>
      <p>RON {totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CurrentBalance;
