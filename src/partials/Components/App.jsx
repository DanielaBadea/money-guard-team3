import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {RestrictedRoute} from '../Components/configRoute/RestrictedRoute';
import css from "../../sass/Module/App.module.css";
import Loader from "./Loader";

const HomeTab = lazy(() => import("../pages/HomeTab"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="/register" element={<RestrictedRoute redirectTo ='/' component={<RegistrationPage />} />}/>
          <Route path="/login" element={<RestrictedRoute redirectTo ='/register' component={<LoginPage />} />}/>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
