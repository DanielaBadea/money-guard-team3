import React, { useEffect } from 'react';
import css from '../../sass/Module/HomeTab.module.css';
import TransactionsList from '../Components/TransactionsList';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const HomeTab = () => {
  const { isLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [isLoggedIn, navigate]);

  return (
    <>
      {isLoggedIn && (
        <div className={css.HomeTabWrapper}>
            <div className={css.container}>
              <TransactionsList />
            </div>
          </div>
      )}
    </>
  );
};

export default HomeTab;
