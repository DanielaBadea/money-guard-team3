import React, { useEffect, useState, useRef } from 'react';
import css from '../../sass/Module/StatisticsDashboard.module.css';
import { useDispatch } from 'react-redux';
import { getTransactionsSummary } from '../../redux/summaryTransactions/operations';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const StatisticsDashboard = ({ summary }) => {
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(getTransactionsSummary({ month: selectedMonth, year: selectedYear }));
  }, [dispatch, selectedMonth, selectedYear]);

  const handleMonthChange = (month) => {
    setSelectedMonth(months.indexOf(month) + 1);
    setIsMonthDropdownOpen(false);
  };

  const handleYearChange = (year) => {
    setSelectedYear(parseInt(year));
    setIsYearDropdownOpen(false);
  };

  const toggleMonthDropdown = () => {
    setIsMonthDropdownOpen(!isMonthDropdownOpen);
    setIsYearDropdownOpen(false);
  };

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
    setIsMonthDropdownOpen(false);
  };

  const yearOptions = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

  return (
    <div className={`${css.statisticsDashboard}`}>
      <div className={css.selectContainer}>
        <div className={css.selectWrapper}>
          <div className={css.label} onClick={toggleMonthDropdown}>
            {months[selectedMonth - 1]}
            <IoIosArrowDown className={`${css.dropdownIcon} ${isMonthDropdownOpen ? 'open' : ''}`} />
          </div>
          {isMonthDropdownOpen && (
            <div className={css.dropdown}>
              {months.map((month, index) => (
                <div key={index} className={css.option} onClick={() => handleMonthChange(month)}>
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={css.selectWrapper}>
          <div className={css.label} onClick={toggleYearDropdown}>
            {selectedYear}
            <IoIosArrowDown className={`${css.dropdownIcon} ${isYearDropdownOpen ? 'open' : ''}`} />
          </div>
          {isYearDropdownOpen && (
            <div className={css.dropdown}>
              {yearOptions.map((year, index) => (
                <div key={index} className={css.option} onClick={() => handleYearChange(year)}>
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
