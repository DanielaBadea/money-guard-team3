import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {RestrictedRoute} from '../Components/configRoute/RestrictedRoute';
import css from "../../sass/Module/App.module.css";

const HomeTab = lazy(() => import("../pages/HomeTab"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
  return (
    <>
      <h1 className={css.title}>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="/register" element={<RestrictedRoute redirectTo ='/' component={<RegistrationPage />} />}/>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
