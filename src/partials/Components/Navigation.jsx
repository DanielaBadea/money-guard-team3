import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navigation = () => {

  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && (
        <ul>
           <li>
            <NavLink to="/" activeClassName="active">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" activeClassName="active">
              <span>Statistics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/currency" activeClassName="active">
              <span>Currency</span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
