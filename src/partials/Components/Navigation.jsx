import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from '../../sass/Module/Navigation.module.css';
import Header from '../Components/Header';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && <Header />}
      <nav className={css.navContainer}> 
        {isLoggedIn ? (
           
          <ul className={css.list}>
            <li>
              <NavLink to="/dashboard/home" className={css.link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/statistics" className={css.link}>Statistics</NavLink>
            </li>
          </ul>

        ) : (
          <ul>
            <li>
              <NavLink to="/register" className={css.logUser}>Registration</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={css.logUser}>Login</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;
