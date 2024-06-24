import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomeTab from './HomeTab';
import StatisticsTab from './StatisticsTab';
import CurrencyTab from './CurrencyTab';
import css from '../../sass/Module/DashboardPage.module.css';
import Balance from '../Components/Balance';

const DashboardPage = () => {
  return (
    <div className={css.dashboard}>
      <nav className={css.navigation}>
      
        <div className={css.sidebar}>
          <Balance/>
        </div>
         <div className={css.sidebar}>
          <CurrencyTab />
        </div>
      </nav>
      <div className={css.content}>
        <div className={css.main}>
          <Routes>
            <Route path="home" element={<HomeTab />} />
            <Route path="statistics" element={<StatisticsTab />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
