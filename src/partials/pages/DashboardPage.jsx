import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import HomeTab from './HomeTab';
import StatisticsTab from './StatisticsTab';
import CurrencyTab from './CurrencyTab';
import css from '../../sass/Module/DashboardPage.module.css';
import Balance from '../Components/Balance';


const DashboardPage = () => {
  const { isLoggedIn } = useAuth();
 
  return (
    <>
      {isLoggedIn && (
        <div className={css.dashboardPage}>
          <div className={css.leftContent}>
            <Balance />
            <div className={css.currencyContainer}>
              <CurrencyTab />
            </div>
            
          </div>

          <div className={css.rightContent}>
            <Routes>
              <Route path="home" element={<HomeTab />} />
              <Route path="statistics" element={<StatisticsTab />} />
              <Route path="currency" element={<CurrencyTab />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
