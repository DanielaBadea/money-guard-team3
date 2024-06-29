import React, { useEffect } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import HomeTab from './HomeTab';
import StatisticsTab from './StatisticsTab';
import CurrencyTab from './CurrencyTab';
import css from '../../sass/Module/DashboardPage.module.css';
import Balance from '../Components/Balance';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';

const DashboardPage = () => {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
     {isLoggedIn && <Header />}
    
      {isLoggedIn && (
        <div className={css.dashboardPage}>
          <div className={css.wrapperPosition}>
            <div className={`${css.responsivePic} ${css.elip14}`}></div>
            <div className={`${css.responsivePic} ${css.elip19}`}></div>
            <div className={`${css.responsivePic} ${css.elip16}`}></div>
            <div className={`${css.responsivePic} ${css.elip17}`}></div> 
          <div className={css.leftContent}>
            <div className={css.containerStaticComp}>
            <Navigation/>
            <Balance />
            </div>
          
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
          </div>
          
      )}
    </>
  );
};

export default DashboardPage;
