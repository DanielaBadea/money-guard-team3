import React from 'react';
import { useSelector } from 'react-redux';
import css from '../../sass/Module/StatisticsTable.module.css';

import React from 'react';
import { useSelector } from 'react-redux';
import css from '../../sass/Module/StatisticsTable.module.css';

const categories = [
  'Main expenses',
  'Products',
  'Car',
  'Self care',
  'Child care',
  'Household Products',
  'Education',
  'Leisure',
  'Other expenses',
];

const StatisticsTable = () => {
  const {
    currentMonth: transactions = [],
    loading,
    error,
  } = useSelector(state => state.transactions);

  console.log('Transactions in StatisticsTable:', transactions);

  const categorySums = categories.reduce((acc, category) => {
    acc[category] = transactions
      .filter(transaction => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
      .toFixed(2);
    return acc;
  }, {});

  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2);

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2);

  if (loading) {
    return <div className={css.loader}>Loading...</div>;
  }

  if (error) {
    return <div className={css.error}>Error: {error}</div>;
  }

  return (
    <div className={css.statisticsTable}>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 && (
            <tr>
              <td colSpan="2">
                You don't have any transactions in this period.
              </td>
            </tr>
          )}

          {categories.map(category => (
            <tr key={category}>
              <td>{category}</td>
              <td>{categorySums[category] || '0.00'}</td>
            </tr>
          ))}

          <tr>
            <td>
              <strong>Total Expenses</strong>
            </td>
            <td>{totalExpenses}</td>
          </tr>

          <tr>
            <td>
              <strong>Total Income</strong>
            </td>
            <td>{totalIncome}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
