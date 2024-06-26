import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from '../Components/configRoute/RestrictedRoute';
import Navigation from '../Components/Navigation';
import Loader from "./Loader";
import DashboardPage from "../pages/DashboardPage";

const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo='/dashboard/home' component={<RegistrationPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/dashboard/home' component={<LoginPage />} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
