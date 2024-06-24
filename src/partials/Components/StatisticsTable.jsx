import React from 'react';
import { useSelector } from 'react-redux';
import css from '../../sass/Module/StatisticsTable.module.css';

const StatisticsTable = () => {
  const transactions =
    useSelector(state => state.transactions.currentMonth) || [];

  // Filter transactions into expenses and income
  const expenses = transactions.filter(
    transaction => transaction.type === 'expense'
  );
  const income = transactions.filter(
    transaction => transaction.type === 'income'
  );

  return (
    <div className={css.statisticsTable}>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {/* Message if no transactions */}
          {transactions.length === 0 && (
            <tr>
              <td colSpan="3">
                You don't have any transactions in this period.
              </td>
            </tr>
          )}

          {/* Display Expenses section */}
          <tr>
            <td colSpan="2">
              <strong>Expenses</strong>
            </td>
            <td>
              {expenses.length > 0
                ? expenses
                    .reduce(
                      (total, transaction) => total + transaction.amount,
                      0
                    )
                    .toFixed(2)
                : '0.00'}
            </td>
          </tr>

          {/* Display Income section */}
          <tr>
            <td colSpan="2">
              <strong>Income</strong>
            </td>
            <td>
              {income.length > 0
                ? income
                    .reduce(
                      (total, transaction) => total + transaction.amount,
                      0
                    )
                    .toFixed(2)
                : '0.00'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
