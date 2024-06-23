
import React from 'react';
import { NavLink,  Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { RiH1 } from 'react-icons/ri';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import TransactionsList from "../Components/TransactionsList";

const HomeTab = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header />
          <Navigation />
          <Outlet />
        </>
      ) : (
        <ul>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
      <TransactionsList/>
    </div>
  );
};


export default HomeTab;
