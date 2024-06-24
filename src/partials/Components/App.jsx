import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from '../Components/configRoute/RestrictedRoute';
import css from '../../sass/Module/App.module.css';
import Loader from './Loader';
import Header from './Header';

const HomeTab = lazy(() => import('../pages/HomeTab'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const StatisticsTab = lazy(() => import('../pages/StatisticsTab'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/register"
                component={<LoginPage />}
              />
            }
          />
          <Route path="/statistics" element={<StatisticsTab />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
