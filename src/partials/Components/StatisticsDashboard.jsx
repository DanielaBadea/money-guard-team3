import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from '../../sass/Module/StatisticsDashboard.module.css';
import { fetchTransactions } from '../../redux/transactions/transactionsActions';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    dispatch(fetchTransactions(month, year));
  }, [dispatch, month, year]);

  const handleMonthChange = e => {
    setMonth(months.indexOf(e.target.value) + 1);
  };

  const handleYearChange = e => {
    setYear(e.target.value);
  };

  return (
    <div className={css.statisticsDashboard}>
      <div className={css.selectContainer}>
        <label>
          <select value={months[month - 1]} onChange={handleMonthChange}>
            {months.map((monthName, index) => (
              <option key={index} value={monthName}>
                {monthName}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select value={year} onChange={handleYearChange}>
            {Array.from({ length: 10 }, (_, index) => (
              <option
                key={index + new Date().getFullYear()}
                value={index + new Date().getFullYear()}
              >
                {index + new Date().getFullYear()}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
