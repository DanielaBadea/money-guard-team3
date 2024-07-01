import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RestrictedRoute} from '../Components/configRoute/RestrictedRoute';
import Loader from "./Loader";
// import DashboardPage from "../pages/DashboardPage";

const DashboardPage = lazy(()=>import('../pages/DashboardPage'));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo='/dashboard/home' component={<RegistrationPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/dashboard/home' component={<LoginPage />} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
