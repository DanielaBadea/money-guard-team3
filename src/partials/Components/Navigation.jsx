import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FaHome } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import { FaDollarSign } from 'react-icons/fa6';
import Header from '../Components/Header';
import css from '../../sass/Module/Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]); 

  return (
    <>
      {/* {isLoggedIn && <Header />} */}
      <nav className={css.navContainer}>
        {isLoggedIn ? (
          <ul className={css.list}>
            <li>
              <NavLink to="/dashboard/home" className={css.link}>
                <p className={css.icon}>
                  <FaHome />
                </p>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/statistics" className={css.link}>
                <p className={css.icon}>
                  <FaChartLine />
                </p>
                <span>Statistics</span>
              </NavLink>
            </li>
            <li className={css.liCurrency}>
              <NavLink to="/dashboard/currency" className={css.link}>
                <p className={css.icon}>
                  <FaDollarSign />
                </p>
                <span>Currency</span>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/register" className={css.logUser}>
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={css.logUser}>
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;
